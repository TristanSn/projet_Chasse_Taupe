import React from "react";
import ReactDOM from "react-dom";

class Carre extends React.Component {
    render() {
        return (
            <button className = "carre">

            </button>

        )
    }
}
ReactDOM.render(
    <Carre />,
    document.getElementById('root')
);

export default Carre;