import { StyleSheet } from 'react-native';

export const Colors  = {
    red: '#ff0000',
    yellow: '#ffff00'
}

export const Styles = StyleSheet.create({
    title: {
        color: Colors.yellow,
        textAlign: "center", 
        fontSize: 34,
        fontWeight: 'bold',
        margin: 20,
    },
    largeText: {
        color: 'white',
        textAlign: "center", 
        fontSize: 34,
        margin: 30,
    },
    smallText: {
        color: 'white',
        fontSize: 16,
        textAlign: "center"
    },
    dashboardContainer: {
        flex: 1,
        backgroundColor: '#000'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#000'
    },
    button: {
        color: 'white',
        margin: 20,
        alignItems: 'center',
        backgroundColor: '#000',
        borderColor: Colors.red,
        borderWidth: 3,

        shadowColor: Colors.red,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 25,
        elevation: 1,
    },
    buttonText: {
        padding: 7,
        fontSize: 18,
        fontWeight: "bold",
        color: 'white'
    },
    error: {
        textAlign: "center", 
        margin: 30,
        fontSize: 24,
        color: Colors.red,
    },
    itemContainer: {
        padding: 10,
    },
    itemHeader: {
        fontWeight: "bold",
        color: Colors.yellow,
        fontSize: 24,
    },
    itemBody: {
        color: Colors.yellow,
        fontSize: 16,
    }
})
