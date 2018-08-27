import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test1 from './components/Test1';
import Test3 from './components/Test3';
import registerServiceWorker from './registerServiceWorker';

import Game1 from './components/Game/Game'

ReactDOM.render(<Game1 />, document.getElementById('root'));
registerServiceWorker();



function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  function Comment(props) {
      console.log(props)
    return (
      <div className="Comment">
        <UserInfo user={props.author}></UserInfo>
        <div className="Comment-text">
            {props.text}
        </div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>

        <div className='box'>
            <div className="content">
                哈啊飞洒荆防颗粒就撒dfs公司大概是多少收到公司打工
            </div>
        </div>
      </div>
    );
  }
  
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };

  function Avatar(props){
      console.log(props)
      return (
          <img className="avatar" 
            src={props.user.avatarUrl} 
            alt={props.user.name}
          />
      )
  }

  function UserInfo(props){
      console.log(props)
      return (
        <div className="UesrInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
      )
  }

//   ReactDOM.render(
//     <Comment
//       date={comment.date}
//       text={comment.text}
//       author={comment.author} />,
//     document.getElementById('root')
//   );


// class Clock extends React.Component{
//     constructor(props) {
//         super(props)
//         console.log(this)
//         this.state = {date: new Date()}
//     }

//     componentDidMount(){
//         let _this = this
//         this.timer = setInterval(
//             ()=>{
//                     this.setState({
//                         date: new Date()
//                     })
//             }
//             ,1000
//         )
//     }

//     componentWillUnmount(){
//         clearInterval(this.timerID);
//     }

//     render() {
//         console.log(this.props.date,this.state.date)
//         return (
//             <div>
//                 <h1>hello world</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//             </div>
//         )
//     }
// }


// ReactDOM.render(
//     <Clock />,
//     document.getElementById('root')
//   );
function HHaa(props){
    console.log(props)
    return(
        <div >
            {props.children}
        </div>
    )
}

function WelcomeDialog(){
    return(
        <HHaa color='blue'>
            <h1 className="asd">
                Welcome
            </h1>
            <p>Thank you for visiting our spacecraft!</p>
        </HHaa>
    )
}


// ReactDOM.render(<WelcomeDialog />, document.getElementById('root'));


class Square extends React.Component{
    render(){
        return (
            <button className="square">
                {this.props.value}
            </button>
        )
    }
}



class Board extends React.Component{

    renderSquare= (i)=>{
        return <Square value={i}/>
    }

    render(){
        const status = 'Next player: X';
        return (
           <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
           </div>
        )
    }
}



class Game extends React.Component{
    render(){
        return(
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
            </div>
        )
    }
}







// ReactDOM.render(<Game />, document.getElementById('root'));
