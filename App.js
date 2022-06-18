import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ResetPassword from './screens/ResetPassword';
import ToDo from './screens/ToDo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageAccount from './screens/ManageAccount';
import UpdateD from './screens/Update';
import Search from './screens/SB';
// import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { sendEmailVerification, signOut} from 'firebase/auth';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { auth, db} from "./firebase";
import { View, Button, Text, Modal, SafeAreaView, ActivityIndicator, FlatList, TextInput, Linking,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// import iconFont from './react-native-vector-icons/Fonts/FontAwesome.ttf';
// import Update from './screens/UpdateTodo';
// **MaterialCommunityIcons**

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//   //  **Ionicons**

// import Icon from 'react-native-vector-icons/Ionicons';

//   //  **FontAwesome5**

// import Icon from 'react-native-vector-icons/FontAwesome5';
import { Icon } from 'react-native-elements';
const Stack = createNativeStackNavigator();

export default function App({ navigation}) {
  // const navigation = useNavigation();
  let signOutUser = () => {
    alert("hii");
    try {
      signOut(auth);
      navigate('Login')
    } catch (e) {
      alert(e)
        console.log(e);
    }
}
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}} />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}} />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}} />
        <Stack.Screen
          name="ManageAccount"
          component={ManageAccount}
          options={{headerShown: false}} />
        <Stack.Screen
          name="ToDo"
          component={ToDo}
          options={({navigation}) => ({
            title: 'Notes App',
            headerRight: () => (
              <View style={{flexDirection:"row"}}>
              <AntDesign name="logout" size={24} color="black" style={{marginLeft: 20}} onPress={() => {signOut(auth), alert("loggedout"),navigation.navigate('Login')}}/>
              <MaterialIcons name="account-circle" size={24} color="black" style={{marginLeft: 20}} onPress={()=> {navigation.navigate('ManageAccount')}}/> 
              </View>
            )
          })}
          />  
        <Stack.Screen
          name="UpdateD"
          component={UpdateD}
          options={{headerShown: false}} /> 
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}