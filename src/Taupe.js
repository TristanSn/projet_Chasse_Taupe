import React from "react";
import taupe from './taupe.jpg';
import terrier from './terrier.png';
import {render} from "react-dom";
import Time from "./Time";

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

function getRandomInt(ancien) {
    var rendu = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    while (rendu == ancien){
        rendu = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    }
    return rendu;
}

function moins(chiffre) {
    return chiffre - 1;
}

class Taupe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {taupePosition : getRandomInt(0), life : 3, score : 0, leTemps : 0, tpsGagne : 0};
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                leTemps : document.getElementById("recup").innerHTML
            })
            if (this.state.leTemps == 0){
                this.setState({
                    taupePosition : 0
                });
            }
        }, 100);
    }

    renderSquare(id, numero) {
        return <Square id={id} numero={numero} onClick={this.squareClicked.bind(this)} onClick2={this.squareWrongClicked.bind(this)}/>;
    }

    squareWrongClicked(id){
        this.state.taupePosition = getRandomInt(this.state.taupePosition);
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
        this.state.taupePosition = getRandomInt(this.state.taupePosition);
        this.setState({
            taupePosition : getRandomInt(this.state.taupePosition),
            score : this.state.score + 10,
            tpsGagne : 0.25
        });
    }
//setState
    render() {
        const titre = 'Top Position';
        const score = 'Score : ' + this.state.score;
        return (
            <div className="ensemble">
                <div className="status">
                        <h1>{titre}</h1>
                </div>
                <div className="gauche">
                    <div>
                        {this.renderSquare(1, this.state.taupePosition)}
                        {this.renderSquare(2, this.state.taupePosition)}
                        {this.renderSquare(3, this.state.taupePosition)}
                    </div>
                    <div>
                        {this.renderSquare(4, this.state.taupePosition)}
                        {this.renderSquare(5, this.state.taupePosition)}
                        {this.renderSquare(6, this.state.taupePosition)}
                    </div>
                    <div>
                        {this.renderSquare(7, this.state.taupePosition)}
                        {this.renderSquare(8, this.state.taupePosition)}
                        {this.renderSquare(9, this.state.taupePosition)}
                    </div>
                </div>
                <div className="droite">
                        <h1>Temps restant : </h1>
                        <h1 id="recup">{<Time time={10} tpsPlus={this.state.tpsGagne}/>}</h1>
                        <h3>{score}</h3>
                </div>
            </div>
        );
    }
}

export default Taupe;