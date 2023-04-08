import {observer} from "mobx-react";
import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import {IconButton, Text} from "react-native-paper";
import {VStack} from "native-base";
import WrapperLayout from "../layouts/WrapperLayout";
import {SW} from "../../app/utils/Contraints";
import {useNavigation} from "@react-navigation/native";

const RegisterScreen = (props) => {
    const Nav = useNavigation();

    return (
        <WrapperLayout isAvoidKeyBoard={true}>
            <View style={styles.container}>
                <Text variant={"headlineLarge"} style={{textAlign: 'center', fontWeight: 700, marginVertical: 8}}>
                    Register
                </Text>
                <Text style={{color: 'gray'}}>Login with social</Text>
                <View style={styles.flexRowContainer}>
                    <IconButton
                        style={styles.btnSocial}
                        icon="facebook"
                        iconColor={'white'}
                        size={30}
                        onPress={() => console.log('Pressed')}
                    />
                    <IconButton
                        style={styles.btnSocial}
                        icon="google"
                        iconColor={'white'}
                        size={30}
                        onPress={() => console.log('Pressed')}
                    />
                    <IconButton
                        style={styles.btnSocial}
                        icon="instagram"
                        iconColor={'white'}
                        size={30}
                        onPress={() => console.log('Pressed')}
                    />
                </View>
                <VStack justifyContent={'center'} alignItems={'center'}>
                    <TextInput style={styles.inputController} placeholder={'Example@gmail.com'}
                               keyboardType={'email-address'}/>
                    <TextInput style={styles.inputController} placeholder={'*********'} secureTextEntry={true}/>
                    <TextInput style={styles.inputController} placeholder={'*********'} secureTextEntry={true}/>

                </VStack>
                <Text style={{fontWeight: 700, marginVertical: 8}}>Forgot password?</Text>

                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={{color: "white", fontWeight: 700, textAlign: 'center'}}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    Nav.navigate("login")
                }} style={{...styles.btnLogin, backgroundColor: 'transparent'}}>
                    <Text style={{color: "gray", fontWeight: 700, textAlign: 'center'}}>Log in</Text>
                </TouchableOpacity>
            </View>
        </WrapperLayout>
    )
}

const styles = StyleSheet.create({
    btnLogin: {
        width: SW - 100,
        paddingVertical: 12,
        borderRadius: 12,

        backgroundColor: "#E3562A"
    },
    inputController: {
        width: SW - 100,
        marginVertical: 6,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: 'black'
    },
    btnSocial: {
        backgroundColor: '#65AAEA',
        borderRadius: 12
    },
    flexRowContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center'
    },
    backgroundImage: {
        alignSelf: "center",
        resizeMode: 'cover'
    }
})
export default observer(RegisterScreen)