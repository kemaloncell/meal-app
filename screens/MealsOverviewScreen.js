import { View, Text, StyleSheet } from 'react-native'

import { MEALS } from '../data/dummy-data'

// we can clearly use navigation or route... prop because it is registered as "Screen" inside the app.js component
function MealsOverviewScreen({ route }) {
    const catId = route.params.categoryId
    return(
        <>
        <View style={styles.container}>
            <Text>Meals category - {catId} </Text>
        </View>
        </>
    )

}
export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})