import React, { Component } from 'react';
import c3 from 'c3';
import './Chart.css';

class Chart extends Component {

  constructor(props) {
    super(props);
        // The first time we load the notes1...
        this.state = {
           chartType: 'line'
        };
      this.columns = [
        ['BTC', 3000, 6000, 10000, 15000, 13000, 11000],
        ['ETH', 2000, 3000, 5000, 4000, 3000, 940],
        ['XRP', 100, 200, 300, 500, 400, 300],
      ];

  }

  setChartType = type => {
		this.setState({
			chartType: type
		});
	}

    componentDidMount() {
		// When the component mounts the first time we update
		// the chart.
		this.updateChart();
	}

    componentDidUpdate() {
		// When we receive a new prop then we update the chart again.
		this.updateChart();
	}

    updateChart() {
		c3.generate({
			bindto: '#chart',
			data: {
				columns: this.columns,
				type: this.state.chartType
			}
		});
	}

  render() {
		return (
           <div>
              <div id="chart" />
              <p>
                Chart Type
                <button onClick={() => this.setChartType('bar')}>Bar</button>
                <button onClick={() => this.setChartType('line')}>Line</button>
              </p>
           </div>
         );
	}

}
export default Chart;
