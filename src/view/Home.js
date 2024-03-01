import React, { Component } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
export default class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { count: 0 };
  //   console.log("constructor");
  // }

  // componentDidUpdate() {
  //   console.log("update");
  // }

  // componentDidMount() {
  //   console.log("mounted");
  // }

  // componentWillUnmount() {
  //   console.log("unmounted");
  // }

  render() {
    // console.log("render");
    return (
      <>
        <Navbar />
        <header>
          <Header />
        </header>
        {/* <button onClick={() => this.setState((prev) => ({ count: prev.count + 1 }))}>{this.state.count}</button> */}
      </>
    );
  }
}
