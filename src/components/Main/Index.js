import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { View,StyleSheet, ActivityIndicator} from "react-native";
import { useEffect, useState } from 'react';
import useFonts from '../../talons/useFonts';
import HomeStack from '../../Navigation/HomeStack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
})
export default function Index() {
  const [fontloaded, setFontloaded] = useState(false);
  useEffect(() => {
    async function fetchFonts() {
      await useFonts();
      setFontloaded(true);
    }
    fetchFonts();
  }, []);
  if (!fontloaded) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
   <NavigationContainer>
    <HomeStack/>
   </NavigationContainer>
  );
}
