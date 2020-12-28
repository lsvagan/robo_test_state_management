import { 
            CHANGE_SEARCH_FIELD,
            ADD_FETCHED_ROBOTS_TO_STATE,
            FETCHING_ERROR,
            ADD_NEW_ROBOT,
            DELETE_ROBOT,
            CHANGE_ROBOT_INFO
        } from './constants.js';

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

export const fetchRobots = () => {
    console.log('run fetch robots function')
    return (dispatch, getState) => {
        //async action
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(result => result.json())
        .then(data => {
        dispatch(addFetchedRobotsToState(data));
        })
        .catch((err) => { dispatch(onFetchingError(err)) } )
    }
}

const addFetchedRobotsToState = (robots) => {
    return{
        type: ADD_FETCHED_ROBOTS_TO_STATE,
        payload: robots
    }
}

const onFetchingError = (err) => {
    return {
        type: FETCHING_ERROR,
        payload: err
    }
}

export const pushNewRobot = (newRobotInfo) => {
    return (dispatch, getState) => {
        //here we will make some async call to database
        /* -------- */
        dispatch(onRecieveNewRobot(newRobotInfo))
    }
}

const onRecieveNewRobot = (newRobotInfo) => {
    return {
        type: ADD_NEW_ROBOT,
        payload: newRobotInfo
    }
}

export const deleteRobot = (robot_id) => {
    return (dispatch, getState) => {
        //async action
        dispatch(deleteRobotAction(robot_id))
    }
}

const deleteRobotAction = (robot_id) => {
    return {
        type: DELETE_ROBOT,
        payload: robot_id
    }
}

export const changeRobotinfo = (updatedRobot) => {
    //this action should be async in real project with database
    return {
        type: CHANGE_ROBOT_INFO,
        payload: updatedRobot
    }
}