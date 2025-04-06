import { FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'


const numColumns = 2

// you can use "navigation which is paramter of categoriesScreen when is called with Stack from the app.js but 
// you can't use this inside the child function suchas CategoryGridTile so you have to pass as a prop or call inside the
// CategoryGridTile component wihs useNavigation
function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            })
        }
        
    return (
        <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color} 
            onPress={pressHandler}
            />
        );
}
    return <FlatList 
    data={CATEGORIES} 
    keyExtractor={(item) => item.id} 
    renderItem={renderCategoryItem} // which component should be render? = we wrote this for this renderCategoryItem
    numColumns={numColumns}
    />
}


export default CategoriesScreen