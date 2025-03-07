import { Text, View, Pressable, StyleSheet, Platform } from "react-native";

function CategoryGridTile({title, color}) {
    return (
        <View style={styles.gridItem}>
            <Pressable 
            android_ripple={{color: '#ccc'}}
            style={({pressed}) => [
                styles.button, pressed ? styles.buttonPressed: null
                ]}>
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1, // it will get as much space as needed  
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4, // for android shadow
        backgroundColor: 'white', // we need to add bg-color so that we can see the shadow for ios 
        shadowColor: 'black', // for ios shadow
        shadowOpacity: 0.25, // for ios shadow
        shadowOffset: { width: 0, height: 2 }, // for ios shadow
        shadowRadius: 8, // for ios shadow
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        borderRadius: 8,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})