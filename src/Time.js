import React from "react";

class Time extends React.Component {

    constructor(props) {
        super(props);
        this.state = {time : this.props.time, retourDefaultGame : 0};
    }
    /*compte à rebour*/
    componentDidMount(){
        //if (this.state.time.toFixed(0) !== 0){
            setInterval(() => {
                if (this.props.depart != 0){
                    this.setState({
                        retourDefaultGame : 0,
                    })
                    if (this.state.time > 0) {
                        this.setState({
                            time: this.state.time - 0.25
                        })
                    }else{
                        this.setState({

                        })
                    }
                }
                if (this.props.vie == 0 || this.state.time.toFixed(0) == 0){
                    this.setState({
                        retourDefaultGame : 1,
                        time : 10
                    })
                }
                this.forceUpdate();
            }, 250);
        //}
    }

    /*componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.time.toFixed(0) == 0){
            if (this.props.depart != 0){
                this.setState({
                    time: 10
                })
            }
        }
    }*/

    render() {
        let res = this.state.time.toFixed(0);
        if (res < 0){
            res = 0;
        }
        if (this.state.retourDefaultGame == 1){
            return (
                0
            );
        }else{
            return (
                res
            );
        }
    }
}

export default Time;