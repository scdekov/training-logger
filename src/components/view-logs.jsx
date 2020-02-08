import React, {Component} from 'react';
import moment from 'moment';
import axios from 'axios';

const DATE_FORMAT = 'DD-MM-YYYY';

export default class ViewLogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: moment().format(DATE_FORMAT),
            logs: []
        }
    }

    fetchLogs(date) {
        axios.get('/api/log-records/', {params: {'day': date}})
        .then(resp => this.setState({
            logs: resp.data
        }))
    }

    componentDidMount() {
        this.fetchLogs(this.state.selectedDate);
    }

    changeDate(event, direction) {
        event.preventDefault();
        var newDate = moment(this.state.selectedDate, DATE_FORMAT)
            .add(direction === 'next' ? 1 : -1, 'day')
            .format(DATE_FORMAT);
        this.setState({
            selectedDate: newDate
        });
        this.fetchLogs(newDate);
    }

    render() {
        return (
            <div>
                <div>
                    <a className="prev-log-day"
                       href=""
                       onClick={e => this.changeDate(e, 'prev')}>previous day</a>
                    {this.state.selectedDate}
                    <a className="next-log-day"
                       href=""
                       onClick={e => this.changeDate(e, 'next')}>next day</a>
                </div>
                {this.state.logs.map((log, ix) => (
                    <div key={ix}>
                        <p key={ix + 'p'}>{log.is_warmup ? 'Warmup': ''}&ensp;
                           {log.excercise_name}&ensp;
                           reps: {log.reps}&ensp;
                           weight: {log.weight}&ensp;
                           {log.time_length ? 'time: ' + log.time_length : ''}&ensp;
                           {log.notes ? 'note: ' + log.notes : ''}&ensp;
                        </p>
                    </div>
                ))}
            </div>
        )
    }
}
