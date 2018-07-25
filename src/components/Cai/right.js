import React, {
    Component
} from 'react';
import './index.css'


export default class CaiRight extends Component{
    constructor(props){
        super(props)
        this.state={
            arr:[],
            name:''
        }
    }

    toArr = ()=>{
        let arr = this.props.data.test.split('').sort(()=>{ 
            return .5-Math.random()
        })
        this.setState({
            arr
        })
    }

    pick = (v)=>{
        let {name} = this.state
        name = `${name}${v}`
        this.setState({name})
        console.log(v)
    }



    componentDidMount(){
        this.toArr()
    }
    

    render(){
        // console.log(this.state.arr)
        return(
            <div  className="right" onClick={this.toArr}>
                    {/*  
                        {this.props.data.arr.map((v,index)=>{
                            return (<div key={index}>{v.name}</div>)
                        })}
                    */}

                    <div className="right-name">
                        {this.state.name}
                    </div>
                    <div className="box">
                        <button className="button"> 清除 </button>
                        <button className="button"> 确认 </button>
                    </div>

                    <div className="top">

                    </div>

                    <div className="wenz">
                        {
                            this.state.arr.map((v,index)=>{
                                return (<div className="zi" key={index} onClick={this.pick.bind(this,v)}> {v}</div>)
                            })
                        }
                    </div> 
            </div>
        )
    }
}