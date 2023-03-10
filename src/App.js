import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          title: "Кітель",
          img: "1.jpg",
          brand: "M-TAC",
          price: 1700,
        },
        {
          id: 2,
          title: "Кітель",
          img: "2.jpg",
          brand: "STURM MIL-TEC",
          price: 1550,
        },
        {
          id: 3,
          title: "Черевики тактичні",
          img: "3.jpg",
          brand: "ALLIGATOR",
          price: 2300,
        },
        {
          id: 4,
          title: "Черевики демисезонні",
          img: "4.jpg",
          brand: "LOWA",
          price: 4500,
        },
        {
          id: 5,
          title: "Тактичні штани",
          img: "5.jpg",
          brand: "M-TAC",
          price: 1200,
        },
        {
          id: 6,
          title: "Тактичні штани",
          img: "6.jpg",
          brand: "M-TAC",
          price: 1300,
        },
      ],
    };
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
