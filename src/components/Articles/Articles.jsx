import React from 'react'
import { View,Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { HorizontalScale, ModerateScale, VerticalScale } from '../../talons/Matrix'

function Articles({ item }) {
  return (
    <View style={styles.container}>
        <View style={styles.item_container}>
        <View style={styles.image_Container}>
            <Image style={styles.image} source={item?.urlToImage?{uri : item?.urlToImage }:require('../../Assets/header_logo/Image_star.jpg')}/>
        </View>
        <View>
            <View style={styles.title}>
                <Text style={styles.title_text}>{item.title}</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.desc_text}>{item.description? item.description:'Read full article at the main website..'}</Text>
            </View>
            <View style={styles.description}>
              <View style={styles.timing_cont}>
                <Text style={styles.publidh_at}>At : </Text>
              <Text style={styles.publish_timing}>{item.publishedAt? item.publishedAt:'NAN'}</Text>
              </View>
                <TouchableOpacity>
                <Text style={styles.desc_text}>Read More...</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{ 
        flex:1,
     },
    image_Container:{
        padding:ModerateScale(8),
        paddingBottom:0
    },
    image:{
        height:VerticalScale(320),
        width:HorizontalScale(355),
        borderRadius:ModerateScale(10),
    },
    item_container:{
        marginLeft:HorizontalScale(5),
        marginRight:HorizontalScale(5),
        marginTop:VerticalScale(5),
        marginBottom:VerticalScale(10),
        alignItems:"center",
        backgroundColor:"white",
        borderRadius:ModerateScale(10),
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: ModerateScale(3),
        elevation: ModerateScale(20),
        paddingBottom:VerticalScale(10)
    },
    title:{
        padding:ModerateScale(5)
    },
    description:{
        padding:ModerateScale(5)
    },
    title_text:{
        fontSize:ModerateScale(18),
        padding:ModerateScale(2),
        fontFamily:"Roboto-Regular"
    },
    desc_text:{
        fontSize:ModerateScale(15),
        padding:ModerateScale(2),
        fontFamily:"Roboto-Light"
    },
    publish_timing:{
        fontSize:ModerateScale(17),
        padding:ModerateScale(2),
        color:'gray',
        fontFamily:"Roboto-Light",
        fontSize:ModerateScale(14),
    },
    timing_cont:{
        flexDirection:"row",
        alignItems:"center"
    },
    publidh_at:{
        fontFamily:"Roboto-Regular",
        fontSize:ModerateScale(15),
        marginLeft:HorizontalScale(5)
    },
    
})

export default Articles