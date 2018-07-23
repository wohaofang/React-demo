import React, {
    Component
} from 'react';

import './index.css'


export default class Bottom extends Component{

    render(){
        console.log(this.props.arr)
        return(
            <div className="bottom">
                <div className="bottomList" onClick={this.props.fn}>
                    {this.props.arr.map((item,index)=>{
                        return (<div key={index}> {item}</div>)
                    })}
                </div>
                <div className="dengLu">
                    {
                        this.props.children
                    }
                </div>
            </div>
        )
    }
} 