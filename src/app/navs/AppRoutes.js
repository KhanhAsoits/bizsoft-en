import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {NavigationContainer} from '@react-navigation/native'
import {observer} from "mobx-react";
import HomeScreen from "../../views/screens/HomeScreen";
import ScheduleScreen from "../../views/screens/GradesScreen";
import ChatScreen from "../../views/screens/ChatScreen";
import StudentScreen from "../../views/screens/LessonsScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const AppRoutes = (props) => {

    const BottomTab = createMaterialBottomTabNavigator();

    const screenOptions = ({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
            let iconName;
            switch (route.name) {
                case 'dashboard':
                    iconName = 'home-outline'
                    break;
                case 'grades':
                    iconName = 'calendar-outline'
                    break;
                case 'chat':
                    iconName = 'chatbox-outline'
                    break;
                case 'classes':
                    iconName = 'person-outline'
            }

            return <Ionicons name={iconName} size={24} color={'black'}/>;
        },
    })
    return (
        <NavigationContainer>
            <BottomTab.Navigator
                screenOptions={screenOptions}
            >
                <BottomTab.Screen name={'dashboard'}
                                  component={HomeScreen}></BottomTab.Screen>
                <BottomTab.Screen name={'grades'} component={ScheduleScreen}></BottomTab.Screen>
                <BottomTab.Screen name={'chat'} component={ChatScreen}></BottomTab.Screen>
                <BottomTab.Screen name={'classes'} component={StudentScreen}></BottomTab.Screen>
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}

export default observer(AppRoutes)