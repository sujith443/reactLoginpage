import React from "react";
import Login from "./login";
function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <form className="form">
        <Login text="text" placeholder="Enter your name" />
        <Login text="password" placeholder="Enter your password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
