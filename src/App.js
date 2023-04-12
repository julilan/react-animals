import React, { Component } from 'react';
import Animals from './pages/Animals';
import Birds from './pages/Birds';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import {animals,birds} from './animalsList';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {

  state = {
    animals: animals,
    birds: birds,
    title: 'Vivarium',
    searchInput: ''
  };

  likesHandler = (name, action, source) => {
    if (source === 'animals') {
      this.setState((prevState) => { // setState(state) method taking previous state
        const updatedAnimalArray = prevState.animals.map((animal) => {
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
          animals: updatedAnimalArray
        }
      })
    } else {
      this.setState((prevState) => { // setState(state) method taking previous state
        const updatedBirdArray = prevState.birds.map((animal) => {
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
          birds: updatedBirdArray
        }
      })
    }
  }

  removeHandler = (name, source) => {
    if (source === 'animals') {
      const updatedAnimalArray = this.state.animals.filter(animal => animal.name !== name)
      this.setState({animals: updatedAnimalArray});
    } else {
      const updatedBirdArray = this.state.birds.filter(animal => animal.name !== name)
      this.setState({birds: updatedBirdArray});
    }
  }

  searchHandler = (e) => {
    this.setState({
      searchInput: e.target.value.toLowerCase() // storing the input to the state
    })
  }

  render() {

    return (
      <BrowserRouter>
        <div>
          <NavLink to="/">
          <Header title={this.state.title}/>
          </NavLink>
          <Navigation animalsLength = {this.state.animals.length} 
            birdsLength = {this.state.birds.length}/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/animals" element={<Animals 
              data = {this.state.animals} 
              likesHandler = {this.likesHandler}
              removeHandler = {this.removeHandler}
              searchHandler = {this.searchHandler}
              searchInput = {this.state.searchInput}
              />}
            />
            <Route path="/birds" element={<Birds
              data = {this.state.birds}
              likesHandler = {this.likesHandler}
              removeHandler = {this.removeHandler}
              searchHandler = {this.searchHandler}
              searchInput = {this.state.searchInput}
              />}
            />
            <Route path="/about" element={<About/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
