import React from "react";
import taupe from './taupe.jpg';
import terrier from './terrier.png';
import {render} from "react-dom";

/*class Taupe extends React.Component {
    render() {
        return<h1>Test composant</h1>
    }
}*/

class Square extends React.Component {
    onClick(){
        this.props.onClick(this.props.id)
    }
    render() {
        if (this.props.numero === this.props.id){
            return (
                <button id={this.props.id} className="square" style={{backgroundImage:"url(" + taupe + ")"}} onClick={this.onClick.bind(this)}>

                </button>
            );
        }else{
            return (
                <button id={this.props.id} className="square" style={{backgroundImage:"url(" + terrier + ")"}}>

                </button>
            );
        }
    }
}

function getRandomInt() {
    return Math.floor(Math.random() * (9 - 1 + 1)) + 1;
}

class Taupe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {taupePosition : getRandomInt()};
    }

    renderSquare(id, numero) {
        return <Square id={id} numero={numero} onClick={this.squareClicked.bind(this)}/>;
    }

    squareClicked(id){
        console.log(id)
    }
//setState
    render() {
        const status = 'Chasse Taupe';
        return (
            <div>
                <div className="status"><h1>{status}</h1></div>
                <div className="board-row">
                    {this.renderSquare(1, this.state.taupePosition)}
                    {this.renderSquare(2, this.state.taupePosition)}
                    {this.renderSquare(3, this.state.taupePosition)}
                </div>
                <div className="board-row">
                    {this.renderSquare(4, this.state.taupePosition)}
                    {this.renderSquare(5, this.state.taupePosition)}
                    {this.renderSquare(6, this.state.taupePosition)}
                </div>
                <div className="board-row">
                    {this.renderSquare(7, this.state.taupePosition)}
                    {this.renderSquare(8, this.state.taupePosition)}
                    {this.renderSquare(9, this.state.taupePosition)}
                </div>
            </div>
        );
    }
}

export default Taupe;