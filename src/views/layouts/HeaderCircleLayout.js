import {observer} from "mobx-react";
import {Box} from "native-base";
import CircleHeader from "../../components/CircleHeader";
import {THEME_COLOR} from "../../app/utils/Contraints";

const HeaderCircleLayout = (props) => {
    return (
        <Box flex={1} backgroundColor={"white"}>
            <CircleHeader flex={1} bg={THEME_COLOR}></CircleHeader>
            <Box flex={5} bgColor={'white'}>
                {props.children}
            </Box>
        </Box>
    )
}
export default observer(HeaderCircleLayout)