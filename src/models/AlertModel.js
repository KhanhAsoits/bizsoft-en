import {Alert} from "react-native";

class AlertModel {
    alert(msg) {
        Alert.alert("Notification", msg)
    }
}

const alertModel = new AlertModel();
export default alertModel;