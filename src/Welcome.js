import { Component } from "react";

class Welcome extends Component {
    handleClick=()=>{
        console.log("clicked me!")
    }
  render() {
    const { name } = this.props;
    return <div>
        <button onClick={this.handleClick}>Click Me!</button>
    </div>;
  }
}

export default Welcome;
