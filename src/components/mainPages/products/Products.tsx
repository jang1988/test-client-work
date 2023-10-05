import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import './products.scss';

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

interface RootState {
    products: {
        products: Product[];
    };
}

const ProductItem: React.FC<{ product: Product }> = ({ product }) => (
    <div className="product">
        <h3 className="product__title">{product.title}</h3>
        <p className="product__serial-number">Serial Number: {product.serialNumber}</p>
        <p className="product__type">Type: {product.type}</p>
        <div className="product__guarantee">Guarantee
            <p>start: {product.guarantee.start}</p>
            <p>end: {product.guarantee.end}</p>
        </div>

        <div className="product__price">Price:
            {product.price.map((price, i) => (
                <p key={price.value + i}>
                    {price.symbol}: {price.value}
                </p>
            ))}
        </div>
        <p className="product__order">Order: {product.order}</p>
    </div>
);

const Products: React.FC = () => {
    const { products } = useSelector((state: RootState) => state.products);
    const [selectedType, setSelectedType] = React.useState("");

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedType(event.target.value);
    };

    const filteredProducts = selectedType
        ? products.filter(product => product.type === selectedType)
        : products;
    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="products">
            <h2>Продукты / {products.length}</h2>
            <select value={selectedType} onChange={handleTypeChange}>
                <option value="">Все типы</option>
                <option value="Monitors">Monitors</option>
                <option value="Phone">Phone</option>
            </select>
            <div className="products__wrapper">
                <div className="products__list">
                    {filteredProducts.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div></motion.div>
    );
};

export default Products;
