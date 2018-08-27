import React, {
    Component
} from 'react';
import CaiRight from './right'
import './index.css'
import json from './mods/json.json'
console.log(json)

export default class CaiLeft extends Component{
    constructor(props){
        super(props)
        this.state={
            num:0
        }
    }

    render(){
        return(
            <div className="model">
                <div className="left">
                    <div className="img">
                        <img src={json.arr[this.state.num].img}/>
                    </div>
                </div>

                
                <CaiRight data={json}/>
            </div>
        )
    }
}