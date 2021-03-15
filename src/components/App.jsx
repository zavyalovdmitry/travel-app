import React, { Component } from 'react';
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

  // changeLink = (link) => {
  //   this.setState({ link });
  // }

  changeFilter = (filterValue) => {
    this.setState({ filter: filterValue });
  }

  // renderSwitch(link) {
  //   switch (link) {
  //     case 'main':
  //       return <CardsBoard lang={this.state.lang} changeLink={this.changeLink} filterValue={this.state.filter}/>;
  //     case 'detail':
  //       return <DetailPage changeLink={this.changeLink} pr="3"/>;
  //     default:
  //       return null;
  //   }
  // }

  toggleLang = (lang) => {
    this.setState({lang: lang})
  }

  render() {
    return (
      <main>
        <Header lang={this.state.lang} toggleLang={this.toggleLang} changeFilter={this.changeFilter} searchVisible={ this.state.link === 'main' } logoLink={ this.state.link !== 'main' } changeLink={this.changeLink}/>

          <Switch>
            <Route path="/country/:id" render={({ match }) => (
              <DetailPage id={match.params.id} lang={this.state.lang} />
            )} 
            />

            <Route path="/">
              <CardsBoard lang={this.state.lang} filterValue={this.state.filter}/>;
            </Route>
            <Redirect from='/main' to='/' />
          </Switch>

        {/* {this.renderSwitch(this.state.link)} */}
        <Footer />
      </main>
    );
  }
}

export default App;
