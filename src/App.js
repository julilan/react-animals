import React, { Component } from 'react';
import Animals from './Animals';
import Birds from './Birds';
import Header from './Header';
import {animals,birds} from './animalsList';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

const Home = () => {
  return (
      <div className='landing_page'>
        <figure>
          <NavLink to="/animals">
          <h2>Animals</h2>
          <img src="https://images.unsplash.com/photo-1622227056993-6e7f88420855?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80" alt="hedgehog" />
          </NavLink>
        </figure>
        <figure>
          <NavLink to="/birds">
          <h2>Birds</h2>
          <img src="https://images.unsplash.com/photo-1605296448627-acb9a215ffb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80" alt="owl" />
          </NavLink>
        </figure>
      </div>
  )
}

const About = () => {
  return (
    <div>
      Refactoring animals app with react router :=
    </div>
  )
}

class App extends Component {

  state = {
    animals: animals,
    birds: birds,
    title: 'Vivarium',
    searchInput: ''
  };

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
      <BrowserRouter>
        <div>
          <Header title={this.state.title}/>
          <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/animals">Animals</NavLink>
            </li>
            <li>
              <NavLink to="/birds">Birds</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/animals" element={<Animals 
              data = {this.state.animals} 
              likesHandler = {this.likesHandler}
              removeHandler={this.removeHandler}
              searchHandler={this.searchHandler}
              searchInput={this.state.searchInput}
              />}
            />
            <Route path="/birds" element={<Birds
              data = {this.state.birds}
              likesHandler = {this.likesHandler}
              removeHandler={this.removeHandler}
              searchHandler={this.searchHandler}
              searchInput={this.state.searchInput}
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
