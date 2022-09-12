import { Image, Text, Button , View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cat from "./src/components/Cat";
import About from './src/components/About';
import DetailsScreen from './src/components/DetailsScreen'
import HomeScreen from './src/components/HomeScreen'
import NastedCat from './src/components/NastedCat';

const Stack = createNativeStackNavigator();


function LogoTitle() {
  return (
    <View>
    
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/favicon.png')}
    />
    <Text>
      Home Page
    </Text>
    </View>
    
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <Stack.Screen name="Home" component={HomeScreen} 
          options={{
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="NastedCat" component={NastedCat} />
        <Stack.Screen name="Cat" component={Cat} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}

