import React, { Component } from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import {API_URL} from './constants';
import axios from "axios";
import LogRecord from './components/log-record';
import WeightChart from './components/charts';
import DailyMeasurements from './components/daily-measurements';
import ViewLogs from './components/view-logs';
import NutritionPlan from './components/nutrition';
import './App.css';

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = API_URL;

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            'excercises': []
        }
    }

    componentDidMount() {
        axios.get('/api/excercises/')
        .then(resp => this.setState({
            excercises: resp.data
        }));
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Add logs</Link>
                                </li>
                                <li>
                                    <Link to="/view-logs">View logs</Link>
                                </li>
                                <li>
                                    <Link to="/charts">Charts</Link>
                                </li>
                                <li>
                                    <Link to="/nutrition">Nutrition</Link>
                                </li>
                                <li>
                                    <a href="/api/daily-measurements">All daily measurements</a>
                                </li>
                            </ul>
                        </nav>

                        <Switch>
                            <Route path="/view-logs">
                                <ViewLogs/>
                            </Route>
                            <Route path="/charts">
                                <WeightChart />
                            </Route>
                            <Route path="/nutrition">
                                <NutritionPlan />
                            </Route>
                            <Route path="/">
                                <div>
                                    <LogRecord excercises={this.state.excercises} />
                                    <DailyMeasurements/>
                                </div>
                            </Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}


export default App;
