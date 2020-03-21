import React, { Component } from 'react';
import { Route, HashRouter, Switch } from "react-router-dom";
import { Header, Footer, Home, News, NoMatch } from './components'; 
import { GlobalStyles } from './global';

class MainApp extends Component{

  constructor(props) {
    super(props);
    this.state = {
        homeActive: false,
        newsActive: false,
    };
  }

  highHome() {
    this.setState({ homeActive: true,
                    newsActive: false});
  }

  highNews() {
    this.setState({ homeActive: false,
                    newsActive: true});
  }

  render(){
    return(
      <div className="App">
        <Header home={ this.state.homeActive } news={ this.state.newsActive } />
            <div className="content">
                <Switch>
                  <Route exact path="/" render={(props) => <Home {...props} updateHome={ this.highHome.bind(this) } />}  />
                  <Route path="/news/:id"  render={(props) => <News {...props} updateNew={ this.highNews.bind(this) } />} />
                  <Route component={NoMatch}/>
                </Switch>
            </div>
        <Footer />
      </div>
    );
  }

}


function App() {
  return (
    <>
    <GlobalStyles />
      <HashRouter>
        <MainApp />
      </HashRouter>
    </>
  );
}

export default App;
