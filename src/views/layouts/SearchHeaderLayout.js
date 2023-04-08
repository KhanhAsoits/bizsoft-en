import {observer} from "mobx-react";
import {Box} from "native-base";
import SearchHeader from "../../components/SearchHeader";

const SearchHeaderLayout = (props) => {
    return (
        <Box flex={1} bgColor={'white'}>
            <SearchHeader query={props.query} setQuery={props.setQuery} flex={.1}/>
            <Box flex={1}>
                {props.children}
            </Box>
        </Box>
    )
}
export default observer(SearchHeaderLayout)