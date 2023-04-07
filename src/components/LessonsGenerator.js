import {observer} from "mobx-react";
import {Box, FlatList, HStack, Text, VStack} from "native-base";
import {CLASS_STATUS, DAYS, THEME_COLOR} from "../app/utils/Contraints";
import Ionicons from "react-native-vector-icons/Ionicons";
import {TouchableOpacity} from "react-native";
import {useMemo} from "react";

const LessonsGenerator = (props) => {

    const lessons = [
        {
            id: 1,
            name: 'Buổi 4: In school',
            desc: 'Nắm vững được kiến thức căn bản , làm bài tập rất nhanh, về nhà chỉ cần ôn tập lại...',
            time: '03-04-2023 14:30-15:30'
        },
        {
            id: 2,
            name: 'Buổi 3: My country',
            desc: 'Nắm vững được kiến thức căn bản , làm bài tập rất nhanh, về nhà chỉ cần ôn tập lại...',
            time: '03-04-2023 14:30-15:30'
        },
        {
            id: 3,
            name: 'Buổi 2: My Family',
            desc: 'Nắm vững được kiến thức căn bản , làm bài tập rất nhanh, về nhà chỉ cần ôn tập lại...',
            time: '03-04-2023 14:30-15:30'
        },
        {
            id: 4,
            name: 'Buổi 1: Greeting',
            desc: 'Nắm vững được kiến thức căn bản , làm bài tập rất nhanh, về nhà chỉ cần ôn tập lại...',
            time: '03-04-2023 14:30-15:30'
        },
        {
            id: 5,
            name: 'Buổi 0: Overview',
            desc: 'Nắm vững được kiến thức căn bản , làm bài tập rất nhanh, về nhà chỉ cần ôn tập lại...',
            time: '03-04-2023 14:30-15:30'
        },

    ]
    const Lesson = ({item: lesson, index}) => {
        return (
            <VStack space={1} my={2} py={4} px={4} shadow={9} bgColor={'white'} borderRadius={12}>
                <Text fontSize={18} fontWeight={'bold'} color={'black'}>{lesson?.name}</Text>
                <Text fontSize={14} color={'gray.300'}>{lesson?.time}</Text>
                <Text fontSize={14} numberOfLines={2} color={'black'}>{lesson?.desc}</Text>

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
    const renderLessonMemo = useMemo(() => Lesson, [lessons])

    return (
        <FlatList showsVerticalScrollIndicator={false} _contentContainerStyle={{paddingX: 21, paddingY: 30}}
                  data={lessons} renderItem={renderLessonMemo}
                  keyExtractor={item => item?.id}/>
    )
}
export default observer(LessonsGenerator)