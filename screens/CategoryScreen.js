import { FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'


// we wrote this out of the CategoriesScreen() because it has not to render when component re-create
// and renderItem that is provided by FlatList send a paramter which is itemData
function renderCategoryItem(itemData) {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} /> // sort of think
}

function CategoriesScreen() {
    return <FlatList 
    data={CATEGORIES} 
    keyExtractor={(item) => item.id} 
    renderItem={renderCategoryItem} // which component should be render? = we wrote this for this renderCategoryItem
    />
}


export default CategoriesScreen