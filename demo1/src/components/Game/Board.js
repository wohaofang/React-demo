import React, {
    Component
} from 'react';
// import Square from './Square' // 这个组件可以废弃

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

class Board extends Component {

    renderSquare(i) {
        return (
          <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
          />
        );
      }

    render() {
        console.log(this.props.children)
        return ( 
            <div>
                <div className = "board-row" > {
                    this.renderSquare(0)
                } {
                    this.renderSquare(1)
                } {
                    this.renderSquare(2)
                } 
                </div> 
                <div className = "board-row" > {
                    this.renderSquare(3)
                } {
                    this.renderSquare(4)
                } {
                    this.renderSquare(5)
                } 
                </div> 
                <div className = "board-row" > {
                    this.renderSquare(6)
                } {
                    this.renderSquare(7)
                } {
                    this.renderSquare(8)
                } 
                </div> 
                <div>
                    {
                        this.props.children
                    }
                </div>
            </div>
        )
    }
}

export default Board