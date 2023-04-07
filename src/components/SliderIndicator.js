import {StyleSheet, TouchableOpacity, View} from "react-native";
import {SH, SW} from "../app/utils/Contraints";

export const SliderIndicator = ({listRef, activeIndex, list}) => {

    const handleScrollToElement = (index) => {
        if (listRef) {
            const ref = listRef.current;
            ref.scrollToItem({animated: true, item: list[index - 1]})
        }
    }

    return (
        <View style={styles.indicatorContainer}>
            {new Array(list.length).fill(1).map((val, index) => {
                return (
                    <TouchableOpacity key={index.toString()} onPress={() => {
                        handleScrollToElement(index + 1)
                    }}>
                        <View
                            style={{...styles.dot, backgroundColor: activeIndex === index + 1 ? '#8a5eff' : '#9d9d9d'}}
                        ></View>
                    </TouchableOpacity>

                )
            })}
        </View>
    )

}
const styles = StyleSheet.create({
    indicatorContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        width: SW,
        backgroundColor: 'transparent',
        position: 'absolute',
        height: 40,
        zIndex: 999,
        bottom: SH / 5
    },
    dot: {
        width: 16,
        height: 16,
        marginHorizontal: 6,
        borderRadius: 50,

    }
})