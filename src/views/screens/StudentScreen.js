import {observer} from "mobx-react";
import {Avatar, Card, IconButton} from "react-native-paper";
import WrapperLayout from "../layouts/WrapperLayout";

const StudentScreen = (props) => {
    return (
        <WrapperLayout>
            <Card.Title
                title="student screen"
                subtitle="student screen ne"
                left={(props) => <Avatar.Icon {...props} icon="folder"/>}

            />
        </WrapperLayout>

    )

}


export default observer(StudentScreen)