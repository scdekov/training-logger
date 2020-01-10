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
            isWarmup: false
        };
    }

    onSubmit() {
        return fetch('/api/log-records/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.excercise,
                reps: this.state.reps,
                weight: this.state.weight,
                time_length: this.state.timeLength,
                notes: this.state.notes,
                is_warmup: this.state.isWarmup
            })
        }).then((resp) => {
            alert(resp.status);
            this.setState({
                excercise: '',
                reps: '',
                weight: '',
                timeLength: '',
                notes: '',
                isWarmup: false
            });
        });
    }

    render() {
        return (
            <div>
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
                <button onClick={this.onSubmit.bind(this)}>submit</button>
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
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                weight: this.state.weight,
                last_night_sleep_hours: this.state.lastNightSleepHous
            })
        }).then((resp) => {
            alert(resp.status);
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
