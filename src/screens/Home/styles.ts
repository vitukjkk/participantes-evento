import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      padding: 35,
    },
    eventName: {
      color: 'white',
      fontSize: 30,
    },
    eventDate: {
      color: '#898989',
      fontSize: 20,
    },
    input: {
        flex: 1,
        color: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'black',
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        marginTop: 20,
        marginRight: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        marginTop: 20,
        width: 50,
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 10,
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    listEmptyParticipants: {
        color: 'white',
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
    }
});