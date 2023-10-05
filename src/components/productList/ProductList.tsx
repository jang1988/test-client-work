import React from 'react';
import { FcPlus } from 'react-icons/fc';
import { AiFillDelete } from 'react-icons/ai';
import './productLits.scss';

interface Product {
    id: number;
    serialNumber: number;
    isNew: number;
    photo: string;
    title: string;
    type: string;
    specification: string;
    guarantee: {
        start: string;
        end: string;
    };
    price: Array<{
        value: number;
        symbol: string;
        isDefault: number;
    }>;
    order: number;
    date: string;
}

interface ProductListProps {
    products: Array<Product>;
    orderNumber: string | null;
}

const ProductList: React.FC<ProductListProps> = ({ products, orderNumber }) => {
    return (
        <div className="product-list">
            <h2 className="product-list__title">Order: {orderNumber}</h2>
            <div className="product-list__icon-container">
                <FcPlus /> Добавить продукт
            </div>
            <div className="product-list__details">
                {products.map((product) => (
                    <div key={product.id} className="product-list__item">
                        <div className="product-list__photo">
                            <img
                                src={'https://images.philips.com/is/image/PhilipsConsumer/242V8A_01-IMS-ru_UA?$jpglarge$&wid=960'}
                                alt={product.title}
                                className="product-list__image"
                            />
                        </div>
                        <div className="product-list__info">
                            <h3 className="product-list__name">{product.title}</h3>
                            <p className="product-list__description">
                                Описание: {product.specification}
                            </p>
                        </div>
                        <AiFillDelete/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
