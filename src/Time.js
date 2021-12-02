import React from "react";

function moins(chiffre) {
    return chiffre - 1;
}

class Time extends React.Component {

    constructor(props) {
        super(props);
        this.state = {time : this.props.time};
    }

    componentDidMount(){
        setInterval(() => {
            if (this.state.time > 0) {
                this.setState({
                    time: this.state.time - 1
                })
            }else{
                this.setState({
                    life : 0
                })
            }
        }, 1000);
    }


    render() {
        return (
            this.state.time
        );
    }
}

export default Time;