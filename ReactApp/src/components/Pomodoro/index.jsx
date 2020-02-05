import React, { Component } from 'react'; 
import './Timer.css';

class Timer extends Component {  

	constructor() { 
		super();
		// Initial State 
		this.state = { 
			alert: {
				type: '',
				message: ''
			},
			time: 0,
			play: true
		};
		// Defined times for work, short break and long break...
		this.times = {
			defaultTime: 300, // 5 min
			shortBreak: 60, // 1 min
			longBreak: 180 // 3 min
		};
	}	
	
    componentDidMount() {
		// Set default time when the component mounts
		this.setTimeInScreen({
				type: 'work',
				message: 'Working!'
			},
			this.times.defaultTime
		); 
    }	
	
	play = () => {
		this.setState({
			play: true
		});		
	}
	
	pause = () => {
		this.setState({
			play: false
		});
	}
	
	restart = () => {
		this.setTimeInScreen({
				type: 'work',
				message: 'Working!'
			},
			this.times.defaultTime
		); 
	}
	
	setTimeInScreen = (alertType,time) => {
		this.setState({
			alert: {
				type: alertType.type,
				message: alertType.message
			},
			play: true
		});
		return this.setTime(time);
	}
	
	setTime = newTime => {
		this.restartInterval();
		this.setState({
			time: newTime
		});
	}
	
	restartInterval = () => {
		// Clearing the interval
		clearInterval(this.interval);
		// Execute countDown function every second
		this.interval = setInterval(this.countDown, 1000);
	}

	countDown = () => {    
		// If the time reach 0 then we display Buzzzz! alert.
		if (this.state.time === 0) {
			this.setState({
				alert: { 
					type: 'buz',
					message: 'Buzzzzzzzz!'
				}
			});
		} else if(this.state.play) {
			// We decrease the time second by second
			this.setState({
				time: this.state.time - 1 
			});
		}
	}
	
	displayTimer(seconds) {
		// Formatting the time into mm:ss
		const m = Math.floor(seconds % 3600 / 60);
		const s = Math.floor(seconds % 3600 % 60);
		return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
	} 
	
    render() {
		const { alert: { message, type }, time } = this.state;
		return (
			<div className="Pomodoro">
				<div className={`alert ${type}`}>
					{message}
				</div>
				<div className="timer">
					{this.displayTimer(time)}
				</div>
				<div className="types">
					<button className="start"
							onClick={ () =>
								this.setTimeInScreen({
										type: 'work',
										message: 'Working!'
									},
									this.times.defaultTime)
							}
					>
						Start Working
					</button>
					<button	className="short"
						onClick={ () =>
								this.setTimeInScreen({
										type: 'shortBreak',
										message: 'Taking a Short Break!'
									},
									this.times.shortBreak)
							}
					>
						Short Break
					</button>
					<button className="long"
						onClick={ () =>
								this.setTimeInScreen({
										type: 'longBreak',
										message: 'Taking a Long Break!'
									},
									this.times.longBreak)
							}
					>
						Long Break
					</button>
					<button className="long"
						onClick={ this.play	}
					>
						Play
					</button>
					<button className="long"
						onClick={ this.pause }
					>
						Pause
					</button>
					<button className="long"
						onClick={ this.restart }
					>
						Reset
					</button>
				</div>
			</div>
		);  
	}
}

export default Timer;
