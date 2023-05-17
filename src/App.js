import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Кітель",
          img: "1.jpg",
          brand: "M-TAC",
          category: "ketel",
          price: 1700,
        },
        {
          id: 2,
          title: "Кітель",
          img: "2.jpg",
          brand: "STURM MIL-TEC",
          category: "ketel",
          price: 1550,
        },
        {
          id: 3,
          title: "Черевики тактичні",
          img: "3.jpg",
          brand: "ALLIGATOR",
          category: "boots",
          price: 2300,
        },
        {
          id: 4,
          title: "Черевики демисезонні",
          img: "4.jpg",
          brand: "LOWA",
          category: "boots",
          price: 4500,
        },
        {
          id: 5,
          title: "Тактичні штани",
          img: "5.jpg",
          brand: "M-TAC",
          category: "pants",
          price: 1200,
        },
        {
          id: 6,
          title: "Тактичні штани",
          img: "6.jpg",
          brand: "M-TAC",
          category: "pants",
          price: 1300,
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items
          className="container"
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />

        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
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
