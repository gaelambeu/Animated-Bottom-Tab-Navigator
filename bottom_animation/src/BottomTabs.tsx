import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Products from "./screens/Products";


const  Tab = createBottomTabNavigator();

export default function BottomTabs(){
    return (
        <Tab.Navigator>
            <Tab.Group>
                <Tab.Screen 
                    options={{tabBarLabel: 'Home'}} 
                    name="Products" 
                    component={Products}
                />
                
            </Tab.Group>
        </Tab.Navigator>
    )
}