// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { pushNewRobot } from './actions'

// const mapDispatchToProps = (dispatch) => {
//     return {
//         pushRobot: (newRobotInfo) => {dispatch(pushNewRobot(newRobotInfo))}
//     }
// }

// class AddNewRobot extends Component {
//     state = {  
//         id: '',
//         name: '',
//         email: ''
//     }
    
//     handleChange = (e) => {
//         let value = e.target.value;
//         let selector = e.target.id;
//         this.setState(prevState => {
//             return Object.assign({}, prevState, {[selector]: value})
//         })
//     }

//     deleteInputs = () => {
        
//         this.setState(prevState => {
//             let emptyState = Object.assign({}, prevState);
          
//             Object.keys(emptyState).forEach(item => {
//                 return emptyState[item] = "";
//             })
            
//             return emptyState;

//         })
//     }

//     submitNewRobot = (e) => {
//         e.preventDefault();
//         //console.log(this.props)
//         this.props.pushRobot(this.state);
//         this.deleteInputs()
//     }

//     render() { 
//         return (
//             <div>
//                 <label htmlFor="id">id:</label>
//                 <input id="id" type="number" placeholder="id" value={this.state.id} onChange = {this.handleChange}/>

//                 <label htmlFor="name">name:</label>
//                 <input id="name" type="text" placeholder="name" value={this.state.name} onChange = {this.handleChange}/>

//                 <label htmlFor="email">email:</label>
//                 <input id="email" type="text" placeholder="email" value={this.state.email} onChange = {this.handleChange}/>

//                 <button onClick = {this.submitNewRobot}>Add</button>
//             </div>
//         );
//     }
// }
 
// export default connect(null, mapDispatchToProps)(AddNewRobot);

import React, { useState } from 'react';
import './AddNewRobot.css'
import { connect } from 'react-redux';
import {pushNewRobot} from './actions';

const mapDispatchToProps = (dispatch) => {
    return {
        pushRobot: (robotInfo) => {dispatch(pushNewRobot(robotInfo))}
    }
}

const AddNewRobot = ( {pushRobot} ) => {

    const initialState = {
        id: '',
        name: '',
        email: ''
    }
   
    const [newRobotInfo, setNewRobotInfo] = useState(Object.assign({}, initialState))
    const [idError, setIdError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    //useEffect(()=> console.log(newRobotInfo))

    const submitNewRobot = (e) => {
        e.preventDefault();
        //console.log(newRobotInfo)
        if(inputValidation(newRobotInfo)){
            newRobotInfo.id = parseInt(newRobotInfo.id);
            pushRobot(newRobotInfo);
            //clean state
            setNewRobotInfo(Object.assign({}, initialState))
        }
        
    }

    const handleChange = (e) => {
        setNewRobotInfo(Object.assign({}, newRobotInfo, {[e.target.id]: e.target.value}))
    }

    const inputValidation = (newRobotInfo) => {
        setIdError(false);
        setNameError(false);
        setEmailError(false);
        
        if(newRobotInfo.id === "" || newRobotInfo.name === "" || newRobotInfo.email === ""){

            if(newRobotInfo.id === ""){
                setIdError(true);
            }

            if(newRobotInfo.name === ""){
                setNameError(true);
            }
            if(newRobotInfo.email === ""){
                setEmailError(true)
            }
            return false;
        }

        return true;
    }

    return (
        <div>
            <label htmlFor="id">id:</label>
            <input className={idError ? 'error' : 'no-error'} id="id" type="number" placeholder="id" value={newRobotInfo.id} onChange = {handleChange}/>

            <label htmlFor="name">name:</label>
            <input className={nameError ? 'error' : 'no-error'} id="name" type="text" placeholder="name" value={newRobotInfo.name} onChange = {handleChange}/>

            <label htmlFor="email">email:</label>
            <input className={emailError ? 'error' : 'no-error'} id="email" type="text" placeholder="email" value={newRobotInfo.email} onChange = {handleChange}/>

            <button onClick = {submitNewRobot}>Add</button>
        </div>
    );
}
 
export default connect(null, mapDispatchToProps)(AddNewRobot);