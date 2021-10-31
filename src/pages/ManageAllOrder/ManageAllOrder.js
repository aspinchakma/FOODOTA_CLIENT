import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useCont from '../../hooks/useCont';
import ManageSingle from '../ManageSingle/ManageSingle';
import './ManageOrder.css';

const ManageAllOrder = () => {
    const [allItem, setAllItem] = useState([]);

    const { user } = useCont();
    useEffect(() => {
        fetch('https://calm-sea-46897.herokuapp.com/manageAll')
            .then(res => res.json())
            .then(data => setAllItem(data))
    }, []);
    const handleDeleteManageItems = (id) => {
        console.log(id);
        const confirmMessage = window.confirm('Are you sure , delete this item ?');
        if (confirmMessage) {
            fetch('https://calm-sea-46897.herokuapp.com/manageAll/deleteDetails', {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        id: id
                    }
                )
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("Delete successfully");
                        const remainItems = allItem.filter(food => food._id !== id);
                        setAllItem(remainItems)
                    }
                })
        }
    }

    // update fo status

    const handleStatus = id => {
        console.log(id)
        fetch('https://calm-sea-46897.herokuapp.com/food/status', {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(
                {
                    id: id
                }
            )
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Successfully Approved');
                }
            })
    }

    return (
        <div>
            <div className="container mini_manage_container">
                {
                    allItem.length === 0 ? <h4 className="empty_order">There is no delivery</h4>
                        :
                        <>
                            <div className="text-center">
                                <h3>Foodota</h3>
                                <h5>Hello Admin, {user.displayName}</h5>
                                <p>Manage Your Order</p>
                            </div>
                            <Table responsive striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Email</th>
                                        <th>status</th>
                                        <th>Item Name</th>
                                        <th>Quantity</th>
                                        <th>Total Price</th>
                                        <th>U. Status</th>
                                        <th>Manage</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allItem?.map(order => <ManageSingle key={order._id}
                                            handleStatus={handleStatus}
                                            handleDeleteManageItems={handleDeleteManageItems}
                                            order={order}></ManageSingle>)
                                    }
                                </tbody>
                            </Table>
                        </>
                }

            </div>
        </div >
    );
};

export default ManageAllOrder;