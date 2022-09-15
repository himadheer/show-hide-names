// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  onClickFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  onClickingLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state
    const hideShowFirstName = showFirstName ? 'show-card' : 'hide-card'
    const hideShowLastName = showLastName ? 'show-card' : 'hide-card'
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="hide-show-containers">
          <div className="hide-show-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickFirstName}
            >
              Show/Hide Firstname
            </button>
            <p className={`card ${hideShowFirstName}`}>Joe</p>
          </div>
          <div className="hide-show-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickingLastName}
            >
              Show/Hide Lastname
            </button>
            <p className={`card ${hideShowLastName}`}>Jonas</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
