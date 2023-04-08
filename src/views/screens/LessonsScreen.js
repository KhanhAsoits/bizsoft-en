import {observer} from "mobx-react";
import WrapperLayout from "../layouts/WrapperLayout";
import SearchHeaderLayout from "../layouts/SearchHeaderLayout";
import LessonsGenerator from "../../components/LessonsGenerator";
import lessonModel from "../../models/LessonModel";

const LessonsScreen = (props) => { 
    
    return (
        <WrapperLayout>
            <SearchHeaderLayout query={lessonModel.query} setQuery={lessonModel.setQuery}> 
                <LessonsGenerator/>
            </SearchHeaderLayout>
        </WrapperLayout>

    )

}


export default observer(LessonsScreen)