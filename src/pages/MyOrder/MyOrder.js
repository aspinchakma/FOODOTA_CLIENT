import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import useCont from '../../hooks/useCont';
import OrderItems from '../OrderItems/OrderItems';
import './MyOrder.css'

const MyOrder = () => {
    const [myOrder, setMyOrder] = useState([]);
    const { user } = useCont();
    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user.email}`)
            .then(response => response.json())
            .then(data => setMyOrder(data))
    }, []);
    const handleDelete = (id) => {
        const confirmMessage = window.confirm("Are You sure delete this item ?");
        if (confirmMessage) {
            fetch('http://localhost:5000/myOrder/deleteDetail', {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        email: user.email,
                        id: id
                    }
                )
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Delete successfully');
                        const remainItems = myOrder.filter(item => item._id !== id);
                        setMyOrder(remainItems)
                    }
                })
        }
    }
    return (
        <div className="main_order_container">
            <div className="my_order_container container mx-auto">
                {
                    myOrder.length === 0 ? <h4 className="empty_order">Please Order Item</h4>
                        :
                        <>
                            <div className="text-center">
                                <h3>Foodota</h3>
                                <h5>Hello, {user.displayName}</h5>
                                <p>Manage Your Order</p>
                            </div>
                            <Table responsive striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Item Name</th>
                                        <th>Quantity</th>
                                        <th>Total Price</th>
                                        <th>Manage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myOrder?.map(order => <OrderItems key={order._id}
                                            handleDelete={handleDelete}
                                            order={order}></OrderItems>)
                                    }
                                </tbody>
                            </Table>
                        </>
                }
            </div>
        </div>
    );
};

export default MyOrder;