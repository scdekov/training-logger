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
                time_legth: this.state.timeLength,
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




// class Winners extends React.Component{
//     render() {
//         if (!this.props.winningNumbers.length) {
//             return null;
//         }
//         return (
//             <div className="winners-table">
//                 <p>Winning numbers: {this.props.winningNumbers.join(', ')}</p>
//                 {(() => this.props.winners.length ? null : <p>No winners</p>)()}
//                 {(() => this.props.winners.length ?
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Nickname</th>
//                             <th>Numbers</th>
//                             <th>Matching Numbers</th>
//                             <th>Prize</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {(() => this.props.winners.sort((a, b) => b.matching_numbers - a.matching_numbers)
//                                                   .map(winner => (
//                             <React.Fragment key={winner.id}>
//                                 <tr>
//                                     <td>{winner.nickname}</td>
//                                     <td>{winner.numbers.join(', ')}</td>
//                                     <td>{winner.matching_numbers}</td>
//                                     <td>${winner.prize}</td>
//                                 </tr>
//                             </React.Fragment>
//                         )))()}
//                     </tbody>
//                 </table>
//                 : null)()}
//             </div>
//         )
//     }
// }


// class TicketBlock extends React.Component{
//     render () {
//         return (<div className="ticket-block">
//             <div className="ticket-block-background">{this.props.ix}</div>
//             {[...Array(49).keys()].map(i => {
//                 let ix = i + 1;
//                 let classNames = 'ticket-cell';
//                 if (ix >= 1 && ix <= 8) {
//                     classNames += ' first-row';
//                 }
//                 if ([15, 22, 29, 36, 43].includes(ix)) {
//                     classNames += ' first-col';
//                 }
//                 let checked = this.props.selectedNumbers.includes(ix);
//                 return (<div key={ix}
//                                 className={classNames}
//                                 onClick={() => this.props.selectNumber(ix)}>
//                                 {ix}
//                                 {(() => {
//                                     if(checked) {
//                                     return (<span className="checked"></span>);
//                                     }
//                                     return;
//                                 })()}
//                         </div>);
//             })}
//         </div>)
//     }
// }


// class Ticket extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedNumbers: [[], [], [], []],
//             nickname: '',
//             gameId: null,
//             submittedTicketsCount: 0,
//             winningNumbers: [],
//             winners: []
//         };
//     }

//     componentDidMount() {
//         fetch('/api/games/@latest/')
//         .then(resp => {
//             if (resp.status === 404) {
//                 this.setNewGameId();
//                 return Promise.reject();
//             } else {
//                 return resp.json();
//             }
//         }).then(respJson => this.setState({
//             gameId: respJson.id,
//             submittedTicketsCount: respJson.submitted_tickets_count
//         }))
//     }

//     submitTicket() {
//         if (!this.getAllowSubmit(this.state.selectedNumbers)){
//             alert('Fill 6 numbers in all 4 sections and add your nickname!')
//             return;
//         }

//         let requests = this.state.selectedNumbers.map((selectedNumbers) => {
//             return fetch('/api/tickets/', {
//                 method: 'POST',
//                 headers: {'Content-Type': 'application/json'},
//                 body: JSON.stringify({
//                     nickname: this.state.nickname,
//                     numbers: selectedNumbers,
//                     game: this.state.gameId,
//                     winners: []
//                 })
//             });
//         });

//         Promise.all(requests).then((responses) => {
//             if (!responses.reduce((success, resp) => success && resp.status == 201, true)) {
//                 alert('fail check console for errors');
//                 console.error(responses);
//                 return;
//             }
//             this.setState({submittedTicketsCount: this.state.submittedTicketsCount + 4});
//             this.clear();
//         });
//     }

//     clear() {
//         this.setState({
//             selectedNumbers: [[], [], [], []],
//         });
//     }

//     setNewGameId() {
//         fetch('/api/games/', {method: 'POST'})
//         .then(resp => resp.json)
//         .then(respJson => this.setState({gameId: respJson.id}));
//     }

//     draw() {
//         this.setState({winners: [], winningNumbers: []});
//         fetch('/api/games/' + this.state.gameId + '/@draw/', {method: 'POST'})
//         .then((resp) => {
//             if (!resp.status === 202) {
//                 alert('fail to draw, check console');
//                 console.error(resp)
//                 return;
//             }

//             fetch('/api/games/' + this.state.gameId + '/')
//             .then(resp => resp.json())
//             .then(respJson => {
//                 this.setState({winners: respJson.winners, winningNumbers: respJson.winning_numbers});
//                 this.clear();
//                 // this.setNewGameId();
//             });
//         })
//     }

//     selectNumber(number, arrIx) {
//         let selectedNumbers = this.state.selectedNumbers[arrIx];
//         if (selectedNumbers.includes(number)) {
//             selectedNumbers = selectedNumbers.filter(n => n !== number);
//         } else if (selectedNumbers.length < 6) {
//             selectedNumbers = [number, ...selectedNumbers];
//         } else {
//             return;
//         }
//         let newSelectedNumbersArray = this.state.selectedNumbers;
//         newSelectedNumbersArray.splice(arrIx, 1, selectedNumbers);

//         this.setState({
//             selectedNumbers: newSelectedNumbersArray
//         });
//     }

//     getAllowSubmit(selectedNumbers) {
//         return selectedNumbers.reduce((result, arr) => result && arr.length == 6,
//                                         !!this.state.nickname)
//     }

//     render() {
//         return (
//             <div className="ticket-container">
//                 <div className="ticket-body">
//                     <TicketBlock ix={1}
//                                     selectedNumbers={this.state.selectedNumbers[0]}
//                                     selectNumber={(number) => this.selectNumber(number, 0)}/>
//                     <TicketBlock ix={2}
//                                     selectedNumbers={this.state.selectedNumbers[1]}
//                                     selectNumber={(number) => this.selectNumber(number, 1)}/>
//                     <TicketBlock ix={3}
//                                     selectedNumbers={this.state.selectedNumbers[2]}
//                                     selectNumber={(number) => this.selectNumber(number, 2)}/>
//                     <TicketBlock ix={4} selectedNumbers={this.state.selectedNumbers[3]}
//                                     selectNumber={(number) => this.selectNumber(number, 3)}/>
//                 </div>
//                 <div className="ticket-footer">
//                     <img src="/static/images/sfera.png"/>
//                     <span className="footer-text">6/49</span>
//                     <button className="submit-button" onClick={this.draw.bind(this)}>Draw</button>
//                     <button className="submit-button"
//                             onClick={this.submitTicket.bind(this)}
//                             >Submit</button>
//                     <input className="submit-button"
//                             type="text"
//                             onChange={(e) => this.setState({
//                                 nickname: e.target.value
//                             })}
//                             placeholder="Nickname"/>
//                 </div>
//                 <p>Submitted tickets count: {this.state.submittedTicketsCount}</p>
//                 <Winners winners={this.state.winners} winningNumbers={this.state.winningNumbers}/>
//             </div>
//         )
//     }
// }

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
