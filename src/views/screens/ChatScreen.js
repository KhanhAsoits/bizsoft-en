import {observer} from "mobx-react";
import {Avatar, Card, IconButton} from "react-native-paper";
import WrapperLayout from "../layouts/WrapperLayout";

const ChatScreen = (props) => {

    return (
        <WrapperLayout>
            <Card.Title
                title="chat screen"
                subtitle="chat screen ne"
                left={(props) => <Avatar.Icon {...props} icon="folder"/>}
            />
        </WrapperLayout>

    )
}
export default observer(ChatScreen)