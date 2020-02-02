import React, {Component} from 'react';
import moment from 'moment';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default class WeightChart extends Component {
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
