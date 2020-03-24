import React, { Component } from "react"
import { Layout } from "~/components/Layout/Layout"
import Card from '../components/card/card'

import { stateTop, stateMasked, bigTop, IColCardProps } from '../state/state'

interface IState {
  topHeight: number;
  maskedHeight: number;
  curVp : number;
}

export default class extends Component<IState> {

  state = {
    topHeight: 0,
    maskedHeight: 0,
    curVp : 0
  }

  componentDidMount () {
    this.setState({ curVp: window.innerWidth })
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }
  
  cardToProps(array: any, callback: any) {
    return array.map((item: IColCardProps, index: number) => {
      return (
        <div className={`col ${item.className}`} key={index}>
          <Card cardProps={item.cardProps} callback={callback} context={this} />
        </div>
      )
    })
  }

  getMaxTopHeight = (height: number) => {
    
    if (this.state && height > this.state.topHeight) {
      this.state.topHeight = height
    }
  }

  getMaxMaskedHeight = (height: number) => {
    if (this.state && height > this.state.maskedHeight) {
      this.state.maskedHeight = height
    }
  }

  resize = () => {
    this.setState({ curVp: window.innerWidth })
  }

  render() {
    return (
      <Layout>
        <div className="container">
          <h2 className="headers mb--more-small">ТОП <span className="italic">10</span> мест</h2>

          <div className="row">
            { stateTop && this.cardToProps(bigTop, null)}
          </div>

          <div className="list" style={this.state.curVp > 0 && this.state.curVp < 767 ? {height: `${this.state.topHeight}px`} : undefined}>
            <div className="row">
              { stateTop && this.cardToProps(stateTop, this.getMaxTopHeight)}
            </div>
          </div>

          <h2 className="headers mb--more-medium mt--big"><span className="italic">Скоро</span> на сайте</h2>

          <div className="list" style={this.state.curVp > 0 && this.state.curVp < 767 ? {height: `${this.state.maskedHeight}px`} : undefined }>
            <div className="row">
              { stateMasked && this.cardToProps(stateMasked, this.getMaxMaskedHeight)}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
