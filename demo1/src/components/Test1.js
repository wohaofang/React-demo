import React, { Component } from 'react';
import Test2 from './Test2'


// class Test1 extends Component {
//     constructor(props){
//         super(props)
//         this.login = this.login.bind(this)
//         this.logout = this.logout.bind(this)
//         this.state={
//             isLoggedIn: false
//         }
//     }

//     login(){
//         this.setState({ isLoggedIn: false})
//         console.log(111)
//     }

//     logout(){
//         this.setState({ isLoggedIn: true})
//         console.log(222)
//     }


//     render(){
//         let btn
//         if(this.state.isLoggedIn){
//             btn = <button onClick={this.login}>{this.state.isLoggedIn?'true':"false"}</button>
//         }else{
//             btn = <button onClick={this.logout}>{this.state.isLoggedIn?'true':"false"}</button>
//         }
//         return (
//             <div>
//                 {btn}
//             </div>
//         )
//     }
// }


// class Test1 extends Component {
//     constructor(props){
//         super(props)
//         this.num = this.num.bind(this)
//         this.state={

//         }
//     }
//     num() {
//         let arr = [1,2,3,4,5,6]
//         let arr2 = arr.map((item,index)=> {
//             console.log(item)

//             return <div key={index}>{item*2}</div>
//         })
//         return arr2
//     }

//     componentDidMount(){
//         let arr2 = this.num()
//         console.log(arr2)
//         this.setState({
//             arr2:arr2
//         })
//     }


//     render(){
//         return(
//             <div>{this.state.arr2}</div>
//         )
//     }
// }

// class Test1 extends Component{
//     constructor(props){
//         super(props)
//         this.state={value:''}
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event){
//         console.log(event)
//         this.setState({value:event.target.value.toUpperCase()})
//     }

//     handleSubmit(event){
//         // console.log(this.state.value)
//         event.preventDefault();

//     }

//     render(){
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <input type="text" value={this.state.value} onChange={this.handleChange}/>
//                 <button type="submit" value="Submit">Submit</button>
//             </form>
//         )
//     }
// }

function Haha(props){
    let num = props.num
    return num>100?'大于':'小于'
}

// class Test1 extends Component{
//     constructor(props){
//         super(props)
//         this.state={value:''}
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(e){
//         this.setState({value:e.target.value})
//     }

//     render(){
//         return(
//             <fieldset>
//                 <legend>哈哈啊哈哈：</legend>
//                 <input value={this.state.value} onChange={this.handleChange}/>

//                 <Haha num={this.state.value}/>
//             </fieldset>
//         )
//     }
// }

class Test1 extends Component{
    constructor(props) {
        super(props)
        this.state={
            test1:'obj11'
        }
        this.testInput = React.createRef()
        this.aaa = React.createRef()
        this.focusTextInput = this.focusTextInput.bind(this)
       
    }

    focusTextInput() {
        // 直接使用原生 API 使 text 输入框获得焦点
        // 注意：通过 "current" 取得 DOM 节点
        console.log(this.testInput)
        this.testInput.current.focus();
    }
   
 

    render(){
        return(
            <div>
                111
                <Test2 ts={this.state.test1} ref={this.aaa} fn={this.focusTextInput}/>

                <br/>
                
                <input type="text" ref={this.testInput}/>

                <input type="button" value="Focus thetext input" onClick={this.focusTextInput}/>
            </div>
        )
    }
}

export default Test1;