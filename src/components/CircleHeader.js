import {observer} from "mobx-react";
import {Box, HStack, Image, Text, VStack} from "native-base";
import avatar from '../assets/images/avatar.jpg'
import Ionicons from "react-native-vector-icons/Ionicons";
import {TouchableOpacity} from "react-native";

const CircleHeader = ({flex, bg}) => {
    return (
        <Box shadow={9} mb={4} paddingTop={8} paddingBottom={5} paddingX={4} flex={1} bgColor={bg}
             borderBottomRightRadius={30} borderBottomLeftRadius={30}>
            <HStack justifyContent={'flex-start'} space={4} alignItems={'center'}>
                <Box borderRadius={100} borderWidth={4} overflow={'hidden'} borderColor={'white'}>
                    <Image resizeMode={'cover'} source={avatar} width={90} height={90} alt={'image'}/>
                </Box>
                <VStack space={1} justifyContent={'flex-start'} height={'100%'} pt={2} alignItems={'flex-start'}>
                    <Text color={'white'} fontSize={20}>Xin chào , <Text fontWeight={'700'}>Lê Thúy Hiền</Text></Text>
                    <HStack justifyContent={'flex-start'} alignItems={'center'} space={2}>
                        <TouchableOpacity>
                            <Ionicons name={'chatbubble-ellipses'} color={'white'} size={25}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name={'notifications'} color={'white'} size={25}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name={'power-outline'} color={'white'} size={25}/>
                        </TouchableOpacity>
                    </HStack>
                </VStack>
            </HStack>
        </Box>

    )
}
export default observer(CircleHeader)