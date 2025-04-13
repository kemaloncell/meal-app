import { View, StyleSheet, FlatList } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealsItem from '../components/MealsItem'

// we can clearly use navigation or route... prop because it is registered as "Screen" inside the app.js component
function MealsOverviewScreen({ route }) {
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter(mealItem => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    })

    function renderMealItem(itemData) {
        const item = itemData.item
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            affordability: item.affordability,
            complexity: item.complexity 
        }
        return <MealsItem {...mealItemProps} />
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    )

}
export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})