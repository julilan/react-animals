import React, { Component } from 'react';
//import Animals from './pages/Animals';
//import Birds from './pages/Birds';
import List from './pages/List';
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

  likesHandler = (name, action, list) => {

      this.setState((prevState) => { // setState(state) method taking previous state
        const updatedArray = prevState[list].map((item) => {
          if (item.name === name) {
            if (action === 'add') {
              return {...item, likes: item.likes + 1}
            } else {
              return {...item, likes: item.likes - 1}
            }
          } else {
            return item;
          }
        })
        return {
          [list]: updatedArray
        }
      })
  }

  removeHandler = (name, list) => {
    const updatedArray = this.state[list].filter(item => item.name !== name);
    this.setState({[list]: updatedArray});
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
            <Route path="/animals" element={<List 
              title="animals"
              data = {this.state.animals} 
              likesHandler = {this.likesHandler}
              removeHandler = {this.removeHandler}
              searchHandler = {this.searchHandler}
              searchInput = {this.state.searchInput}
              />}
            />
            <Route path="/birds" element={<List
              title="birds"
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
