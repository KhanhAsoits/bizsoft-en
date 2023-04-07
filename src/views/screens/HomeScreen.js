import {Card, Avatar, IconButton} from "react-native-paper";
import {observer} from "mobx-react";
import WrapperLayout from "../layouts/WrapperLayout";
import {View} from "react-native";
import HeaderCircleLayout from "../layouts/HeaderCircleLayout";
import {Box, ScrollView, VStack} from "native-base";
import CurrentClassInfo from "../../components/CurrentClassInfo";
import OptionsComponent from "../../components/OptionsComponent";
import FeedComponent from "../../components/FeedComponent";

const HomeScreen = (props) => {

    return (
        <WrapperLayout>
            <HeaderCircleLayout>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack paddingX={21} my={4}>
                        <CurrentClassInfo/>
                        <OptionsComponent/>
                        <FeedComponent/>
                    </VStack>
                </ScrollView>
            </HeaderCircleLayout>
        </WrapperLayout>
    )

}
export default observer(HomeScreen)