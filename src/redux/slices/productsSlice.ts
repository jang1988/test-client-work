import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [
        {
            id: 1,
            serialNumber: 1234,
            isNew: 1,
            photo: 'pathToFile.jpg',
            title: 'Product 1',
            type: 'Monitors',
            specification: 'Specification 1',
            guarantee: {
                start: '2017-06-29 12:09:33',
                end: '2017-06-29 12:09:33',
            },
            price: [
                { value: 100, symbol: 'USD', isDefault: 0 },
                { value: 2600, symbol: 'UAH', isDefault: 1 },
            ],
            order: 1,
            date: '2017-06-29 12:09:33',
        },
        {
            id: 2,
            serialNumber: 1234,
            isNew: 1,
            photo: 'pathToFile.jpg',
            title: 'Product 2',
            type: 'Monitors',
            specification: 'Specification 1',
            guarantee: {
                start: '2017-06-29 12:09:33',
                end: '2017-06-29 12:09:33',
            },
            price: [
                { value: 100, symbol: 'USD', isDefault: 0 },
                { value: 2600, symbol: 'UAH', isDefault: 1 },
            ],
            order: 2,
            date: '2017-06-29 12:09:33',
        },
        {
            id: 3,
            serialNumber: 1234,
            isNew: 1,
            photo: 'pathToFile.jpg',
            title: 'Product 3',
            type: 'Monitors',
            specification: 'Specification 2',
            guarantee: {
                start: '2017-06-29 12:09:33',
                end: '2017-06-29 12:09:33',
            },
            price: [
                { value: 150, symbol: 'USD', isDefault: 0 },
                { value: 3000, symbol: 'UAH', isDefault: 1 },
            ],
            order: 3,
            date: '2017-06-30 12:09:33',
        },
        {
            id: 4,
            serialNumber: 1234,
            isNew: 1,
            photo: 'pathToFile.jpg',
            title: 'Product 4',
            type: 'Phone',
            specification: 'Specification 2',
            guarantee: {
                start: '2017-06-29 12:09:33',
                end: '2017-06-29 12:09:33',
            },
            price: [
                { value: 150, symbol: 'USD', isDefault: 0 },
                { value: 3000, symbol: 'UAH', isDefault: 1 },
            ],
            order: 1,
            date: '2017-06-30 12:09:33',
        },
        {
            id: 5,
            serialNumber: 1234,
            isNew: 1,
            photo: 'pathToFile.jpg',
            title: 'Product 5',
            type: 'Monitors',
            specification: 'Specification 3',
            guarantee: {
                start: '2017-06-29 12:09:33',
                end: '2017-06-29 12:09:33',
            },
            price: [
                { value: 200, symbol: 'USD', isDefault: 0 },
                { value: 3500, symbol: 'UAH', isDefault: 1 },
            ],
            order: 1,
            date: '2017-07-01 12:09:33',
        },
        {
            id: 6,
            serialNumber: 1234,
            isNew: 1,
            photo: 'pathToFile.jpg',
            title: 'Product 6',
            type: 'Monitors',
            specification: 'Specification 3',
            guarantee: {
                start: '2017-06-29 12:09:33',
                end: '2017-06-29 12:09:33',
            },
            price: [
                { value: 200, symbol: 'USD', isDefault: 0 },
                { value: 3500, symbol: 'UAH', isDefault: 1 },
            ],
            order: 3,
            date: '2017-07-01 12:09:33',
        },
        {
            id: 7,
            serialNumber: 1234,
            isNew: 1,
            photo: 'pathToFile.jpg',
            title: 'Product 7',
            type: 'Monitors',
            specification: 'Specification 4',
            guarantee: {
                start: '2017-06-29 12:09:33',
                end: '2017-06-29 12:09:33',
            },
            price: [
                { value: 250, symbol: 'USD', isDefault: 0 },
                { value: 4000, symbol: 'UAH', isDefault: 1 },
            ],
            order: 3,
            date: '2017-07-02 12:09:33',
        },
        {
            id: 8,
            serialNumber: 1234,
            isNew: 1,
            photo: 'pathToFile.jpg',
            title: 'Product 8',
            type: 'Monitors',
            specification: 'Specification 4',
            guarantee: {
                start: '2017-06-29 12:09:33',
                end: '2017-06-29 12:09:33',
            },
            price: [
                { value: 250, symbol: 'USD', isDefault: 0 },
                { value: 4000, symbol: 'UAH', isDefault: 1 },
            ],
            order: 1,
            date: '2017-07-02 12:09:33',
        },
        {
            id: 9,
            serialNumber: 1234,
            isNew: 1,
            photo: 'pathToFile.jpg',
            title: 'Product 9',
            type: 'Monitors',
            specification: 'Specification 5',
            guarantee: {
                start: '2017-06-29 12:09:33',
                end: '2017-06-29 12:09:33',
            },
            price: [
                { value: 300, symbol: 'USD', isDefault: 0 },
                { value: 4500, symbol: 'UAH', isDefault: 1 },
            ],
            order: 1,
            date: '2017-07-03 12:09:33',
        },
    ],
};

const poductsSlice = createSlice({
    name: 'poducts',
    initialState,
    reducers: {},
});

export const poductsReducer = poductsSlice.reducer;
