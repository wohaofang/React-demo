import React, { Component } from 'react';


class Square extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: null
        }
    }

    // Click = ()=>{
    //     this.setState({value:"X"})
    // }

    render(){
        return (
            <button className="square" onClick={this.props.fn}>
                {this.props.value}
            </button>
        )
    }
}

export default Square