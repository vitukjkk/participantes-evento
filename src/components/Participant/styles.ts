import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        color: 'white',
        fontSize: 17,
        width: '85%',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        padding: 10,
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginTop: 20,
        width: 50,
        fontSize: 20,
    },
    button: {
        borderRadius: 10,
    }
});