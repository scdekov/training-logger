class LineChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch('/api/daily-measurements/')
        .then(resp => resp.json())
        .then(respJson => this.setState({
            data: respJson.map(measurement => ({
                date: moment(measurement.date_created).format('MMM Do'),
                weight: measurement.weight,
                lastNightSleepHours: measurement.last_night_sleep_hours
            })).reverse()
        }));
    }

    render() {
        return (
            <Recharts.LineChart width={800} height={400} data={this.state.data}>
                <Recharts.CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                <Recharts.Tooltip />
                <Recharts.Legend verticalAlign="top" height={36}/>

                <Recharts.Line connectNulls
                               type="monotone"
                               strokeWidth="3"
                               dataKey="weight"
                               stroke="#8884d8" />
                <Recharts.XAxis dataKey="date" padding={{ left: 30, right: 30 }}/>
                <Recharts.YAxis type="number"
                                dataKey="weight"
                                domain={['dataMin - 50', 'dataMax + 30']}>
                </Recharts.YAxis>

                <Recharts.Line connectNulls
                               type="monotone"
                               strokeWidth="3"
                               dataKey="lastNightSleepHours"
                               yAxisId="1"
                               stroke="#505050" />
                <Recharts.XAxis dataKey="date" padding={{ left: 30, right: 30 }}/>
                <Recharts.YAxis type="number"
                                yAxisId="1"
                                dataKey="lastNightSleepHours"
                                orientation="right"
                                 />
            </Recharts.LineChart>
        );
    }
}
