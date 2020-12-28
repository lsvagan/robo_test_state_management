import {
        ADD_NEW_ROBOT, 
        ADD_FETCHED_ROBOTS_TO_STATE, 
        FETCHING_ERROR, 
        DELETE_ROBOT,
        CHANGE_ROBOT_INFO
        } from '../constants';

const initialStateRobots = {
    robots: [
        // {id: 1, name: 'Lieanne Graham', email: 'Sincere@april.biz'},
        // {id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv'},
        // {id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net'},
        // {id: 4, name: 'Patricia Lebsack', email: 'Julianne.OConner@kory.org'},
        // {id: 5, name: 'Chelsey Dietrich', email: 'Lucio_Hettinger@annie.ca'},
        // {id: 6, name: 'Mrs. Dennis Schulist', email: 'Karley_Dach@jasper.info'}
    ]
}

const robotsReducer = (state = initialStateRobots, action = {}) => {
    switch(action.type) {
        case ADD_NEW_ROBOT:
            let updatedRobots = JSON.parse(JSON.stringify(state));
            updatedRobots.robots.unshift(action.payload)
            return updatedRobots;
        case DELETE_ROBOT:
            return Object.assign({}, state, {robots: state.robots.filter(robot =>
                robot.id !== action.payload)});
            // secound way to update state
            // return { robots: state.robots.filter(robot =>
            //     robot.id !== action.payload
            //  )}
        case ADD_FETCHED_ROBOTS_TO_STATE:
            return Object.assign( {}, state, {robots: action.payload});
        case FETCHING_ERROR:
            console.log(action.payload);
            return state;

        case CHANGE_ROBOT_INFO:
            return Object.assign({}, state, { robots: state.robots.map(robot => {
                if(robot.id === action.payload.id){
                    console.log('robot: ', robot)
                    console.log('updated Robot: ', action.payload)
                    return action.payload;
                }
                return robot;
            })})
            
        default:
            return state;
    }
}

export default robotsReducer;