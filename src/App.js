import React, { Component } from 'react';
import './App.css';
import CardsContainer from './CardsContainer';
import SearchFieldComponent from './SearchFieldComponent';
import AddNewRobot from './AddNewRobot';
import EditRobot from './EditRobot';
import { BrowserRouter, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { setSearchField, fetchRobots } from './actions.js';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.robotsReducer.robots
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchFieldChange: (event) => dispatch(setSearchField(event.target.value)),
    fetchRobots : () => dispatch(fetchRobots())
  }
}

class App extends Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     robots: []
  //   } 
  // }

  componentDidMount () {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(result => result.json())
  //   .then(data => {
  //     this.setState({robots: data})
  //   })
    this.props.fetchRobots()
  }


  render() { 
    //const { robots } = this.state;
    //console.log(this.props)

    const {searchField, onSearchFieldChange, robots } = this.props;
    const updatedRobots = robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
    })
    
    return robots.length ? ( 
      <BrowserRouter>
        <div className = "App">

        <Route exact path='/' component = {() => {
          return (
            <div>
              <h1>ROBOFRIENDS APP</h1>
              <AddNewRobot />
              <SearchFieldComponent onSearchFieldChange = { onSearchFieldChange } />
              <CardsContainer robots = { updatedRobots } />
            </div>
          )
        }
        }
        />

        <Route path="/:robot_id" component={EditRobot} />

        </div>
      </BrowserRouter>
    ) : <div className="App">Loading...</div>;
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);
