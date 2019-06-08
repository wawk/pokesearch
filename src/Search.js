import React, {Component} from 'react';
import {Text,View, StyleSheet} from 'react-native';
import {Header,Item,Icon,Input,Button} from 'native-base'
import PokeLoader from './PokeLoader';
import SearchBody from './SearchBody';


class Search extends Component {
    state= {
        pokeSearch: "",
        onCall: true,
        data: {},
    }
            searchPoke = () => {
                this.setState({onCall: true});
                let self = this;
                
                .then(function(response){
                    console.log(response.data);
                    self.setState({data: response.data});
                    self.setState({onCall: false});
                })
                .catch(function(error){
                    console.log(error);
                });
            }  

            renderBody = () =>{
                
                if (this.state.onCall){
                    return (
                        <PokeLoader/>
                    )
                }
                else {
                    return (
                        <SearchBody data={this.state.data}/>
                    )
                }
            }

    render () {
        return (
            <View style={styles.viewStyle}>
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

const styles = StyleSheet.create({
viewStyle: {
    
}
});

export default Search;