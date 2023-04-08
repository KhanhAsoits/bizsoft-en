import {observer} from "mobx-react";
import {Box, HStack, VStack} from "native-base";
import {THEME_COLOR} from "../app/utils/Contraints";
import Ionicons from "react-native-vector-icons/Ionicons";
import {TextInput} from "react-native";

const SearchHeader = ({flex, query, setQuery}) => {
    console.log(query,setQuery)
    return (
        <VStack bgColor={THEME_COLOR} px={4} py={6} flex={flex} justifyContent={'flex-end'}>
            <HStack justifyContent={'flex-start'} alignItems={'center'} space={2} px={3} py={2}
                    bgColor={'rgba(0,0,0,.25)'} borderRadius={8}>
                <Ionicons name={'search-outline'} color={'white'} size={20}/>
                <TextInput defaultValue={query} onChangeText={text => {setQuery(text)}}
                           style={{fontSize: 16,paddingVertical:8, color: 'rgba(255,255,255,.8)'}}
                           placeholderTextColor={'rgba(255,255,255,.8)'}
                           placeholder={'Tìm kiếm lớp học (tên bài,ngày...)'}/>
            </HStack>
        </VStack>
    )
}
export default observer(SearchHeader)