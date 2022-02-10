import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './Screens/HomeScreen'
import CreateLoanScreen from './Screens/CreateLoanScreen'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator >
        <Stack.Screen 
          name="First" component={HomeScreen} options={( {navigation}) => ({

            title:"Loan List",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate("New Loan")}>

              <Text>Create Loan</Text>  
              </TouchableOpacity>   
            )   })} />

        <Stack.Screen 
          name="New Loan" component={CreateLoanScreen} />

      </Stack.Navigator>

    </NavigationContainer>


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
