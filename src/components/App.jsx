import React, { Component, Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import CardsBoard from './CardsBoard';
import DetailPage from './DetailPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: 'main',
      filter: '',
      lang: 0,
    };
  }

  changeFilter = (filterValue) => {
    this.setState({ filter: filterValue });
  }

  toggleLang = (lang) => {
    this.setState({lang: lang})
  }

  render() {
    return (
      <main>
          <Switch>
            <Route path="/country/:id" render={({ match }) => (
              <Fragment>
                <Header lang={this.state.lang} toggleLang={this.toggleLang} changeFilter={this.changeFilter} searchVisible={ false } logoLink={ true }/>
                <DetailPage id={match.params.id} lang={this.state.lang} />
              </Fragment>
            )} 
            />

            <Route path="/">
              <Header lang={this.state.lang} toggleLang={this.toggleLang} changeFilter={this.changeFilter} searchVisible={ true } logoLink={ false }/>
              <CardsBoard lang={this.state.lang} filterValue={this.state.filter}/>
            </Route>
            <Redirect from='/main' to='/' />
          </Switch>

        <Footer />
      </main>
    );
  }
}

export default App;
