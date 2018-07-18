import React, { Component } from 'react';

const ThemeContext = React.createContext('light')

console.log(ThemeContext)

class Test4 extends Component{
    constructor(props){
        super(props)
        console.log(this)
        this.state={
            value:'haha'
        }
    }

    haha = ()=>{
        console.log(1111)
    }

    componentWillMount(){
        this.haha()
    }

    render(){
        return(
            <div>
                <div onClick={this.props.fn}>lala</div>
                <button onClick={()=>{this.setState({value:'xx'})}}>{this.state.value}</button>
            </div>
        )
    }
    
}


export default Test4



