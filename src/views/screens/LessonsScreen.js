import {observer} from "mobx-react";
import {Avatar, Card, IconButton} from "react-native-paper";
import WrapperLayout from "../layouts/WrapperLayout";
import SearchHeaderLayout from "../layouts/SearchHeaderLayout";
import LessonsGenerator from "../../components/LessonsGenerator";

const LessonsScreen = (props) => {
    return (
        <WrapperLayout>
            <SearchHeaderLayout>
                <LessonsGenerator/>
            </SearchHeaderLayout>
        </WrapperLayout>

    )

}


export default observer(LessonsScreen)