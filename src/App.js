import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
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
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items
          className="container"
          items={this.state.items}
          onAdd={this.addToOrder}
        />
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;
