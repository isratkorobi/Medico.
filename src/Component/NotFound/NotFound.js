import React from 'react';
import './NotFound.css';
import {Link} from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="notfound">
            <div>
            <img src="https://wpklik.com/wp-content/uploads/2019/03/A-404-Page-Best-Practices-and-Design-Inspiration.jpg" />
            </div>
            <Link to="/">Go Back</Link>
        </div>
    );
};

export default NotFound;