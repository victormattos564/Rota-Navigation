import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default TabRoutes;