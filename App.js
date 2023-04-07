import {observer} from "mobx-react";
import {Button, Provider as PaperProvider} from 'react-native-paper'
import AppRoutes from "./src/app/navs/AppRoutes";
import authModel from "./src/models/AuthModel";
import AuthRoutes from "./src/app/navs/AuthRoutes";
import Toast from "react-native-toast-message";
import {LogBox, View} from "react-native";
import {useLayoutEffect} from "react";

function App() {
    useLayoutEffect(() => {
    }, [authModel.isLogin])
    LogBox.ignoreAllLogs(true)
    return (
        <PaperProvider>
            {authModel.isLogin ?
                <AppRoutes></AppRoutes>
                :
                <AuthRoutes></AuthRoutes>
            }
            <Toast/>
        </PaperProvider>
    );
}

export default observer(App)