import {Card, Avatar, IconButton} from "react-native-paper";
import {observer} from "mobx-react";
import WrapperLayout from "../layouts/WrapperLayout";
import {View} from "react-native";

const HomeScreen = (props) => {

    return (
        <WrapperLayout>
            <View>
                <Card.Title
                    title="home screen"
                    subtitle="home screen ne"
                    left={(props) => <Avatar.Icon {...props} icon="folder"/>}
                />
            </View>

        </WrapperLayout>
    )

}
export default observer(HomeScreen)