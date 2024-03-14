import { Component } from "react";

class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    
      this.setState((prevState)=>({count: prevState.count +1 }))
   
  };
  decrement = () => {
    this.setState((prevState)=>({count: prevState.count - 1 }))
  };
  reset = () => {
   
    this.setState({count:0})
  };

  render() {
    return (
      <div className="text-center">
        <h1>Counter App</h1>
        <h2>count:{this.state.count}</h2>
        <div className="d-flex flex-row justify-content-around mt-5">
          <button
            className="btn btn-success"
            onClick={this.increment}
            type="button"
          >
            Increment
          </button>
          <button className="btn btn-danger" onClick={this.reset}>Reset</button>
          <button className="btn btn-info" onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default Counter;
