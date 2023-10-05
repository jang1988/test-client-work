import React from 'react';
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
}

const ProductList: React.FC<ProductListProps> = ({products}) => {
    return (
        <div>
            {products.map((product) => (
                <p key={product.id}>{product.title}</p>
            ))}
        </div>
    );
};

export default ProductList;
