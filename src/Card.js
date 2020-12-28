import React from 'react';
import DeleteRobot from './DeleteRobot';
import { Link } from 'react-router-dom';
import './Card.css'

const Card = ({id, name, email}) => {
    // const onClickEdit = (id) => {
    //     //e.preventDefault()
    //     console.log(id)
    // }
    return (  
        <div className = "card">
            <DeleteRobot id={id} />
            <img src= {`https://robohash.org/${id}`} alt="profilePhoto"/>
            <h3>Name: {name}</h3>
            <h5>Email: {email}</h5>
            <Link to={`/${id}`}>
                <button>EDIT</button>
            </Link>
        </div>
    );
}
 
export default Card;