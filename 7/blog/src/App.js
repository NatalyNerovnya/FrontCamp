import React, { Component } from 'react';
import './App.css';
import Article from './components/Article/Article';
import Articles from './components/Articles/Articles';

class App extends Component {
  constructor(props){
    super(props);
    this.changeRoute = this.changeRoute.bind(this);
    this.state = {route: "articles"};
  }

  changeRoute({route, selectedArticleId}){
    this.setState({route, selectedArticleId});
  }
  
  render() {
    return this.state.route === "article" ? 
     <Article globalState={this.state} changeRoute={this.changeRoute} /> : 
     <Articles globalState={this.state} changeRoute={this.changeRoute} />    
  }
}

export default App;
