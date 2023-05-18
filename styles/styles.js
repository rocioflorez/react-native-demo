import Colors from "../constants/colors";

const styles = {
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    fullName: {
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.primary500,
        marginHorizontal: 20
    },
    currentDate: {
        marginVertical: 3,
        fontWeight: 'bold'
    },
    userContainer: {
        backgroundColor: Colors.primary500,
        flex: 1,
        alignItems: 'center'
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
    userDetailCard: {
        width: 300,
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        borderRadius: 5,
        alignItems: 'center',
        elevation: 4,
        shadowColor: Colors.dark,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    userDetail: {
        alignItems: 'center'
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
    quantityContainer: {
        padding: 3,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 3,
        borderColor: Colors.primary500,
        borderWidth: 2
    },
    quantityInput: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        padding: 5,
        width: 50,
        height: 30
    },
    searchContainer: {
        marginVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    searchInput: {
        height: 40,
        backgroundColor: 'white',
        width: 300,
        margin: 20,
        padding: 5,
        borderRadius: 5
    },
    
}

export default styles;