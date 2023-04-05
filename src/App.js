import React, { Component } from 'react';
import Animals from './Animals';
import Header from './Header';
import {animals} from './animalsList';
import './App.css';

class App extends Component {

  state = {
    animals: animals,
    title: 'Living world',
    searchInput: ''
  };

/*   likesHandler = (e) => {

    if (e.target.name === 'addlike') {
      this.setState(prevState => ({
        animals: prevState.animals.map(animal => {
          if (e.target.value === animal.name ) {
            return {...animal, likes: animal.likes + 1}
          } else {
            return animal;
          }
        })
      }));
    } else {
      this.setState(prevState => ({
        animals: prevState.animals.map(animal => {
          if (e.target.value === animal.name ) {
            return {...animal, likes: animal.likes - 1}
          } else {
            return animal;
          }
        })
      }));
    }
  } */

  likesHandler = (name, action) => {

    this.setState((prevState) => { // setState(state) method taking previous state
      const updatedArray = prevState.animals.map((animal) => {
        if (animal.name === name) {
          if (action === 'add') {
            return {...animal, likes: animal.likes + 1}
          } else {
            return {...animal, likes: animal.likes - 1}
          }
        } else {
          return animal;
        }
    })
    return {
      animals: updatedArray
    }
  })
}

/*   removeHandler = (e) => {
    // console.log('removeHandler was triggered')

    this.setState(prevState => ({
      animals: prevState.animals.filter(animal => animal.name !== e.target.value)
    }));
  }
 */
/*   removeHandler = (name) => {
    this.setState(prevState => ({
      animals: prevState.animals.filter(animal => animal.name !== name)
    }));
  } */

  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter(animal => animal.name !== name)
    this.setState({animals: updatedArray});
  }

  searchHandler = (e) => {
    this.setState({
      searchInput: e.target.value // storing the input to the state
    })
  }

  render() {

    return (
      <div>
        <Header title={this.state.title}/>
        <Animals data = {this.state.animals} 
        likesHandler = {this.likesHandler}
        removeHandler={this.removeHandler}
        searchHandler={this.searchHandler}
        searchInput={this.state.searchInput}/>
      </div>
    );
  }
}

export default App;
