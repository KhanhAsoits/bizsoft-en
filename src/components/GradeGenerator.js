import {observer} from "mobx-react";
import {Box, FlatList, HStack, Text, VStack} from "native-base";
import {CLASS_STATUS, DAYS, THEME_COLOR} from "../app/utils/Contraints";
import {useMemo} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {TouchableOpacity} from "react-native";

const GradeGenerator = (props) => {
    const grades = [
        {
            id: 1,
            code: 'C001',
            status: CLASS_STATUS.DURATION,
            name: 'Chương trình học : Kinder',
            teacher: {
                name: 'Giáo viên : Jessie Thao'
            },
            schedules: [DAYS.T2, DAYS.T4, DAYS.T6]
        },
        {
            id: 2,
            code: 'Z001',
            status: CLASS_STATUS.END,
            name: 'Chương trình học : Flyer',
            teacher: {
                name: 'Giáo viên : Đỗ Mỹ Linh'
            },
            schedules: [DAYS.T2, DAYS.T3, DAYS.T4, DAYS.T7]
        },
        {
            id: 3,
            code: 'English for kids',
            status: CLASS_STATUS.PAUSE,
            name: 'Chương trình học : Everybody Up',
            teacher: {
                name: 'Giáo viên : Jessie Thao'
            },
            schedules: [DAYS.T4, DAYS.T6]
        },
        {
            id: 4,
            code: 'Mover Start',
            status: CLASS_STATUS.DURATION,
            name: 'Chương trình học : Mover',
            teacher: {
                name: 'Giáo viên : Jessie Thao'
            },
            schedules: [DAYS.T7, DAYS.CN]
        },
    ]
    const Schedules = ({schedules}) => {
        return (
            <HStack justifyContent={'center'} alignItems={'center'} space={1}>
                {schedules.map((schedule, index) => {
                    let day = 'T2';
                    switch (schedule) {
                        case DAYS.T3:
                            day = 'T3';
                            break;
                        case DAYS.T4:
                            day = 'T4';
                            break;
                        case DAYS.T5:
                            day = 'T5';
                            break;
                        case DAYS.T6:
                            day = 'T6';
                            break;
                        case DAYS.T7:
                            day = 'T7';
                            break;
                        case DAYS.CN:
                            day = 'CN';
                            break;

                    }
                    return (
                        <Box key={index.toString()} py={2.5} px={3} borderRadius={50} bgColor={THEME_COLOR}
                             color={'white'}>
                            <Text color={'white'}>{day}</Text>

                        </Box>
                    )
                })}
            </HStack>
        )
    }
    const Grade = ({item: grade, index}) => {
        return (
            <VStack space={1} my={2} py={4} px={4} shadow={9} bgColor={'white'} borderRadius={12}>
                <HStack justifyContent={'space-between'} alignItems={'center'}>
                    <Text fontSize={18} fontWeight={'bold'} color={'black'}>{grade?.code}</Text>
                    <Schedules schedules={grade.schedules}/>

                </HStack>
                <HStack justifyContent={'flex-start'} alignItems={'center'} space={1}>
                    <Ionicons name={'logo-firebase'} size={20}
                              color={grade.status === CLASS_STATUS.DURATION ? THEME_COLOR : 'black'}/>
                    <Text
                        fontSize={15}>{grade.status === CLASS_STATUS.DURATION ? 'Đang học' : grade.status === CLASS_STATUS.END ? 'Đã kết thúc' : 'Đang bảo lưu'}</Text>
                </HStack>
                <HStack justifyContent={'flex-start'} alignItems={'center'} space={1}>
                    <Ionicons name={'book-outline'} size={20} color={'black'}/>
                    <Text
                        fontSize={15}>{grade.name}</Text>
                </HStack>
                <HStack justifyContent={'flex-start'} alignItems={'center'} space={1}>
                    <Ionicons name={'person-outline'} size={20} color={'black'}/>
                    <Text
                        fontSize={15}>{grade.teacher.name}</Text>
                </HStack>
                <TouchableOpacity>
                    <HStack space={1} alignItems={'center'} justifyContent={'flex-end'}>
                        <Ionicons name={'document-outline'} color={THEME_COLOR} size={20}/>
                        <Text color={THEME_COLOR} fontSize={15}>Chi tiết</Text>
                        <Ionicons name={'play-forward'} color={THEME_COLOR} size={12}/>
                    </HStack>
                </TouchableOpacity>
            </VStack>
        )
    }
    const renderGradeMemo = useMemo(() => Grade, [grades])
    return (
        <FlatList showsVerticalScrollIndicator={false} _contentContainerStyle={{paddingX: 21, paddingY: 30}}
                  data={grades} renderItem={renderGradeMemo}
                  keyExtractor={item => item?.id}/>
    )
}
export default observer(GradeGenerator)