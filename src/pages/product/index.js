import React, { Component } from "react";
import api from "../../services/api";

import './styles.css';

export default class Product extends Component {
  state = {
    product: {},
    goBack:null,
  };

  async componentDidMount() {
    const { match:{params:{id}}, history:{goBack} } = this.props;

    const response = await api.get(`/products/${id}`);

    this.setState({ product: response.data, goBack });
  }

  render() {
    const { product, goBack } = this.state;

    return (
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>

        <p>
          URL: <a href={product.url}>{product.url}</a>
        </p>

        <button onClick={goBack}>Voltar</button>
      </div>
    );
  }
}
