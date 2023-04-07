import {observer} from "mobx-react";
import {KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, View} from "react-native";
import {SW} from "../../app/utils/Contraints";
import {NativeBaseProvider} from "native-base";

const WrapperLayout = (props) => {

    // check void keyboard

    if (props?.isAvoidKeyBoard) {
        return (
            <SafeAreaView style={{flex: 1}}>
                <NativeBaseProvider>
                    <KeyboardAvoidingView style={styles.container}
                                          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                        {props.children}
                    </KeyboardAvoidingView>
                </NativeBaseProvider>
            </SafeAreaView>

        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <NativeBaseProvider>
                {props.children}
            </NativeBaseProvider>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        width: SW,
        backgroundColor: 'transparent',
        flex: 1
    }
})
export default observer(WrapperLayout)