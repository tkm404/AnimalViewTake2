import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AnimalControl from './AnimalControl';
// import JustToProveIt from './JustToProveIt';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text> Are we good?</Text>
      <StatusBar style="auto" />

      <AnimalControl />
            {/* <JustToProveIt /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
