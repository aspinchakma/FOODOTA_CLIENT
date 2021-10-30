import React from 'react';

const ManageSingle = ({ order, handleDeleteManageItems }) => {
    const { email, food, _id } = order;
    const { name, quantity, price } = food;
    return (
        <tr>
            <td className="order_items">{email}</td>
            <td className="order_items">{name}</td>
            <td className="order_items">${quantity * price}</td>
            <td><i onClick={() => handleDeleteManageItems(_id)} className="delete_icon far fa-trash-alt"></i></td>

        </tr>
    );
};

export default ManageSingle;