import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import StackRoutes from "../../routes/stack.routes.jsx";
import TabRoutes from "../../routes/tab.routes.jsx";
import DrawerRoutes from "../../routes/drawer.routes.jsx";


export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
      { <TabRoutes /> }
      { <DrawerRoutes /> }
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}