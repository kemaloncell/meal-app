import { Text, View, StyleSheet, Image, Pressable, Platform } from 'react-native'


function MealsItem({ title, imageUrl, duration, complexity, affordability }) {
    return(
        <View style={styles.mealItem}>
            <Pressable  
                    android_ripple={{color: '#ccc'}}
                    style={({pressed}) => [
                     pressed ? styles.buttonPressed: null ]}
                >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>

                    <View style={styles.details}>
                        <Text style={styles.detailsItem}>{duration}m</Text>
                        <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default MealsItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: 'black', // for ios shadow
        shadowOpacity: 0.25, // for ios shadow
        shadowOffset: { width: 0, height: 2 }, // for ios shadow
        shadowRadius: 8, // for ios shadow
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },

    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },

    image: {
        with: '100%',
        height: 200
    },

    title: {
       fontWeight: 'bold',
       textAlign: 'center',
       fontSize: 18,
       margin: 8
    },

    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },

    detailsItem: {
        marginHorizontal: 4, // left and right
        fontSize: 12,
    },

    buttonPressed: {
        opacity: 0.5
    },

})