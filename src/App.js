import React, { Component } from 'react';
import Posts from "./components/Posts/Posts";
import './App.css';
import UserList from "./components/UserList/UserList";
import Header from "./components/Header/Header";


class App extends Component {
  render() {
    return (

      <div className="App">
        <div className="container">
          <Header />
          {/* <PostModal /> */}
          <div className="row">
            <div className="col-8">
              <Posts />
            </div>
            <div className="col-4">
              <UserList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
