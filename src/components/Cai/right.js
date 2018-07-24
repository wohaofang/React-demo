import React, {
    Component
} from 'react';
import './index.css'


export default class CaiRight extends Component{
    constructor(props){
        super(props)
        this.state={
            arr:[]
        }
    }

    toArr = ()=>{
        let arr = this.props.data.test.split('')
        this.setState({
            arr
        })
    }

    componentDidMount(){
        this.toArr()
    }
    

    render(){
        console.log(this.state.arr)
        return(
            <div  className="right" onClick={this.toArr}>
                    {/*  
                        {this.props.data.arr.map((v,index)=>{
                            return (<div key={index}>{v.name}</div>)
                        })}
                    */}

                    <div className="wenz">
                        {
                            this.state.arr.map((v,index)=>{
                                return (<div className="zi" key={index}> {v}</div>)
                            })
                        }
                    </div> 
            </div>
        )
    }
}