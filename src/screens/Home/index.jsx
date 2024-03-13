import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import StackRoutes from "../../routes/stack.routes";
import TabRoutes from "../../routes/tab.routes";
import DrawerRoutes from "../../routes/drawer.routes";

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