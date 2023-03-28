import {observer} from "mobx-react";
import {Provider as PaperProvider} from 'react-native-paper'
import AppRoutes from "./src/app/navs/AppRoutes";

function App() {
    return (
        <PaperProvider>
            <AppRoutes></AppRoutes>
        </PaperProvider>
    );
}

export default observer(App)