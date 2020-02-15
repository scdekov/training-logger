import React, {Component} from 'react';
import moment from 'moment';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export default class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedChart: 'weight-sleep',
            charts: ['weight-sleep'].concat(props.excercises.map(e => e.name)),
        }
    }

    render () {
        return (
            <div>
                <label>Select chart:
                    <select onChange={e => this.setState({selectedChart: e.target.value})}>
                        {this.state.charts.map((chart, ix) => (
                            <option value={chart}
                                    key={ix}>{chart}</option>
                        ))}
                    </select>
                </label>
                {this.state.selectedChart === 'weight-sleep' ?
                 (<WeightChart></WeightChart>) :
                 (<ExcerciseChart excercise={this.state.selectedChart}></ExcerciseChart>)}
            </div>
        );
    }
}

class ExcerciseChart extends Component {
    constructor(props) {
        super(props);
        this.state = {chartData: []}
    }

    loadExcerciseData() {
        axios.get('/api/log-records/', {params: {excercise: this.props.excercise}})
        .then(excercises => this.setState({
            chartData: this.prepareChartData(excercises.data)
        }));
    }

    componentDidMount() {
        this.loadExcerciseData();
    }

    componentDidUpdate(previousProps) {
        if (previousProps.excercise !== this.props.excercise) {
            this.loadExcerciseData();
        }
    }

    prepareChartData(data) {
        var groupedByDay = data.reduce((grouped, excercise) => {
            let date = moment(excercise.date_created).format('MMM Do')
            if (grouped[date] === undefined) {
                grouped[date] = []
            }
            grouped[date].push(excercise)
            return grouped;
        }, {})

        return Object.keys(groupedByDay).reduce((result, day) => {
            let grouped = groupedByDay[day];
            let groupedByweight = grouped.reduce((res, log) => {
                if (res[log.weight] === undefined){
                    res[log.weight] = {reps: 0, notes: '', volume: 0};
                }
                res[log.weight].volume += (log.weight || 1) * log.reps;
                res[log.weight].reps += log.reps;
                res[log.weight].notes += log.notes;
                res[log.weight].weight = log.weight;
                res[log.weight].date = day;
                return res;
            }, {});

            return result.concat(Object.values(groupedByweight));
        }, [])
    }

    buildTooltip({ active, payload, label }){
        if (active) {
            return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
                <p className="desc">{JSON.stringify(payload.map(p => p.payload))}</p>
            </div>
            );
        }

        return null;
    };

    render() {
        return (
            <LineChart width={800} height={400} data={this.state.chartData}>
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                <Tooltip content={this.buildTooltip.bind(this)}/>
                <Legend verticalAlign="top" height={36}/>

                <Line connectNulls
                               type="monotone"
                               strokeWidth="3"
                               dataKey="volume"
                               stroke="#8884d8" />
                <XAxis dataKey="date" padding={{ left: 30, right: 30 }}/>
                <YAxis type="number"
                                dataKey="volume"
                                domain={['dataMin - 50', 'dataMax + 30']}>
                </YAxis>
            </LineChart>
        );
    }
}

class WeightChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        axios.get('/api/daily-measurements/')
        .then(respJson => this.setState({
            data: respJson.data.map(measurement => ({
                date: moment(measurement.date_created).format('MMM Do'),
                weight: measurement.weight,
                lastNightSleepHours: measurement.last_night_sleep_hours
            })).reverse()
        }));
    }

    render() {
        return (
            <LineChart width={800} height={400} data={this.state.data}>
                <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                <Tooltip />
                <Legend verticalAlign="top" height={36}/>

                <Line connectNulls
                               type="monotone"
                               strokeWidth="3"
                               dataKey="weight"
                               stroke="#8884d8" />
                <XAxis dataKey="date" padding={{ left: 30, right: 30 }}/>
                <YAxis type="number"
                                dataKey="weight"
                                domain={['dataMin - 50', 'dataMax + 30']}>
                </YAxis>

                <Line connectNulls
                               type="monotone"
                               strokeWidth="3"
                               dataKey="lastNightSleepHours"
                               yAxisId="1"
                               stroke="#505050" />
                <XAxis dataKey="date" padding={{ left: 30, right: 30 }}/>
                <YAxis type="number"
                                yAxisId="1"
                                dataKey="lastNightSleepHours"
                                orientation="right"
                                 />
            </LineChart>
        );
    }
}
