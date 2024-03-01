import { Component } from "react";
import { RouterProvider } from "react-router-dom";
import "./style.css";
import router from "./router/Router";

class App extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}
export default App;
