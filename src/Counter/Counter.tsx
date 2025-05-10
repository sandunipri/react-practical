import {Component} from "react";
import './Counter.css';

interface CounterProps {
    data: any
}

interface CountAppState {
    count: number
}

export class Counter extends Component<CounterProps, CountAppState> {
    //create a constructor
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0
        };
        alert("Constructor : " + "Component is initializing");
    }

    componentDidMount() {
        alert("ComponentDidMount : " + "Component is mounted " + "props :" + this.props.data);
    }

    componentWillUnmount() {
        alert("Component Will Unmount");
    }

    componentDidUpdate(prevProps: Readonly<CounterProps>, prevState: Readonly<CountAppState>, snapshot?: any) {
        if(prevState.count!== this.state.count){
            alert("Component DidUpdate : " + "Component is updated" );
        }
    }


    increment = () => {
        this.setState((prevState) => ({
                count: prevState.count + 1
            })
        );
    }

    decrement = () => {
        this.setState((prevState) => ({
                count: prevState.count - 1
            })
        );
    }


    render() {
        return (
            <div className="counter">
                <h1>React Counter App (Using Class Component)</h1>
                <h2 className="count">Count : {this.state.count}</h2>
                <div>
                    <button className="button" onClick={this.increment}>Increment</button>
                    <button className="button" onClick={this.decrement}>Decrement</button>
                </div>
            </div>
        );
    }
}



