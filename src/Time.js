import React from "react";

class Time extends React.Component {

    constructor(props) {
        super(props);
        this.state = {time : this.props.time};
    }

    componentDidMount(){
        setInterval(() => {
            if (this.props.tpsPlus !== 1){
                if (this.state.time > 0) {
                    this.setState({
                        time: this.state.time - 0.25
                    })
                }else{
                    this.setState({

                    })
                }
            }
        }, 250);
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