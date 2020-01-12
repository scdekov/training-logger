class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            'excercises': []
        }
    }

    componentDidMount() {
        fetch('/api/excercises/')
        .then(resp => resp.json())
        .then(respJson => this.setState({
            excercises: respJson
        }));
    }

    render() {
        return (
            <div>
                <a href="/api/log-records">All logs</a>
                <a href="/api/daily-measurements">All daily measurements</a>
                <h3>Training Log</h3>
                <LogRecord excercises={this.state.excercises}></LogRecord>
                <h3>Daily Measurements</h3>
                <DailyMeasurements></DailyMeasurements>
            </div>
        )
    }
}

class LogRecord extends React.Component{
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
        return fetch('/api/log-records/', {
            method: 'POST',
            headers: {
                'X-CSRFToken': Cookies.get('csrftoken'),
                'Content-Type': 'application/json'
            },
            body: this._prepareData(data),
            credentials: 'same-origin',
        }).then((resp) => {
            if (resp.status.toString()[0] !== '2') {
                resp.text().then(text => alert(text))
                return;
            }
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
        });
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
                        inputProps={{placeHolder: "excercise"}}
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
                        <input type="number"
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
                    <button onClick={this.onRepeatLast.bind(this)}>repeat last</button>
                </div>
                {(() => Object.entries(this.state.lastAdded).length === 0 ? '' : (
                <div>
                    <h4>Last Added</h4>
                    <p>Excercise: {this.state.lastAdded.excercise}</p>
                    <p>Reps: {this.state.lastAdded.reps}</p>
                    <p>Weight: {this.state.lastAdded.weight} kg</p>
                    <p>Time Length: {this.state.lastAdded.timeLength}</p>
                    <p>Notes: {this.state.lastAdded.notes}</p>
                </div>
                ))()}
            </div>
        )
    }
}


class DailyMeasurements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weight: '',
            lastNightSleepHous: ''
        }
    }

    onSubmit() {
        return fetch('/api/daily-measurements/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            },
            body: JSON.stringify({
                weight: this.state.weight || null,
                last_night_sleep_hours: this.state.lastNightSleepHous || null
            }),
            credentials: 'same-origin',
        }).then((resp) => {
            if (resp.status.toString()[0] !== '2') {
                resp.text().then(text => alert(text))
                return;
            }
            this.setState({
                weight: '',
                lastNightSleepHous: ''
            });
        });

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


ReactDOM.render(
    <App />,
    document.getElementById('root')
);
