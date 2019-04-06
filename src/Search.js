import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {Header,Item,Icon,Input,Button} from 'native-base'
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';
import axios from 'axios';

class Search extends Component {
    state= {
        pokeSearch: "",
        onCall: true,
    }
            searchPoke = () => {
                this.setState({onCall: true});
                axios.get("http://pokeapi.co/api/v2/pokemon/"+this.state.pokeSearch.toLowerCase())
                .then(function(response){
                    console.log(response.data);
                })
            }  

            renderBody = () =>{
                
                if (this.state.onCall){
                    return (
                        <PokeLoader/>
                    )
                }
                else {
                    return (
                        <SearchBody/>
                    )
                }
            }

    render () {
        return (
            <View>
               <Header
               searchBar
               rounded
               >
               <Item>
                   <Icon name="ios-search" onPress={this.searchPoke}/>
                   <Input
               value={this.state.pokeSearch}
               placeholder = "Search Pokemon"
               onChangeText={(pokeSearch) => this.setState({pokeSearch})}
               />
               </Item>
               

               </Header>

               {this.renderBody()}
            </View>
        );

    }
}


export default Search;