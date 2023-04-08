import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {res: true, total: 0, heads: 0, tails: 0}

  tossedCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      this.setState({res: true})
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState({res: false})
    }
  }

  render() {
    const {res, total, heads, tails} = this.state
    return (
      <div className="app-container">
        <div className="coin-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          {res ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="image"
            />
          )}
          <button type="button" className="button" onClick={this.tossedCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="total">Total: {total}</p>
            <p className="heads">Heads: {heads}</p>
            <p className="tails">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
