import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {count: 0 * 60}

  onClickRestart = () => {
    this.setState({count: 0 * 60})
    clearInterval(this.timerID)
  }

  onClickStop = () => {
    clearInterval(this.timerID)
  }

  tick = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onClickStart = () => {
    this.timerID = setInterval(this.tick, 1000)
  }

  seconds = () => {
    const {count} = this.state
    const valueSeconds = Math.floor(count % 60)

    if (valueSeconds >= 10) {
      return valueSeconds
    }

    return `0${valueSeconds}`
  }

  minutes = () => {
    const {count} = this.state

    const valueMinute = Math.floor(count / 60)

    if (valueMinute >= 10) {
      return valueMinute
    }

    return `0${valueMinute}`
  }

  render() {
    const timeValue = `${this.minutes()}:${this.seconds()}`

    return (
      <div className="bg-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="sub-container">
          <div className="timer-container">
            <img
              className="image-resize"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timer-para">Timer</p>
          </div>
          <h1 className="tme-heading">{timeValue}</h1>
          <div className="btn-container">
            <button
              className="btn-start"
              onClick={this.onClickStart}
              type="button"
            >
              Start
            </button>
            <button
              onClick={this.onClickStop}
              className="btn-stop"
              type="button"
            >
              Stop
            </button>
            <button
              onClick={this.onClickRestart}
              className="btn-restart"
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
