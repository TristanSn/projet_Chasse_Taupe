import React from "react";
import ReactDOM from "react-dom";

class Jeux extends React.Component {
    render() {
        return (
            <div className="jeux">
                <div className="info-jeux">
                    <div> {} </div>
                    <ol> {} </ol>
                </div>
             </div>
        )
    }
}
ReactDOM.render(
    <Jeux />,
    document.getElementById('root')
);

export default Jeux;