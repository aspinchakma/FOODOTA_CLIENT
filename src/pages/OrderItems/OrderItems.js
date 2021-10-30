import React from 'react';

const OrderItems = ({ order, handleDelete }) => {

    const { name, quantity, price } = order.food;
    const { _id } = order;
    return (
        <tr>
            <td className="order_items">{name}</td>
            <td className="order_items">{order.food.status}</td>
            <td className="order_items">{quantity}</td>
            <td className="order_items">${quantity * price}</td>
            <td><i onClick={() => handleDelete(_id)} className="delete_icon far fa-trash-alt"></i></td>

        </tr>
    );
};

export default OrderItems;