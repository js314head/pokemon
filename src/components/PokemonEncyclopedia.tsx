import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import PokemonList from './PokemonList';
import MyPokemon from './MyPokemon';
import Menu from './Menu';
import Footer from './Footer';
import './PokemonEncyclopedia.scss';

const PokemonEncyclopedia = () => {
  // const renderMyPokemons = () => {
  //   const myPokemons: any = [];
  //   if (!localStorage.getItem('mypokemon')) {
  //     return null;
  //   } else {
  //     const storageData: any = localStorage.getItem('mypokemon');
  //     const collection = JSON.parse(storageData);
  //     let myPokemons: any = [];
  //     collection.forEach((id: any) => {
  //       const item = pokemons.filter((item: any) => item.id === id);
  //       myPokemons.push(item);
  //     });
  //     setMyPokemons(myPokemons);
  //   }
  // };

  return (
    <div className="PokemonEncyclopedia">
      <Menu />
      <Switch>
        <Route exact path="/" component={PokemonList} />
        <Route path="/my" component={MyPokemon} />
      </Switch>
      <Footer />
    </div>
  );
};

export default PokemonEncyclopedia;
