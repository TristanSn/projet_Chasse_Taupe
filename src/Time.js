import React from "react";

class Time extends React.Component {

    constructor(props) {
        super(props);
        this.state = {time : this.props.time};
    }

    componentDidMount(){
        if (this.state.time.toFixed(0) !== 0){
            this.intervalID = setInterval(() => {
                if (this.props.tpsPlus !== 0){
                    if (this.state.time > 0) {
                        this.setState({
                            time: this.state.time - 0.25
                        })
                    }else{
                        this.setState({

                        })
                    }
                }
                if (this.props.vie === 0){
                    this.setState({
                        time: 0
                    })
                }
            }, 250);
        }else{
            clearInterval(this.intervalID);
        }
    }

    render() {
        let res = this.state.time.toFixed(0);
        if (res < 0){
            res = 0;
        }
        return (
            res
        );
    }
}

export default Time;