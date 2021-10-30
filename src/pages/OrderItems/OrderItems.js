import React from 'react';

const OrderItems = ({ order }) => {
    const { name, quantity, price } = order.food;
    return (
        <tr>
            <td className="order_items">{name}</td>
            <td className="order_items">{quantity}</td>
            <td className="order_items">${quantity * price}</td>
            <td><i className="delete_icon far fa-trash-alt"></i></td>

        </tr>
    );
};

export default OrderItems;