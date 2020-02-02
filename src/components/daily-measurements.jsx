import React, {Component} from 'react';
import axios from 'axios';

export default class DailyMeasurements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: '',
            lastNightSleepHous: ''
        }
    }

    onSubmit() {
        return axios.post('/api/daily-measurements/', {
                weight: this.state.weight || null,
                last_night_sleep_hours: this.state.lastNightSleepHous || null
        }).then(resp => {
            this.setState({
                weight: '',
                lastNightSleepHous: ''
            });
        }).catch(err => alert(err.response.data.detail));
    }

    render() {
        return (
            <div>
                <div>
                    <input type="number"
                           placeholder="weight"
                           value={this.state.weight}
                           onChange={e => this.setState({weight: e.target.value})}/>
                </div>
                <div>
                    <input type="number"
                           placeholder="last sleep hours"
                           value={this.state.lastNightSleepHous}
                           onChange={e => this.setState({lastNightSleepHous: e.target.value})}/>
                </div>
                <button onClick={this.onSubmit.bind(this)}>submit</button>
            </div>
        )
    }
}
