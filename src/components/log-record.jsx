import React, {Component} from 'react';
import ReactAutocomplete from 'react-autocomplete';
import axios from "axios";
import {API_URL} from '../constants';

export default class LogRecord extends Component{
    constructor(props) {
        super(props);
        this.state = {
            excercise: '',
            reps: '',
            weight: '',
            timeLength: '',
            notes: '',
            isWarmup: false,
            lastAdded: {},
            testMode: false
        };
    }

    onSubmit() {
        this.createLogRecord(this.state);
    }

    createLogRecord(data) {
        return axios.post(API_URL + '/api/log-records/', this._prepareData(data))
        .then((resp) => {
            this.setState({
                excercise: '',
                reps: '',
                weight: '',
                timeLength: '',
                notes: '',
                isWarmup: false,
                lastAdded: data,
                testMode: false
            });
        }).catch(err => alert(err.response.data.detail));
    }

    onRepeatLast() {
        this.createLogRecord(this.state.lastAdded);
    }

    _prepareData(data) {
        return JSON.stringify({
            name: data.excercise,
            reps: data.reps,
            weight: data.weight,
            time_length: data.timeLength,
            notes: data.notes,
            is_warmup: data.isWarmup,
            test_mode: data.testMode,
        });
    }

    render() {
        return (
            <div className="flex-block">
                <div className="create-log-record">
                    <ReactAutocomplete
                        getItemValue={(item) => item.name}
                        items={this.props.excercises}
                        renderItem={(item, isHighlighted) =>
                            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }} key={item.name}>
                                {item.name}
                            </div>
                        }
                        value={this.state.excercise}
                        onChange={(e) => this.setState({'excercise': e.target.value})}
                        inputProps={{placeholder: "excercise"}}
                        shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                        onSelect={(val) => this.setState({'excercise': val})}
                    />
                    <div>
                        <input type="number"
                            value={this.state.reps}
                            onChange={e => this.setState({'reps': e.target.value})}
                            placeholder='reps'/>
                    </div>
                    <div>
                        <input type="number"
                            value={this.state.weight}
                            onChange={e => this.setState({'weight': e.target.value})}
                            placeholder='weight'/>
                    </div>
                    <div>
                        <input type="number"
                            value={this.state.timeLength}
                            onChange={e => this.setState({'timeLength': e.target.value})}
                            placeholder='time length seconds'/>
                    </div>
                    <div>
                        <input type="text"
                            value={this.state.notes}
                            onChange={e => this.setState({'notes': e.target.value})}
                            placeholder='notes'/>
                    </div>
                    <div>
                        <label>Warmup?</label>
                        <input type="checkbox"
                            checked={this.state.isWarmup}
                            onChange={e => this.setState({'isWarmup': e.target.checked})}
                            />
                    </div>
                    <div>
                        <label>Test mode?</label>
                        <input type="checkbox"
                            checked={this.state.testMode}
                            onChange={e => this.setState({'testMode': e.target.checked})}
                            />
                    </div>
                    <button onClick={this.onSubmit.bind(this)}>submit</button>
                    <button onClick={this.onRepeatLast.bind(this)}
                            disabled={Object.entries(this.state.lastAdded).length === 0}>repeat last</button>
                </div>
                {Object.entries(this.state.lastAdded).length > 0 && (
                    <div>
                        <h4>Last Added</h4>
                        <p>Excercise: {this.state.lastAdded.excercise}</p>
                        <p>Reps: {this.state.lastAdded.reps}</p>
                        <p>Weight: {this.state.lastAdded.weight} kg</p>
                        <p>Time Length: {this.state.lastAdded.timeLength}</p>
                        <p>Notes: {this.state.lastAdded.notes}</p>
                    </div>
                )}
            </div>
        )
    }
}
