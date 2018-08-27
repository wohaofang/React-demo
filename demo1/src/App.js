import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isToggleOn: true
    }

    // this.handleClick = this.handleClick.bind(this)
    
  }

  // handleClick(type){
  //   return()=>{
  //     console.log(type)
  //     this.setState({
  //       isToggleOn : !this.state.isToggleOn,
  //       type: ++this.state.type || type
  //     })
  //   }
    // this.setState(prevState=>({
    //   isToggleOn : !prevState.isToggleOn
    // }))
  // }

    handleClick = (type)=>{
      // console.log(this)
      return(()=>{
        this.setState({
          isToggleOn : !this.state.isToggleOn,
          type: ++this.state.type || type
        })
      })
    
    }
   
 

  render() {
    return (
      <button onClick={this.handleClick(1111111)}>
        1{this.state.isToggleOn? 'ON':'YES'}
        {this.state.type}
      </button>
    );
  }
}





export default App;