import LottieView from 'lottie-react-native';
import { Button, View, SafeAreaView } from 'react-native';
import { commonStyles } from '../../styles/commonStyles';
import anim from '../../JSON/animations/InitialPage.json'

export function Initial({navigation}) {
    function registerNav() {
        navigation.navigate("RegisterRoute");
    }
    function loginNav() {
        navigation.navigate("Login");
    }

    return (
        <SafeAreaView style={commonStyles.container}>
            <LottieView autoPlay source={anim} style={commonStyles.initalPgAnimation}/>
            <View style={commonStyles.btnContainer}>
                <View  style={commonStyles.standartBtn}>
                    <Button title='Abri conta gratuita' color={"#f90"} onPress={registerNav}/>
                </View>
                <View  style={commonStyles.standartBtn}>
                    <Button title='Fazer login' color={"#f90"} onPress={loginNav} />
                </View>
            </View>
        </SafeAreaView>
    );
}