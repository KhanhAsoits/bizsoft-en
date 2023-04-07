import {observer} from "mobx-react";
import {Box, FlatList, HStack, Image, Text, VStack} from "native-base";
import {THEME_COLOR} from "../app/utils/Contraints";
import {useMemo} from "react";
import avatar from "../assets/images/avatar.jpg";
import {TouchableOpacity} from "react-native";

const FeedComponent = (props) => {
    const feeds = [
        {
            id: 1,
            title: 'Bizsoft xin chào mọi người',
            publisher: {name: 'admin', time: '12-08-2022 16:17'},
            desc: 'Laptrinhluon.com là đơn vị dạy lập trình chuyên sâu , chuyên ngànhNgôn ngữ cơ bản : C++'
        },
        {
            id: 2,
            title: 'Bizsoft xin chào mọi người',
            publisher: {name: 'admin', time: '12-08-2022 16:17'},
            desc: 'Laptrinhluon.com là đơn vị dạy lập trình chuyên sâu , chuyên ngànhNgôn ngữ cơ bản : C++'
        },
        {
            id: 3,
            title: 'Bizsoft xin chào mọi người',
            publisher: {name: 'admin', time: '12-08-2022 16:17'},
            desc: 'Laptrinhluon.com là đơn vị dạy lập trình chuyên sâu , chuyên ngànhNgôn ngữ cơ bản : C++'
        },
        {
            id: 4,
            title: 'Bizsoft xin chào mọi người',
            publisher: {name: 'admin', time: '12-08-2022 16:17'},
            desc: 'Laptrinhluon.com là đơn vị dạy lập trình chuyên sâu , chuyên ngànhNgôn ngữ cơ bản : C++'
        },
        {
            id: 5,
            title: 'Bizsoft xin chào mọi người',
            publisher: {name: 'admin', time: '12-08-2022 16:17'},
            desc: 'Laptrinhluon.com là đơn vị dạy lập trình chuyên sâu , chuyên ngànhNgôn ngữ cơ bản : C++'
        },
        {
            id: 6,
            title: 'Bizsoft xin chào mọi người',
            publisher: {name: 'admin', time: '12-08-2022 16:17'},
            desc: 'Laptrinhluon.com là đơn vị dạy lập trình chuyên sâu , chuyên ngànhNgôn ngữ cơ bản : C++'
        },
        {
            id: 7,
            title: 'Bizsoft xin chào mọi người',
            publisher: {name: 'admin', time: '12-08-2022 16:17'},
            desc: 'Laptrinhluon.com là đơn vị dạy lập trình chuyên sâu , chuyên ngànhNgôn ngữ cơ bản : C++'
        },
        {
            id: 8,
            title: 'Bizsoft xin chào mọi người',
            publisher: {name: 'admin', time: '12-08-2022 16:17'},
            desc: 'Laptrinhluon.com là đơn vị dạy lập trình chuyên sâu , chuyên ngànhNgôn ngữ cơ bản : C++'
        },
        {
            id: 9,
            title: 'Bizsoft xin chào mọi người',
            publisher: {name: 'admin', time: '12-08-2022 16:17'},
            desc: 'Laptrinhluon.com là đơn vị dạy lập trình chuyên sâu , chuyên ngànhNgôn ngữ cơ bản : C++'
        }
    ]

    const Feed = ({item: feed, index}) => {
        return (
            <TouchableOpacity activeOpacity={.9}>
                <HStack>
                    <Image borderWidth={1} borderColor={'black'} borderRadius={12} width={70} height={81} source={avatar} alt={'avatar'}/>
                    <VStack px={2}>
                        <Text w={'55%'} color={'black'} fontWeight={'700'}>{feed?.title}</Text>
                        <Text fontSize={12} color={'gray.400'}>{feed?.publisher?.name} | {feed?.publisher?.time}</Text>
                        <Text w={'55%'} numberOfLines={2} fontSize={13} color={'gray.700'}>{feed?.desc}</Text>
                    </VStack>
                </HStack>
            </TouchableOpacity>
        )
    }
    return (
        <VStack px={1} my={6} space={2}>
            <HStack justifyContent={'space-between'} alignItems={'center'}>
                <Text color={'black'} fontWeight={'600'}>Bảng tin</Text>
                <TouchableOpacity>
                    <Text color={THEME_COLOR} fontWeight={'600'}>Xem thêm</Text>
                </TouchableOpacity>
            </HStack>
            {feeds.map((feed, index) => {
                return <Feed key={index.toString()} item={feed} index={index}/>
            })}
        </VStack>
    )
}
export default observer(FeedComponent)