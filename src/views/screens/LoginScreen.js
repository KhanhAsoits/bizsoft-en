import {observer} from "mobx-react";
import WrapperLayout from "../layouts/WrapperLayout";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    AndroidToast,
    TextInput,
} from "react-native";
import {ActivityIndicator, IconButton, MD3Colors, Text} from "react-native-paper";
import {useToast, VStack} from "native-base";
import {SW} from "../../app/utils/Contraints";
import {useLayoutEffect, useState} from "react";
import authModel from "../../models/AuthModel";
import Toast from "react-native-toast-message";
import {useNavigation} from "@react-navigation/native";

const LoginScreen = (props) => {
    const nav = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSetEmail = (txt) => {
        setEmail(txt)
    }
    const handleSetPassword = (txt) => {
        setPassword(txt)
    }

    const handleShowToast = () => {
        Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Email or password invalid'
        })
    }
    const handleLogin = async () => {
        if (email.trim() === "") {
            Toast.show({
                type: "error",
                text1: "Warning",
                text2: 'Email can not null'
            })
            return;
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            Toast.show({
                type: "error",
                text1: "Warning",
                text2: 'Email format invalid'
            })
            return;
        }
        if (password.trim() === "") {
            Toast.show({
                type: "error",
                text1: "Warning",
                text2: 'Password can not null'
            })
            return;
        }
        await authModel.Login(email, password, handleShowToast)
    }
    useLayoutEffect(() => {

        nav.addListener('beforeRemove', () => {
            if (authModel.isFetching) {
                return false;

            }
            return true;
        })

    }, [nav])
    return (
        <WrapperLayout isAvoidKeyBoard={true}>
            <View style={styles.container}>
                <Text variant={"headlineLarge"} style={{textAlign: 'center', fontWeight: 700, marginVertical: 8}}>
                    Log in
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
                    <TextInput value={email} style={styles.inputController} onChangeText={(text) => {
                        handleSetEmail(text)
                    }} placeholder={'Example@gmail.com'}
                               keyboardType={'email-address'}/>
                    <TextInput style={styles.inputController} onChangeText={(text) => {
                        handleSetPassword(text)
                    }} placeholder={'*********'} secureTextEntry={true}/>
                </VStack>
                <Text style={{fontWeight: 700, marginVertical: 8}}>Forgot password?</Text>

                <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
                    {authModel.isFetching ?
                        <ActivityIndicator color={'white'} size={'small'} animating={true}/> :
                        <Text style={{color: "white", fontWeight: 700, textAlign: 'center'}}>Log in</Text>
                    }
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
export default observer(LoginScreen)