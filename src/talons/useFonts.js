import * as Font from 'expo-font';

export default useFonts =async()=>{
    await Font.loadAsync({
        'Big-Caslon':require('../Assets/Fonts/Big-Caslon.ttf'),
        'Roboto-Regular':require('../Assets/Fonts/Roboto-Regular.ttf'),
        'Roboto-Light':require('../Assets/Fonts/Roboto-Light.ttf'),
    })
}