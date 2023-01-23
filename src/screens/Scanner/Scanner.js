import { BarCodeScanner } from 'expo-barcode-scanner';
import LottieView from 'lottie-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';
import { commonStyles } from '../../styles/commonStyles';
import anim from "../../JSON/animations/Scanner.json"
import { API } from '../../api/api';

export function Scanner({navigation}) {
    const [scanned, setScanned] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);
    const [user, setUser] = useState();
    const [id, setId] = useState(0);
    const [billId, setBillId] = useState(0);
   
    async function storage() {
        try {
          const jsonValue = await AsyncStorage.getItem('@id');
          jsonValue != null ? setId(JSON.parse(jsonValue)) : null;
          }catch(e) {
          console.log("nao foi possivel encontrar o usuario!")
        }
      }
      const userHome = () => {
        console.log(id)
        fetch(API + "/user/" + id)
            .then(async (response) => {
              const data = await response.json();
              if(data != null){
                setUser(data);
                console.log(user.usrProfile.name)
              }
            })
            .catch(() => {console.log("id invalida")})
      }

    function detailsBillNav() {
        navigation.navigate("DetailsBill", {billId: billId, id: id, scanned: scanned})
    }
  
    useEffect(() => {
            setScanned(true);
            storage()
      }, []);

      useEffect(() => {
        if(id != 0)
            userHome()
      }, [id]);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };
        getBarCodeScannerPermissions();
        
        console.log("status")

      }, []);
      
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setBillId(data);
        alert(`Código de barras tipo ${type} código ${data} foi escaneado!`);
      };
    
      if(hasPermission === null){
        return <Text style={{textAlign: "center", marginVertical: "50%"}}>Requer permição de uso da camera</Text>;
      }
      if(hasPermission === false){
        return <Text style={{textAlign: "center", marginVertical: "50%"}}>Sem acesso a camera</Text>;
    }
  return (
    <SafeAreaView style={{...commonStyles.container, ...{justifyContent: "space-between"}}}>
    <View style={commonStyles.scannerTopView}>
        <View>
            {user != null && <Text style={commonStyles.scannerTopTx}>Olá, {user.usrProfile.name}</Text>}
        </View>
        <View style={commonStyles.scannerTopDivisor}></View>
        
    </View>
        {!scanned && (<BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{...StyleSheet.absoluteFillObject, ...{marginTop: "19%"}}}
            barCodeTypes={["code39"]}
        >
            <LottieView autoPlay source={anim}/>
        </BarCodeScanner>)}
        <View style={{marginVertical: "70%"}}>
            <View style={{marginVertical: 15}}>
                {scanned && <Button title={'Escanear'} onPress={() => setScanned(false)} color="#f90"/>}
            </View>
           {scanned && <Button title={'Detalhes do boleto'} onPress={detailsBillNav} color="#f90"/>}
        </View>
    </SafeAreaView>
  );
}