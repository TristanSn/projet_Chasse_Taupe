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

    onClick2(){
        this.props.onClick2(this.props.id)
    }
    render() {
        if (this.props.numero === this.props.id){
            return (
                <button id={this.props.id} className="square" style={{backgroundImage:"url(" + taupe + ")"}} onClick={this.onClick.bind(this)}>

                </button>
            );
        }else{
            return (
                <button id={this.props.id} className="square" style={{backgroundImage:"url(" + terrier + ")"}} onClick={this.onClick2.bind(this)}>

                </button>
            );
        }
    }
}

function getRandomInt() {
    return Math.floor(Math.random() * (9 - 1 + 1)) + 1;
}

function moins(chiffre) {
    return chiffre - 1;
}

class Taupe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {taupePosition : getRandomInt(), life : 3, score : 0};
    }

    renderSquare(id, numero) {
        return <Square id={id} numero={numero} onClick={this.squareClicked.bind(this)} onClick2={this.squareWrongClicked.bind(this)}/>;
    }

    squareWrongClicked(id){
        this.state.taupePosition = getRandomInt();
        this.setState({
            life : moins(this.state.life)
        });
        if (this.state.life <= 1){
            this.setState({
                taupePosition : 0
            });
        }
        console.log(this.state.life);
    }

    squareClicked(id){
        console.log(id)
        this.state.taupePosition = getRandomInt();
        this.setState({
            taupePosition : getRandomInt(),
            score : this.state.score + 10
        });
    }
//setState
    render() {
        const status = 'Chasse Taupe';
        const score = 'Score : ' + this.state.score;
        return (
            <div>
                <div className="status"><h1>{status}</h1></div>
                <div className="status"><h3>{score}</h3></div>
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