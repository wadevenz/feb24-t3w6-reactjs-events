import React from "react";

class PokemonCard extends React.Component {
    constructor(){
        super();

        this.state = {
            pokemonName: "",
            pokemonImage: ""
        }
    }

    async componentDidMount() {
        let randomNumber = Math.ceil(Math.random() * 1025);
        let response = await fetch(`http://pokeapi.co/api/v2/pokemon/${randomNumber}`);
        let data = await response.json();

        this.setState({
            pokemonName: data.name,
            pokemonImage: data.sprites.front_default
        });

    }

    render(){

    // if (this.state.pokemonName){
    //        return(
    //             <div className="pokemonName">
    //                 <h1>{this.state.pokemonName}</h1>
    //                 <img src={this.state.pokemonImage} />
    //             </div>
    //         );
    //     } else {
    //         return(
    //             <div className="pokemonCard">
    //                 <h1>Loading...</h1>
    //             </div>
    //         );
    //     }
   
        return(
            <div className="pokemonCard">
                {this.state.pokemonName && this.state.pokemonImage ?
                <>
                    <h1>{this.state.pokemonName}</h1>
                    <img src={this.state.pokemonImage}/>
                </>
                :
                    <h1>Loading...</h1>
                }  
            </div>
        )
    }
}

export default PokemonCard;