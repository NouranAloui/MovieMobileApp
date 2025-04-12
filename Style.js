import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
    },
    menuContainer: {
        flex: 1,
        backgroundColor: '#2C303A',
        padding: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    menuItem: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderBottomWidth: 0.7,
        borderBottomColor: '#ddd',
        alignItems: 'center',
    },
    menuItemL: {
        padding: 5,
        paddingVertical: 10,
        alignItems: 'center',
    },
    menuItemText: {
        fontSize: 16,
        color: '#F1E9DB'
    },
    delButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#66000F', // Primary color
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        transition: 'background-color 0.3s ease, transform 0.2s ease', // Transition effects
    },
    delButtonText: {
        color: '#F1E9DB', // Text color
        fontSize: 16,
        fontWeight: '500',
    },
    deleButtonDisabled: {
        backgroundColor: '#354045', // Gray color for disabled state
        elevation: 0, // No shadow for disabled state
        shadowOpacity: 0,
    },
    icon: {
        width: 32,
        marginVertical: 15,
        marginHorizontal: 5,
        padding: 1,
        borderRadius: 10,
        alignSelf: 'flex-end'
        , backgroundColor: '#2C303A'
    },
    mName: {
        color: '#F1E9DB'
        , flex: 1,
        height: 60,
        fontSize: 20,
        padding: 10,

    }
});
export default styles;