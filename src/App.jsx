import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  state={
    profile:{
    fullName : 'Pnl',
    bio: 'best idol ever',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/PNL_en_concert.jpg/220px-PNL_en_concert.jpg' ,
    profession: ' Rappeur Professionnel'
    },
    Show: false, 
    counter : 0
  }
  increment = () => this.setState({counter:this.state.counter+1})
  handleShow = () => this.setState({show:!this.state.show})
  componentDidMount(){
    setInterval(() => {
      this.increment()
    }, 1000);
  }
  render() {

    return (
  
      <div className='App'>
        <button onClick={this.handleShow}> {this.state.show ? 'Hide' : 'show' } </button>
       { this.state.show &&
        <div>
    <h3>Name: {this.state.profile.fullName}</h3>  
    <h3>Bio: {this.state.profile.bio}</h3>  
    <h3>Profession: {this.state.profile.profession}</h3>  
    <img src={this.state.profile.imgSrc} alt="image" />
   <h3>counter:{this.state.counter}</h3>
   </div>
  } 
 </div>
    )
  }
}

