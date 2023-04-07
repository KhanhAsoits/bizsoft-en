import {observer} from "mobx-react";
import {Box, HStack, Text, VStack} from "native-base";
import {TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {SW, THEME_COLOR} from "../app/utils/Contraints";

const OptionsComponent = (props) => {
    const options = [
        {
            id: 1, title: 'Thời khóa biểu', icon: 'calendar-outline'
        },
        {id: 2, title: "Giáo viên", icon: 'person-outline'},
        {id: 3, title: 'Giáo trình', icon: 'book-outline'},
        {id: 4, title: 'Nhật ký lớp học', icon: 'time-outline'},
        {id: 5, title: 'Các lớp học', icon: 'grid-outline'},
        {id: 6, title: 'Các khóa học', icon: 'shield-checkmark-outline'},
        {id: 7, title: 'Thống kê điểm danh', icon: 'checkbox-outline'},
        {id: 8, title: 'Tổng quan học phí', icon: 'documents-outline'},

    ]
    const Option = ({optionData, index}) => {
        const color = 'white';
        const size = 30;
        return (
            <TouchableOpacity style={{marginHorizontal: 12, marginVertical: 4}} key={optionData?.id}>
                <VStack space={1} justifyContent={'space-between'} alignItems={'center'}>
                    <Box shadow={9} width={(SW - 21) / 6} height={(SW - 21) / 6} bgColor={THEME_COLOR} borderRadius={50}
                         justifyContent={'center'} alignItems={'center'}>
                        <Ionicons name={optionData?.icon} color={color} size={size}></Ionicons>
                    </Box>
                    <Text textAlign={'center'} color={THEME_COLOR} numberOfLines={3} height={39} width={(SW - 21) / 6}
                          fontSize={13}>{optionData?.title}</Text>
                </VStack>
            </TouchableOpacity>
        )
    }
    return (
        <HStack mt={4} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
            {options.map((option, index) => {
                return <Option key={index.toString()} optionData={option}></Option>
            })}
        </HStack>
    )
}
export default observer(OptionsComponent)