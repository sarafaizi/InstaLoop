import { View } from "react-native";
import { UserList } from "./UserList";
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from "./Navigator";


export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
