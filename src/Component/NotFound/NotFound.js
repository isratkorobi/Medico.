import React from 'react';
import './NotFound.css';
import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <div className="notfound">
            <img src="https://i1.wp.com/www.ecommerce-nation.com/wp-content/uploads/2018/10/404-error.jpg?resize=800%2C600&ssl=1" />
            </div>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default NotFound;