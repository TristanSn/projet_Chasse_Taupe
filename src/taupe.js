import React from "react";
import image from './taupe.jpg';

/*class Taupe extends React.Component {
    render() {
        return<h1>Test composant</h1>
    }
}*/

class Square extends React.Component {
    render() {
        return (
            <button className="square" style={{backgroundImage:"url(" + image + ")"/*background: this.props.couleurCase*/}}>

            </button>
        );
    }
}

class Taupe extends React.Component {
    renderSquare(color) {
        return <Square couleurCase={color} />;
    }

    render() {
        const status = 'lo';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare('red')}
                    {this.renderSquare('blue')}
                    {this.renderSquare('red')}
                </div>
                <div className="board-row">
                    {this.renderSquare('red')}
                    {this.renderSquare('red')}
                    {this.renderSquare('red')}
                </div>
                <div className="board-row">
                    {this.renderSquare('red')}
                    {this.renderSquare('red')}
                    {this.renderSquare('red')}
                </div>
            </div>
        );
    }
}

export default Taupe;