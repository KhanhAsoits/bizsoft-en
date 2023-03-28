import {observer} from "mobx-react";
import {Avatar, Card, IconButton} from "react-native-paper";
import WrapperLayout from "../layouts/WrapperLayout";

const ScheduleScreen = (props) => {

    return (
        <WrapperLayout>
            <Card.Title
                title="schedule screen"
                subtitle="schedule screen ne"
                left={(props) => <Avatar.Icon {...props} icon="folder"/>}

            />
        </WrapperLayout>

    )
}
export default observer(ScheduleScreen)