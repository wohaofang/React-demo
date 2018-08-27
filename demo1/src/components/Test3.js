import React, { Component } from 'react';
import Tset4 from './Test4'


class Test3 extends Component {
    static a = 333
    constructor(props){
        super(props)
        this.state = {
            name:'我是丁铭'
        }
        this.input = React.createRef();
        // this.handleSubmit = this.handleSubmit.bind(this)
        // this.Ts4Fn = this.Ts4Fn.bind(this)
    }

    handleSubmit= (event)=>{
        console.log('内容：'+ this.input.current.value)
        event.preventDefault()
    }

    Ts4Fn = ()=>{
        console.log(this.state.name)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={this.input}/>
                    <input type="submit" value="hahaha"/>
                </form>

                <div onClick={this.Ts4Fn}>Ts4Fn</div>
                <Tset4 fn={this.Ts4Fn}></Tset4>
            </div>
        )
    }
}

export default Test3


