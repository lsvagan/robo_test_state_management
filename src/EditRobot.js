import React, { useState } from 'react';
import { connect } from 'react-redux';
import './EditRobot.css';
import { Link } from 'react-router-dom';
import { changeRobotinfo } from './actions';

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps.match.params.robot_id)
    // console.log('MAPSTATETOPORPS: ', state.robotsReducer.robots.find(robot=> robot.id == ownProps.match.params.robot_id))
    // console.log(parseInt(ownProps.match.params.robot_id))
    return{
        robot: state.robotsReducer.robots.find(robot=> robot.id === parseInt(ownProps.match.params.robot_id))
    }   
}

const mapDispatchToProps = (dispatch) => {
    return{
        changeRobotinfo: (updatedRobot) => {dispatch(changeRobotinfo(updatedRobot))}
    }
}

const EditRobot = (props) => {

        // console.log(this.props.match.params)
        // console.log(this.props.robot)
        const {id, name, email} = props.robot

        const [newName, setNewName] = useState(name);
        const [newEmail, setNewEmail] = useState(email);

        const handleChange = (e) => {
            switch(e.target.id){
                case 'name':
                    setNewName(e.target.value)
                    break;
                case 'email':
                    setNewEmail(e.target.value)
                    break
                default:
                    return;
            }
        }

        const onClickSaveChanges = () => {
            let updatedRobot = {
                id: id,
                name: newName,
                email: newEmail
            }
            console.log('send info: ', updatedRobot);
            props.changeRobotinfo(updatedRobot)
        }

        // useEffect(()=>{
        //     console.log('new name: ', newName)
        //     console.log('new email: ', newEmail)
        // },[newName, newEmail])

        return ( 
            <div className="editRobot">
                <img src={`https://robohash.org/${id}`} alt="profilePhoto"/>

                <label htmlFor="name"> Edit name: </label>
                <input type="text" id="name" value={newName} onChange={handleChange}/>

                <label htmlFor="email"> Edit email:</label>
                <input type="text" id="email" value={newEmail} onChange={handleChange}/>

                <div className="nav-buttons">
                    <Link to='/'>
                        <button>Back</button>
                    </Link>
                    <Link to='/'>
                        <button onClick={onClickSaveChanges}>Save changes</button>
                    </Link>
                </div> 
            </div>
         );
}
 
export default connect(mapStateToProps, mapDispatchToProps)(EditRobot);