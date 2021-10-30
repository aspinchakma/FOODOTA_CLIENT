import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import useCont from '../../hooks/useCont';
import OrderItems from '../OrderItems/OrderItems';
import './MyOrder.css'

const MyOrder = () => {
    const { email } = useParams();
    const [myOrder, setMyOrder] = useState([]);
    const { user } = useCont();
    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user.email}`)
            .then(response => response.json())
            .then(data => setMyOrder(data))
    }, []);
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
                                        myOrder?.map(order => <OrderItems key={order._id} order={order}></OrderItems>)
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