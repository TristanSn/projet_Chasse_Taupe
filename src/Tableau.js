import React from "react";
import Carre from "./Carre";

class Tableau extends React.Component {

    renduCarre(i) {
        return<Carre/>
    }

    render() {
        const status = 'm';
        return (
            <div>
                <div className="status">{status}</div>
                <div className="tableau-colonne">
                    {this.renduCarre(0)}
                    {this.renduCarre(1)}
                    {this.renduCarre(2)}
                </div>
                <div className="tableau-colonne">
                    {this.renduCarre(3)}
                    {this.renduCarre(4)}
                    {this.renduCarre(5)}
                </div>
                <div className="tableau-colonne">
                    {this.renduCarre(6)}
                    {this.renduCarre(7)}
                    {this.renduCarre(8)}
                </div>

            </div>

        )
    }

}