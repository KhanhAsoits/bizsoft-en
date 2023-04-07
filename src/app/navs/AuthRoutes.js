import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import LoginScreen from "../../views/screens/LoginScreen";
import RegisterScreen from "../../views/screens/RegisterScreen";
import WelcomeScreen from "../../views/screens/WelcomeScreen";

const AuthRoutes = (props) => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'welcome'} options={{headerShown: false}} component={WelcomeScreen}></Stack.Screen>
                <Stack.Screen name={'login'} options={{headerShown: false}} component={LoginScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default AuthRoutes