import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { getData, setData } from '../localStorageUtil.js';
import Header from './Header';
import Footer from './Footer';
import CardsBoard from './CardsBoard';
import DetailPage from './DetailPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      lang: 0
    };
  }

  componentDidMount() {
    const lang = getData('lang');
    if (lang) this.setState({ lang });
  }

  changeFilter = (filterValue) => {
    this.setState({ filter: filterValue });
  };

  toggleLang = (lang) => {
    setData('lang', lang);
    this.setState({ lang });
  };

  render() {
    const { lang, filter } = this.state;

    return (
      <main>
        <Switch>
          <Route
            path="/country/:id"
            render={({ match }) => (
              <>
                <Header
                  lang={lang}
                  toggleLang={this.toggleLang}
                  changeFilter={this.changeFilter}
                  searchVisible={false}
                  logoLink
                />
                <DetailPage id={match.params.id} lang={lang} />
              </>
            )}
          />

          <Route path="/">
            <Header
              lang={lang}
              toggleLang={this.toggleLang}
              changeFilter={this.changeFilter}
              searchVisible
              logoLink={false}
            />
            <CardsBoard lang={lang} filterValue={filter} />
          </Route>
          <Redirect from="/main" to="/" />
        </Switch>

        <Footer />
      </main>
    );
  }
}

export default App;
