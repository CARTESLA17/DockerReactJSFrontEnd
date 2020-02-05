import React, { Component } from 'react';
import moment from 'moment';
import './Notes.css';
import { notes1, notes2} from './data';
const formatTime = 'YYYY-MM-DD HH:mm:ss';

class Notes extends Component {

    constructor() {
  		super();
          // We save the first date when the data is
  		// rendered at the beginning
  		this.state = {
        notes: notes1,
  			lastUpdate: moment().format(formatTime).toString()
  		}
  	}

    componentDidMount() {
      // After 10 seconds (10000 milliseconds) we concatenate our
      // data with notes2...
      setTimeout(() => {
        this.setState({
          notes: [
            ...notes1,
            ...notes2
          ],
          lastUpdate: moment().format(formatTime).toString()
        });
      }, 10000);
    }

    componentWillReceiveProps(nextProps) {
		// If the prop notes has changed...
  		if( nextProps.notes !== this.props.notes ){
  			this.setState({
  				lastUpdate: moment().format(formatTime).toString()
  			});
  		}
  	}

    render() {
  		 return (
  			<div className="Notes">
  				<h1>Notes:</h1>
  				<ul>
  					{this.state.notes.map((note, key) => (
  						<li key={key}>{note.title} - {note.content}</li>
  					))}
  				</ul>
  				<p>Last Update: <strong>{this.state.lastUpdate}</strong></p>
  			</div>
  		);
  	}

}
export default Notes;
