import React, {Component} from 'react';

import ShopProduct from './ShopProduct';

class ShopProductList extends Component {
    render() {
        const productList = this.props.productList;
        console.log(productList);
        const productComponents = productList.map((product, index) => {
            return <ShopProduct
                productName={product.productName}
                description={product.description}
                price={product.price}
                key={index}/>;
        });

       return (
            <div>
                {productComponents}
            </div>
        );
    }
}

export default ShopProductList;