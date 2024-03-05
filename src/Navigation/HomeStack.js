import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import HomeScreen from "../components/Screens/Home/HomeScreen.jsx";
import CustomDrawerContent from "../components/Screens/CustomDrawer/CustomDrawerContent.jsx";

const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Drawer.Navigator
      initialRouteName="Latest-News"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: "#f8f8ff",
        },
        drawerStyle: {
          width: "75%",
        },
        headerLeft: () => (
          <>
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={styles.headerLeft}
            >
              <Image source={require("../Assets/Header_Icon/bars/bars.png")} />
            </TouchableOpacity>
          </>
        ),
      })}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Latest-News"
        options={({ navigation }) => ({
          title: "Latest News",
        //   headerTitle: () => (
        //     <View style={styles.logoContainer}>
        //       <Image
        //         source={require("../Assets/header_logo/Image_star.jpg")}
        //         style={styles.logo1}
        //       />
        //       <Image
        //         source={require("../Assets/header_logo/Image_star.jpg")}
        //         style={styles.logo2}
        //       />
        //       <Image
        //         source={require("../Assets/header_logo/Image_star.jpg")}
        //         style={styles.logo3}
        //       />
        //     </View>
        //   ),
        })}
        initialParams={{ name: "general" }}
      >
        {(props) => (
          <HomeScreen {...props} category={{ category_name: "general" }} />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Business" initialParams={{ name: "business" }}
              options={({ navigation }) => ({
                title: "Business",
             })}>
        {(props) => (
          <HomeScreen {...props} />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Entertainment" initialParams={{ name: "entertainment" }}
      options={({ navigation }) => ({
        title: "Entertainment",
     })}
      >
        {(props) => (
          <HomeScreen {...props} />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Health" initialParams={{ name: "health" }}
         options={({ navigation }) => ({
            title: "Health",
         })}>
        {(props) => (
          <HomeScreen {...props} />
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Science" initialParams={{ name: "science" }}
         options={({ navigation }) => ({
            title: "Science",
         })}>
        {(props) => (
          <HomeScreen {...props}/>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Sports" initialParams={{ name: "sports" }}
         options={({ navigation }) => ({
            title: "Sports",
         })}>
        {(props) => (
          <HomeScreen {...props}/>
        )}
      </Drawer.Screen>
      <Drawer.Screen name="Technology" initialParams={{ name: "technology" }}
         options={({ navigation }) => ({
            title: "Technology",
         })}>
        {(props) => (
          <HomeScreen {...props}/>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  logoContainer: {
    flex: 1,
    height: 50,
    paddingLeft: 21,
    width: Dimensions.get("window").width * 0.75,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo1: {
    height: 50,
    width: 70,
    left: 20,
  },
  logo2: {
    height: 38,
    width: 70,
    bottom: 10,
  },
  logo3: {
    height: 50,
    width: 70,
    right: 20,
  },
});

export default HomeStack;
