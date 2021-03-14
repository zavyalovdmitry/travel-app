import React, { Component } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import CardsBoard from 'components/CardsBoard';
import DetailPage from 'components/DetailPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: 'main',
      filter: '',
    };
  }

  changeLink = (link) => {
    this.setState({ link });
  }

  changeFilter = (filterValue) => {
    this.setState({ filter: filterValue });
  }

  renderSwitch(link) {
    switch (link) {
      case 'main':
        return <CardsBoard changeLink={this.changeLink} filterValue={this.state.filter}/>;
      case 'detail':
        return <DetailPage changeLink={this.changeLink} pr="3"/>;
      default:
        return null;
    }
  }

  render() {
    return (
      <main>
        <Header changeFilter={this.changeFilter} searchVisible={ this.state.link === 'main' } logoLink={ this.state.link !== 'main' } changeLink={this.changeLink}/>
        {this.renderSwitch(this.state.link)}
        <Footer />
      </main>
    );
  }
}

export default App;
