import {  DrawerContentScrollView, DrawerItem, } from "@react-navigation/drawer";
import { StyleSheet, Text } from "react-native";
import { HorizontalScale, VerticalScale, ModerateScale } from "../../../talons/Matrix";

const CustomDrawerContent = (props) => {
//   console.log(props.descriptors)
    return (
      <DrawerContentScrollView {...props}>
        {Object.entries(props.descriptors).map(([key, descriptor], index) => {
          const focused = index === props.state.index;
          return (
            <DrawerItem
              key={key}
              label={() => (
                <Text
                  style={focused ? styles.drawerLabelFocused : styles.drawerLabel}
                >
                  {descriptor.options.title}
                </Text>
              )}
              onPress={() =>
                descriptor.navigation.navigate(descriptor.route.name)
              }
              style={[
                styles.drawerItem,
                focused ? styles.drawerItemFocused : null,
              ]}
            />
          );
        })}
      </DrawerContentScrollView>
    );
  }
const styles = StyleSheet.create({
    headerLeft: {
        marginLeft: HorizontalScale(15),
      },
      IconStyle: {
        margin: ModerateScale(7),
      },
      headerRight: {
        flexDirection: "row",
      },
      headerTitle: {
        color: "white",
        fontSize: ModerateScale(18),
        fontWeight: "500",
      },
      drawerLabel: {
        fontSize: ModerateScale(14),
        fontFamily:"Roboto-Regular"
      },
      drawerLabelFocused: {
        fontSize: ModerateScale(14),
        color: "white",
        fontWeight: "500",
        fontFamily:"Roboto-Regular"
      },
      drawerItem: {
        height: VerticalScale(50),
        justifyContent: "center",
      },
      drawerItemFocused: {
        backgroundColor: "#364040",
      },
})
export default CustomDrawerContent;