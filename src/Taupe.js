import React from "react";
import taupe from './taupe.png';
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
        var ok = "square curs5"
        if (this.props.numero == this.props.id){
            return (
                <button id={this.props.id} className={ok} style={{backgroundImage:"url(" + taupe + ")"}} onClick={this.onClick.bind(this)}>

                </button>
            );
        }else{
            return (
                <button id={this.props.id} className="square curs + 2" style={{backgroundImage:"url(" + terrier + ")"}} onClick={this.onClick2.bind(this)}>

                </button>
            );
        }
    }
}

function getRandomInt(ancien) {
    var rendu = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    while (rendu.toString() == ancien.toString()){
        rendu = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    }
    console.log("ancien " + ancien);
    console.log("nouveau " + rendu);
    return rendu;
}

function moins(chiffre) {
    return chiffre - 1;
}

class Taupe extends React.Component {
    constructor(props) {
        super(props);
        console.log("sdfgg")
        this.state = {taupePosition : 0, life : 3, score : 0, leTemps : 0, bestScore : 0, depart : 0, compteur : 10};
    }
x
    demarreJeu(){
        console.log("ok")
        document.getElementById('buttonStart').style.display = 'none';
        this.setState({
            depart : 1,
            life : 3,
            score : 0,
            leTemps : 4,
            taupePosition : getRandomInt(0)
        })
    }

    componentDidMount(){
        setInterval(() => {
            if (this.state.score > this.state.bestScore){
                this.setState({
                    bestScore : this.state.score
                })
            }
            this.setState({
                leTemps : document.getElementById("recup").innerHTML
            })
            if (this.state.leTemps == 0){
                document.getElementById('buttonStart').style.display = 'block';
                this.setState({
                    taupePosition : 0,
                    depart : 0
                });
            }
        }, 250);
    }

    renderSquare(id, numero) {
        return <Square id={id} numero={numero} onClick={this.squareClicked.bind(this)} onClick2={this.squareWrongClicked.bind(this)}/>;
    }

    squareWrongClicked(id){
        if (this.state.depart != 0){
            this.state.taupePosition = getRandomInt(this.state.taupePosition);
            if (this.state.life != 0){
                this.setState({
                    life : moins(this.state.life)
                });
            }
            if (this.state.life == 0){
                this.setState({
                    depart : 0
                });
            }
            if (this.state.life <= 1){
                this.setState({
                    taupePosition : 0
                });
            }
        }
    }

    squareClicked(id){
        this.setState({
            taupePosition : getRandomInt(this.state.taupePosition),
            score : this.state.score + 10,
        });
    }
//setState
    render() {
        const titre = 'Top Position';
        const score = 'Score : ' + this.state.score;
        return (
            <div className="ensemble">
                <div className="status">
                        <h1 id="titre">{titre}</h1>
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
                        <p>Temps restant : </p>
                        <p id="recup">{<Time time={this.state.compteur} depart={this.state.depart} vie={this.state.life}/>}</p>
                        <p>{score}</p>
                    <div>
                        <p>Meilleur score :</p>
                        <p>{this.state.bestScore}</p>
                    </div>
                    <div>
                        <div><p id="nbrVie">VIE : {this.state.life}</p></div>
                    </div>
                </div>
                <div><button onClick={this.demarreJeu.bind(this)} id="buttonStart"></button></div>
            </div>
        );
    }
}

export default Taupe;