import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CardsBoard from "./CardsBoard";

class App extends Component {
  render() {
    return <main>
     <Header/> 
     <CardsBoard/> 
     <Footer/> 
     </main>;
  }
}

export default App;