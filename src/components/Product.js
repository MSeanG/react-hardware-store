import React, {Component} from 'react';

class Product extends Component {
  _delete = (event) => {
    this.props.deleteProductFromProductList(event);
  }

  _addToCart = () => {
    this.props.addProductToCart(this.props.index);
  };

  _removeFromCart = () => {
    this.props.removeProductFromCart(this.props.index);
  };

  _showOptions = () => {
    const viewMode = this.props.viewMode;

    const adminOptions =
      <div>
        <button onClick={this._deleteProduct}>Delete</button>
      </div>;

    const shopOptions =
      <div>
        <button onClick={this._addToCart}>Add To Cart</button>
      </div>;

    const cartOptions =
      <div>
        <button onClick={this._removeFromCart}>Remove From Cart</button>
      </div>;

    switch (viewMode) {
      case 'ADMIN':
        return adminOptions;
      case 'SHOP':
        return shopOptions;
      case 'CART':
        return cartOptions;
      default:
        return null;
    }
  };

  render() {
    const productName = this.props.productName;
    const description = this.props.description;
    const price = this.props.price;

    return (
      <div>
        <h3>{productName}</h3>
        <div>{description}</div>
        <div>{price}</div>
        <button onClick={this._delete}>
          Delete
        </button>
      </div>
    );

  }
}

export default Product;