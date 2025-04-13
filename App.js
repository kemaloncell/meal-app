import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CategoriesScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#3f2f25' }
        }}>
          <Stack.Screen 
          name='MealsCategories' 
          component={CategoriesScreen}
          options={{
            title: 'All Categories'
          }}
           />
          <Stack.Screen 
          name='MealsOverview' 
          component={MealsOverviewScreen} 
          options={{
            title: 'Meals Overview'
          }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
