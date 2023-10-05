import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai';
import { BiListUl } from 'react-icons/bi';
import { FcPlus } from 'react-icons/fc';
import ProductList from '../../productList/ProductList';
import DeleteModal from '../../deleteModal/DeleteModal';
import { motion } from 'framer-motion';
import './orders.scss';

interface Order {
    id: string;
    title: string;
    description: string;
    products: {
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
        price: {
            value: number;
            symbol: string;
            isDefault: number;
        }[];
        order: number;
        date: string;
    }[];
    date: string;
}

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
    price: {
        value: number;
        symbol: string;
        isDefault: number;
    }[];
    order: number;
    date: string;
}

interface RootState {
    orders: {
        orders: Order[];
    };
    products: {
        products: Product[];
    };
}

const Orders: React.FC = () => {
    const { orders } = useSelector((state: RootState) => state.orders);
    const { products } = useSelector((state: RootState) => state.products);
    const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
    const [showProductList, setShowProductList] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const toggleProductList = (orderId: string) => {
        setSelectedOrderId(selectedOrderId === orderId ? null : orderId);
        setShowProductList((prevShowProductList) => !prevShowProductList);
    };

    const toggleDeleteModal = () => {
        setShowDeleteModal((prevShowDeleteModal) => !prevShowDeleteModal);
    };

    return (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
            <h2>
                <button className="orders__add">
                    <FcPlus />
                </button>
                Приходы / {orders.length}
            </h2>
            <div
                className={`orders ${showProductList ? 'half' : ''} ${
                    showDeleteModal ? 'modal-open' : ''
                }`}
            >
                {orders.map((order: Order) => (
                    <div className="order" key={order.id}>
                        <h3>{order.title}</h3>
                        <p>Description: {order.description}</p>
                        <div className="products">
                            <button
                                className="orders__productsList"
                                onClick={() => toggleProductList(order.id)}
                            >
                                <BiListUl />
                            </button>
                            <p>
                                {
                                    products.filter((product) => product.order === Number(order.id))
                                        .length
                                }{' '}
                                products
                            </p>
                        </div>
                        <p>Date: {order.date}</p>
                        <button className="orders__delete" onClick={toggleDeleteModal}>
                            <AiFillDelete />
                        </button>
                    </div>
                ))}
                {showProductList && (
                    <div className="productList">
                        <div
                            className="productList__close"
                            onClick={() => setShowProductList(false)}
                        >
                            &times;
                        </div>
                        <ProductList
                            products={products.filter(
                                (product) => product.order === Number(selectedOrderId),
                            )}
                        />
                    </div>
                )}
            </div>
            {showDeleteModal && (
                <div className="overlay active">
                    <DeleteModal toggleDeleteModal={toggleDeleteModal} />
                </div>
            )}
      </motion.div>
    );
};

export default Orders;
