import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Loginscreen from "./src/app";
export default function App() {
  return (<Loginscreen />);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnalert: {
    backgroundColor: 'red',
    color: 'white',
    padding: 10,
    borderRadius: 5
  },
});
