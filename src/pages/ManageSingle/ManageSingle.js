import React from 'react';

const ManageSingle = ({ order, handleDeleteManageItems, handleStatus }) => {

    const { email, food, _id } = order;
    const { name, quantity, price, status } = food;


    return (
        <tr>
            <td className="order_items">{email}</td>
            <td className="order_items">{status}</td>
            <td className="order_items">{name}</td>
            <td className="order_items">{quantity}</td>
            <td className="order_items">${quantity * price}</td>
            {
                status.length === 7 ? <td className="order_items"><button onClick={() => handleStatus(_id)} className="update_button">update</button></td> :
                    <td className="updated_message">Updated</td>
            }
            <td><i onClick={() => handleDeleteManageItems(_id)} className="delete_icon far fa-trash-alt"></i></td>

        </tr>
    );
};

export default ManageSingle;