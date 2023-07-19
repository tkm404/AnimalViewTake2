import React, { useEffect, useState } from "react";
import { View, SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
// import { TouchableHighlight } from "react-native-web";
// import { TouchableOpacity } from "react-native-web";

function AnimalControl() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animalsList, setAnimalsList] = useState([]);

  useEffect(() => {
    fetch(`https://localhost:7138/api/animals/`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          return response.json()
        }
      })
      .then((jsonifiedResponse) => {
        setAnimalsList(jsonifiedResponse);
        console.log(jsonifiedResponse)
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoaded(true);
      });
  }, [])

  const sortedAnimals = animalsList.sort((a, b) => a.Name.localeCompare(b.Name));

  if (error) {
    return <Text>Error: {error}</Text>
  } else if (!isLoaded) {
    return <Text>...Loading...</Text>
  } else {
    return (
      <View>
        <SafeAreaView> 
        <Text style={styles.title}>Animals in the Shelter</Text>
        <FlatList
        data={sortedAnimals}
        keyExtractor={animal => animal.AnimalId}
        renderItem={({item: animal}) => (
          <View>
            <Text style={styles.animalName}>{animal.Name}</Text>
            <Text>Species: {animal.Species}</Text>
            <Text>Age: {animal.Age}</Text>
          </View>
          
        )
        }
        />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
title: {
  fontSize: 34,
  fontWeight: 'bold',
  alignItems: 'center',
  justifyContent: 'center',
},
animalName: {
  fontSize: 24,
  fontWeight: 'bold'
}
})

export default AnimalControl;