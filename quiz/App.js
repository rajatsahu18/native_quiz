import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import MyStack from './src/navigation';

export default function App() {
  return (
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingHorizontal: 16,
  },
});
