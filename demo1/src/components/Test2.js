import React, { Component } from 'react';

class Test2 extends Component {
    constructor(props){
        super(props)
        console.log(this)
        this.state={}
        this.focusTextInput1 = this.focusTextInput1.bind(this)
        
    }
    focusTextInput1(){
        console.log(this.refs)
        // this.refs.current.focus();
        this.props.fn()
    }


    render(){

        return(
            <div>{this.props.ts}
             <input type="button" value="Focus thetext input" onClick={this.focusTextInput1}/>

            </div>
        )
    }
}

export default Test2