import {observer} from "mobx-react";
import {FlatList, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import mainBg from '../../assets/images/welcome_bg.png'
import {SH, SW} from "../../app/utils/Contraints";
import {SliderIndicator} from "../../components/SliderIndicator";
import {useCallback, useLayoutEffect, useRef, useState} from "react";
import {Button} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";

const WelcomeScreen = (props) => {
    const sliderRef = useRef(null)
    const sliderData = [
        {id: 1, bg: mainBg},
        {id: 2, bg: mainBg},
        {id: 3, bg: mainBg}
    ]
    const Nav = useNavigation();
    const renderSlideItem = ({item: slideItem, index}) => {
        return (
            <ImageBackground source={slideItem.bg} style={styles.fillScreen}
                             resizeMode={'cover'}>

            </ImageBackground>
        )
    }

    const [activeSlide, setActiveSlide] = useState(sliderData[0]?.id || 1)

    const handleListChanged = useCallback(({viewableItems, changed}) => {
        let item = viewableItems[0]
        if (item?.item) {
            setActiveSlide(item.item.id)
        }
    }, [])

    const handeGoToLogin = () => {
        Nav.navigate('login')
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <FlatList ref={sliderRef} pagingEnabled={true} showsHorizontalScrollIndicator={false}
                      keyExtractor={(item) => item.id}
                      style={{flex: 1}}
                      data={sliderData} renderItem={renderSlideItem}
                      horizontal={true}
                      onViewableItemsChanged={handleListChanged}
            />
            <SliderIndicator list={sliderData} listRef={sliderRef} activeIndex={activeSlide}/>
            <Button style={{marginHorizontal: 12, ...styles.btnStarted}} mode="contained" onPress={handeGoToLogin}>
                Get Started
            </Button>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    btnStarted: {
        backgroundColor: '#4E74F9',
        paddingVertical: 4,
        borderRadius: 8,
        marginBottom: 20,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    fillScreen: {
        width: SW,
        height: SH,
    },
    dot: {
        width: 12,
        height: 12,
        backgroundColor: 'black',
        borderRadius: 50
    }
})
export default observer(WelcomeScreen)