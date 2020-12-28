import React from 'react';
import './DeleteRobot.css'
import { connect } from 'react-redux';
import { deleteRobot } from './actions';

const mapDispatchToProps = (dispatch) => {
    return{
        onClickDelete: (id) => dispatch(deleteRobot(id))
    }
}

const DeleteRobot = ( { id, onClickDelete } ) => {

    return ( 
        <div className="deleteRobot">
            <span onClick = {() => onClickDelete(id)}> X </span>
        </div>
    );
}
 
export default connect(null , mapDispatchToProps)(DeleteRobot);