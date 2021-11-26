import React from "react";

/*class Taupe extends React.Component {
    render() {
        return<h1>Test composant</h1>
    }
}*/

class Square extends React.Component {
    render() {
        return (
            <button className="square" style={{background: this.props.couleurCase}}>

            </button>
        );
    }
}

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

class Taupe extends React.Component {
    renderSquare(color) {
        return <Square couleurCase={color} />;
    }

    render() {
        const status = 'lo';
        var tab = ["white", "blue", "red"];
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(tab[getRandomInt()])}
                    {this.renderSquare(tab[getRandomInt()])}
                    {this.renderSquare(tab[getRandomInt()])}
                </div>
                <div className="board-row">
                    {this.renderSquare(tab[getRandomInt()])}
                    {this.renderSquare(tab[getRandomInt()])}
                    {this.renderSquare(tab[getRandomInt()])}
                </div>
                <div className="board-row">
                    {this.renderSquare(tab[getRandomInt()])}
                    {this.renderSquare(tab[getRandomInt()])}
                    {this.renderSquare(tab[getRandomInt()])}
                </div>
            </div>
        );
    }
}

export default Taupe;