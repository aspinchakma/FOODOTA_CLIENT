import React, { useState } from 'react';
import AddPost from '../AddPost/AddPost';
import AddRestaurant from '../AddRestaurant/AddRestaurant';
import './AddNewItem.css';

const AddNewItem = () => {
    const [isRest, setIsRest] = useState(true);

    const handleAddPost = () => setIsRest(true);
    const handleAddRest = () => setIsRest(false);
    return (
        <div className="container main_add_item_container py-4">
            <div className="text-center">
                <h3 className="main_add_item_header mb-4">
                    <span className={isRest ? 'header' : ''} onClick={handleAddPost}>Add Blog</span>
                    <span className={!isRest ? 'header' : ''} onClick={handleAddRest}>Sell Meal</span> </h3>
            </div>
            <div>
                {
                    isRest ?
                        <AddPost></AddPost>
                        :
                        <AddRestaurant></AddRestaurant>
                }
            </div>
        </div>
    )
}

export default AddNewItem;