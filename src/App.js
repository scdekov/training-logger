import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { API_URL } from './constants';
import axios from "axios";
import LogRecord from './components/log-record';
import WeightChart from './components/charts';
import DailyMeasurements from './components/daily-measurements';
import ViewLogs from './components/view-logs';
import NutritionPlan from './components/nutrition';
import ClickOutside from './components/utils/click-outside';
import './App.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.baseURL = API_URL;

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            excercises: [],
            sideNavExpanded: false
        }
        history.pushState({}, 'home', 'home');
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
                    <Route render={({ location, history }) => (
                        <React.Fragment>
                            <SideNav className="side-nav"
                                expanded={this.state.sideNavExpanded}
                                onSelect={selected => {
                                    const to = '/' + selected;
                                    if (location.pathname !== to) {
                                        history.push(to);
                                    }
                                }}
                                onToggle={expanded => {
                                    this.setState({ sideNavExpanded: expanded });
                                }}
                            >
                                <ClickOutside
                                    onClickOutside={() => {
                                        this.setState({ sideNavExpanded: false });
                                    }}
                                ></ClickOutside>
                                <SideNav.Toggle />
                                <SideNav.Nav defaultSelected="home">
                                    <NavItem eventKey="home">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                        </NavIcon>
                                        <NavText>
                                            Add logs
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="charts">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                        </NavIcon>
                                        <NavText>
                                            Charts
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="view-logs">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                        </NavIcon>
                                        <NavText>
                                            View logs
                                        </NavText>
                                    </NavItem>
                                    <NavItem eventKey="nutrition">
                                        <NavIcon>
                                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                                        </NavIcon>
                                        <NavText>
                                            Generate nutrition plan
                                        </NavText>
                                    </NavItem>
                                </SideNav.Nav>
                            </SideNav>
                            <main>
                                <Route path="/home">
                                    <div>
                                        <LogRecord excercises={this.state.excercises} />
                                        <DailyMeasurements/>
                                    </div>
                                </Route>
                                <Route path="/view-logs">
                                    <ViewLogs/>
                                </Route>
                                <Route path="/charts">
                                    <WeightChart />
                                </Route>
                                <Route path="/nutrition">
                                    <NutritionPlan />
                                </Route>
                            </main>
                        </React.Fragment>
                    )}
                    />
                </BrowserRouter>
            </div>
        )
    }
}


export default App;
