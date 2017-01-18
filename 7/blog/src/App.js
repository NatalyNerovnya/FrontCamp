import React, { Component } from 'react';
import './App.css';
import Article from './components/Article/Article';
import Articles from './components/Articles/Articles';
import EditArticle from './components/EditArticle/EditArticle'
import AddArticle from './components/AddArticle/AddArticle'

class App extends Component {
  constructor(props) {
    super(props);
    this.changeRoute = this.changeRoute.bind(this);
    this.state = { route: "articles", articles: [] };
  }

  changeRoute({route, selectedArticleId}) {
    this.setState({ route, selectedArticleId });
  }

  render() {
     if(this.state.route === "article")
        return <Article globalState={this.state} changeRoute={this.changeRoute} /> 
      else if(this.state.route === "editArticle")
        return <EditArticle globalState={this.state} changeRoute={this.changeRoute} />
      else if(this.state.route === "addArticle")
        return <AddArticle globalState={this.state} changeRoute={this.changeRoute} />
      else
        return <Articles globalState={this.state} changeRoute={this.changeRoute} />
  }
}

export default App;
