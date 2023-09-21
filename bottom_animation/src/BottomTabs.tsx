import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Products from "./screens/Products";
import Cart from "./screens/Cart";
import Favourites from "./screens/Favourites";
import Profile from "./screens/Profile";
import CustomBottomTab from "./components/BottomTabs/CustomBottomTab";


const  Tab = createBottomTabNavigator();

export default function BottomTabs(){
    return (
        <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
            <Tab.Group screenOptions={{
                headerShown: false
            }}>
                <Tab.Screen 
                    options={{tabBarLabel: 'Home'}} 
                    name="Products" 
                    component={Products}
                />

                <Tab.Screen 
                    options={{tabBarLabel: 'Cart'}} 
                    name="Cart" 
                    component={Cart}
                />

                <Tab.Screen 
                    options={{tabBarLabel: 'Favourites'}} 
                    name="Favourites" 
                    component={Favourites}
                />

                <Tab.Screen 
                    options={{tabBarLabel: 'Profile'}} 
                    name="Profile" 
                    component={Profile}
                />
            </Tab.Group>
        </Tab.Navigator>
    )
}