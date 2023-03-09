import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <img src={"./img/" + this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.brand}</p>
        <p>{this.props.item.price} ₴</p>
        <div className="add-to-cart">+</div>
      </div>
    );
  }
}

export default Item;
