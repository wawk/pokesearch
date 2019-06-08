import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet, Image, ImageBackground,  Dimensions} from 'react-native';
import {ListItem,List} from 'native-base';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
class SearchBody extends Component {
    render () {
        let pokemon = this.props.data;
        if(!pokemon){
            return <View/>
        }
        return (
            <ImageBackground style={styles.backgroundImage}
            source={{uri:"http://pokemongolive.com/img/posts/raids_loading.png"}}>
            <ScrollView style={styles.scrollable}>
                <Text style={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
                <View style = {styles.viewStyle}>
                    <Image
                        source={{uri: pokemon.sprites.front_default}}
                        style={styles.img}/>
                    
                </View>
                <View style={styles.info}>
                    <ListItem itemDivider>
                    <Text style={{fontWeight: 'bold'}}>Size</Text>

                    </ListItem>
                    <ListItem>
                    <Text>Weight - {pokemon.weight}kg</Text>

                    </ListItem>
                    <ListItem>
                    <Text>Height - {pokemon.height/10}m</Text>

                    </ListItem>
                    <ListItem itemDivider>
                    <Text style={{fontWeight: 'bold'}}>Abilities</Text>

                    </ListItem>
                    <List
                    dataArray={pokemon.abilities}
                    renderRow={(item) =>
                        <ListItem>
                    <Text>{item.ability.name}</Text>

                    </ListItem>
                    }
                    >

                    </List>
                </View>
            </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        
        resizeMode: 'cover',
        height: height,
        width: width

    },
    header:{
        
        fontSize: 30,
        color: 'red',
        textAlign: 'center',


    },
    scrollable:{
        
    },
    viewStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    },
    img: {
        height: 200,
        width: 200,
        justifyContent:'center',
        alignItems: 'center',

    },
    info:{
        flex: 1,
        backgroundColor: 'white',
        opacity: 0.8
    },
   
});

export default SearchBody;