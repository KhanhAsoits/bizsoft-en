import {observer} from "mobx-react";
import {KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, View} from "react-native";
import {SW} from "../../app/utils/Contraints";
import {PaddingTranslator} from "../../app/utils/PlatformTranslator";

const WrapperLayout = (props) => {

    // check void keyboard

    if (props?.isAvoidKeyBoard) {
        return (
            <SafeAreaView style={{flex: 1}}>
                <KeyboardAvoidingView style={styles.container}
                                      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>{props.children}
                </KeyboardAvoidingView>
            </SafeAreaView>

        )
    }

    return (
        <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        width: SW,
        paddingVertical: PaddingTranslator(20),
        paddingHorizontal: PaddingTranslator(8),
        backgroundColor: 'transparent',
        flex: 1
    }
})
export default observer(WrapperLayout)