import React, { Component } from "react";

export class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
        categories:[
            {
                key: "all",
                
            }
        ]}
    };
  }
  render() {
    return <div>Categories</div>;
  }
}

export default Categories;
