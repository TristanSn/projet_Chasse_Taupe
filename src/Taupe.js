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
/*square sert à créer les terriers et la taupe*/
class Square extends React.Component {
    onClick(){
        this.props.onClick(this.props.id)
    }

    onClick2(){
        this.props.onClick2(this.props.id)
    }
    render() {
        if (this.props.numero == this.props.id){
            return (
                <button id={this.props.id} className={this.props.designMarteau} style={{backgroundImage:"url(" + taupe + ")"}} onClick={this.onClick.bind(this)}>

                </button>
            );
        }else{
            return (
                <button id={this.props.id} className={this.props.designMarteau} style={{backgroundImage:"url(" + terrier + ")"}} onClick={this.onClick2.bind(this)}>

                </button>
            );
        }
    }
}
/*cette fonction sert à ne pas retomber sur le numéro 10 fois de suite*/
function getRandomInt(ancien) {
    var rendu = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    while (rendu.toString() == ancien.toString()){
        rendu = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    }
    return rendu;
}
/*moins sert pour perdre une vie en jeu*/
function moins(chiffre) {
    return chiffre - 1;
}

class Taupe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {taupePosition : 0, life : 3, score : 0, leTemps : 0, bestScore : 0, depart : 0, compteur : 10};
        /*
        taupePosition = position de la taupe
        life = nombre de vie (3)
        score = le score de la partie
        leTemps = recup valeur compte à rebours
        bestScore = meilleur score effectué
        depart = pour signaler quand lancer le compte à rebours et donc le jeu
        compteur = le temps de la partie régler pile pour réussir l'objectif des 200 points du défi spécial en mode difficile (bonne chance)
        */
    }
    /*comme son nom l'indique demarreJeu lance la partie*/
    demarreJeu(){
        document.getElementById('buttonStart').style.display = 'none';
        this.setState({
            depart : 1,
            life : 3,
            score : 0,
            leTemps : 4,
            taupePosition : getRandomInt(0)
        })
    }
    /*mise à jour du score et recup du temps*/
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

    renderSquare(id, numero, designMarteau) {
        return <Square id={id} numero={numero} designMarteau={designMarteau} onClick={this.squareClicked.bind(this)} onClick2={this.squareWrongClicked.bind(this)}/>;
    }
    /*méthode appeler si on clique sur un terrier et non une taupe ce qui fait perdre un vie, changer la place de la taupe*/
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
    /*ici c'est la méthode pour quand on tape la taupe, donc +10 points, et taupe change de place*/
    squareClicked(id){
        this.setState({
            taupePosition : getRandomInt(this.state.taupePosition),
            score : this.state.score + 10,
        });
    }

    render() {
        //ce qui suit c'est pour changer le skin du marteau en fonction de son score
        const titre = 'Top Position';
        const score = 'Score : ' + this.state.score;
        var design = "square curs1";
        var easterEgg = "droite";
        if ((this.state.score >= 50 && this.state.score < 100) || (this.state.bestScore >= 50 && this.state.bestScore < 100)){
            design = "square curs2";
        }
        if ((this.state.score >= 100 && this.state.score < 150) || (this.state.bestScore >= 100 && this.state.bestScore < 150)){
            design = "square curs3";
        }
        if ((this.state.score >= 150 && this.state.score < 200) || (this.state.bestScore >= 150 && this.state.bestScore < 200)){
            design = "square curs4";
        }
        if ((this.state.score >= 200) || (this.state.bestScore >= 200)){
            design = "square curs5";
            easterEgg = "droite easter-egg"
        }
        return (
            <div className="ensemble">
                <div className="status">
                        <h1 id="titre">{titre}</h1>
                </div>
                <div className="gauche">
                    <div>
                        {this.renderSquare(1, this.state.taupePosition, design)}
                        {this.renderSquare(2, this.state.taupePosition, design)}
                        {this.renderSquare(3, this.state.taupePosition, design)}
                    </div>
                    <div>
                        {this.renderSquare(4, this.state.taupePosition, design)}
                        {this.renderSquare(5, this.state.taupePosition, design)}
                        {this.renderSquare(6, this.state.taupePosition, design)}
                    </div>
                    <div>
                        {this.renderSquare(7, this.state.taupePosition, design)}
                        {this.renderSquare(8, this.state.taupePosition, design)}
                        {this.renderSquare(9, this.state.taupePosition, design)}
                    </div>
                </div>
                <div className={easterEgg}>
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