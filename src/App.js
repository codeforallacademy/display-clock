import logo from './logo.svg';
import './App.css';
import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), showClock: true }
  }

  handleButtonClick = () => {
    this.setState({showClock: !this.state.showClock })
  }

  render() {
    return (<div>
      <button onClick={() => this.handleButtonClick()} className="btn">Toggle clock</button>
      <br />
      { this.state.showClock && this.state.date.toLocaleTimeString()}
    </div>);
  }
  componentDidMount() {
    const onesecond = 1000;
    this.intervalID = setInterval(() => { this.setState({ date: new Date }); }, onesecond);
  }

  componentWillUnmount(){
    clearInterval(this.intervalID)
  }
}
export default Clock;
