import React from "react";
import { View, ActivityIndicator, ScrollView, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import Articles from "../../Articles/Articles";

function HomeScreen({ route }) {
  const name = route.params.name;

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, [name]);

  const fetchData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${name}&apiKey=4b1c081a6b9a41179ece23ee0060ab28`
    );
    const data = await response.json();
    setData(data);
  };

  if (data === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
   <ScrollView style={styles.container}>
    {
      data && data?.articles?.map((item, index)=>{
        return(
          <View key={index}>
            <Articles item={item} />
          </View>
        )
      })
    }
   </ScrollView>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#EAE6DB',
    // paddingBottom:VerticalScale(30)
  }
})
export default HomeScreen;
