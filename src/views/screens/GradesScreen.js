import {observer} from "mobx-react";
import {Avatar, Card, IconButton} from "react-native-paper";
import WrapperLayout from "../layouts/WrapperLayout";
import SearchHeaderLayout from "../layouts/SearchHeaderLayout";
import GradeModel from "../../models/GradeModel";
import GradeGenerator from "../../components/GradeGenerator";
import {Text} from "native-base";

const GradesScreen = (props) => {

    return (
        <WrapperLayout isAvoidKeyBoard={true}>
            <SearchHeaderLayout query={GradeModel.query} setQuery={GradeModel.setQuery}>
                <GradeGenerator/>
            </SearchHeaderLayout>
        </WrapperLayout>

    )
}
export default observer(GradesScreen)