import React, { Component } from 'react';
import SearchAndSort from './SearchAndSort';
import Pokemon from './Pokemon';
import Loader from './Loader';
import axios from 'axios';
import './PokemonList.scss';
import { stringify } from 'querystring';

interface State {
  pokemons: any;
  dataLoaded: boolean;
  filter: string;
}

class PokemonList extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      pokemons: [],
      dataLoaded: false,
      filter: '',
    };
  }

  componentDidMount() {
    const pokemons: any = [];
    axios('https://pokeapi.co/api/v2/pokemon?limit=200"').then((respond: any) =>
      respond.data.results.forEach((pokemon: any) => {
        axios(`${pokemon.url}`).then((res) => pokemons.push(res.data));
      })
    );
    setTimeout(() => {
      this.setState({ pokemons: pokemons, dataLoaded: true });
    }, 800);
  }

  changeFilter = (str: string) => {
    this.setState({ filter: str });
  };

  addToMyPokemon = (id: string) => {
    if (!localStorage.getItem('mypokemon')) {
      localStorage.setItem('mypokemon', JSON.stringify([id]));
    } else {
      const storageData: any = localStorage.getItem('mypokemon');
      const collection = JSON.parse(storageData);
      collection.push(id);
      localStorage.setItem('mypokemon', JSON.stringify(collection));
    }
    window.location.reload(false);
  };

  removeFromMyPokemon = (id: string) => {
    const storageData: any = localStorage.getItem('mypokemon');
    const collection = JSON.parse(storageData);
    console.log(storageData);
    collection.filter((pokemon: any) => pokemon !== id);
    localStorage.setItem('mypokemon', JSON.stringify(collection));
    window.location.reload(false);
  };

  renderPokemons = () => {
    let pokemonsForRender: any[] = [];
    if (this.state.pokemons) {
      this.state.pokemons.forEach((pokemon: any) => {
        pokemonsForRender.push(
          <Pokemon
            name={pokemon.name}
            type={pokemon.types[0].type.name}
            img={pokemon.sprites.front_default}
            id={pokemon.id}
            key={pokemon.id}
            height={pokemon.height}
            weight={pokemon.weight}
            exp={pokemon.base_experience}
            addToMyPokemon={this.addToMyPokemon}
            removeFromMyPokemon={this.removeFromMyPokemon}
            stats={pokemon.stats}
            moves={pokemon.moves}
          />
        );
      });
    }

    if (this.state.filter) {
      pokemonsForRender = pokemonsForRender.filter((item: any) =>
        item.props.name.toLowerCase().includes(this.state.filter.toLowerCase())
      );
    }

    return pokemonsForRender;
  };

  render() {
    return (
      <div className="PokemonList">
        <SearchAndSort changeFilter={this.changeFilter} />
        <div className="PokemonList-render">
          {this.state.dataLoaded ? (
            <div className="PokemonList-render-pokemons">
              {this.renderPokemons()}
            </div>
          ) : (
            <div className="PokemonList-render-loader">
              <Loader />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PokemonList;
