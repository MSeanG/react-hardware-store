import React, {Component} from 'react';

class HomePage extends Component {

  constructor() {
    super();

    this.state = {
      itemCurrentlyOnSale: 'A Hammer',
      editSaleItem: true
    };
  }

  render() {
    return (
      <div>
        <h1>My Hardware Store</h1>
        <div>
          <span>Currently On Sale: { this.state.itemCurrentlyOnSale }!</span>
          <span><button onClick={this._toggleEditSaleItem}>Edit Sale Item</button></span>
          { this.state.editSaleItem ? <div><input type="text"/></div> : null }
        </div>
      </div>
    );
  }
}

export default HomePage;