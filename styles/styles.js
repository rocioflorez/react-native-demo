import Colors from "../constants/colors";

const styles = {
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    userContainer: {
        backgroundColor: Colors.primary500
    },
    userCard: {
        backgroundColor: Colors.light,
        width: 300,
        flexDirection: 'row',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 4,
        shadowColor: Colors.dark,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    image: { 
        width: 50, 
        height: 50, 
        borderRadius: 25, 
        marginRight: 10 
    },
    textContainer: {
        width: '80%',
        flex: 1,
        justifyContent: 'flex-end'
    },
    text: {
        color: Colors.accent500,
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'right'
    },
    fullName: {
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.primary500,
        margin: 20
    },
    
}

export default styles;