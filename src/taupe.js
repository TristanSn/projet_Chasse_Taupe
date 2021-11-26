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
            <button className="square" style={{background: "white"}}>

            </button>
        );
    }
}

class Square2 extends React.Component {
    render() {
        return (
            <button className="square" style={{backgroundImage:"url(" + image + ")"/*background: this.props.couleurCase*/}}>

            </button>
        );
    }
}

function getRandomInt() {
    return Math.floor(Math.random() * 9);
}

class Taupe extends React.Component {
    renderSquare(color) {
        return <Square couleurCase={color} />;
    }

    renderSquare2() {
        return <Square2/>;
    }

    render() {
        const status = 'Chasse Taupe';
        let random = getRandomInt();

        switch (random){
            case 0:
                return (
                    <div>
                        <div className="status">{status}</div>
                        <div className="board-row">
                            {this.renderSquare2()}
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
                break;
            case 1:
                return (
                    <div>
                        <div className="status">{status}</div>
                        <div className="board-row">
                            {this.renderSquare('red')}
                            {this.renderSquare2()}
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
                break;
            case 2:
                return (
                    <div>
                        <div className="status">{status}</div>
                        <div className="board-row">
                            {this.renderSquare('red')}
                            {this.renderSquare('blue')}
                            {this.renderSquare2()}
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
                break;
            case 3:
                return (
                    <div>
                        <div className="status">{status}</div>
                        <div className="board-row">
                            {this.renderSquare('red')}
                            {this.renderSquare('blue')}
                            {this.renderSquare('red')}
                        </div>
                        <div className="board-row">
                            {this.renderSquare2()}
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
                break;
            case 4:
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
                            {this.renderSquare2()}
                            {this.renderSquare('red')}
                        </div>
                        <div className="board-row">
                            {this.renderSquare('red')}
                            {this.renderSquare('red')}
                            {this.renderSquare('red')}
                        </div>
                    </div>
                );
                break;
            case 5:
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
                            {this.renderSquare2()}
                        </div>
                        <div className="board-row">
                            {this.renderSquare('red')}
                            {this.renderSquare('red')}
                            {this.renderSquare('red')}
                        </div>
                    </div>
                );
                break;
            case 6:
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
                            {this.renderSquare2()}
                            {this.renderSquare('red')}
                            {this.renderSquare('red')}
                        </div>
                    </div>
                );
                break;
            case 7:
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
                            {this.renderSquare2()}
                            {this.renderSquare('red')}
                        </div>
                    </div>
                );
                break;
            case 8:
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
                            {this.renderSquare2()}
                        </div>
                    </div>
                );
                break;
            default:
                alert("erreur");
                break;
        }
    }
}

export default Taupe;