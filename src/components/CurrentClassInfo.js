import {observer} from "mobx-react";
import {HStack, Text, VStack} from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import {THEME_COLOR} from "../app/utils/Contraints";
const CurrentClassInfo = (props) => {
    return (
        <HStack justifyContent={'space-between'} alignItems={'center'} bgColor={THEME_COLOR} borderRadius={10} px={4} py={4} shadow={9}>
            <VStack space={.6} justifyContent={'center'} alignItems={'center'}>
                <Ionicons name={'calendar-outline'} size={20} color={'white'}></Ionicons>
                <Text color={'white'} fontSize={11}>Lớp</Text>
                <Text color={'white'} fontSize={13} fontWeight={'900'}>Python01</Text>
            </VStack>
            <VStack space={.6} justifyContent={'center'} alignItems={'center'}>
                <Ionicons name={'timer-outline'} size={20} color={'white'}></Ionicons>
                <Text color={'white'} fontSize={11}>Thời lượng</Text>
                <Text color={'white'} fontSize={13} fontWeight={'900'}>80 giờ</Text>
            </VStack>
            <VStack space={.6} justifyContent={'center'} alignItems={'center'}>
                <Ionicons name={'hourglass-outline'} size={20} color={'white'}></Ionicons>
                <Text color={'white'} fontSize={11}>Còn lại</Text>
                <Text color={'white'} fontSize={13} fontWeight={'900'}>50 giờ</Text>
            </VStack>
            <VStack space={.6} justifyContent={'center'} alignItems={'center'}>
                <Ionicons name={'warning-outline'} size={20} color={'white'}></Ionicons>
                <Text color={'white'} fontSize={11}>Số buổi vắng</Text>
                <Text color={'white'} fontSize={13} fontWeight={'900'}>3 buổi</Text>
            </VStack>
        </HStack>
    )
}
export default observer(CurrentClassInfo)