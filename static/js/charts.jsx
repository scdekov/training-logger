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
                date: moment(measurement.date_created).format('MMM Do YYYY'),
                weight: measurement.weight
            })).reverse()
        }));
    }

    render() {
        return (
            <Recharts.LineChart width={400} height={400} data={this.state.data}>
                <Recharts.Line type="monotone" dataKey="weight" stroke="#8884d8" />
                <Recharts.CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <Recharts.Tooltip />
                <Recharts.XAxis dataKey="date"/>
                <Recharts.YAxis />
            </Recharts.LineChart>
        );
    }
}
