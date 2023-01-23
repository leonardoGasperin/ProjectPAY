import { Button, SafeAreaView, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { commonStyles } from '../../styles/commonStyles';
import { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { API } from '../../api/api';

export function Home({navigation}) {
  const [user, setUser] = useState();
  const [id, setId] = useState(0);
  const isFocused = useIsFocused();
 
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
          }
        })
        .catch(() => {console.log("id invalida")})
  }

  function logout() {
    navigation.navigate("PAY");
  }

  useEffect(() => {
    if(isFocused){
      storage();
    }
    if(id != 0 && user == null){
     userHome()
    }
  }, [isFocused, id])
  return (
    <SafeAreaView style={{...commonStyles.container, ...commonStyles.userProfile}}>
      <Text style={{...commonStyles.registerTx, ...{alignSelf: "center"}}}>Dados da Conta</Text>
      {user != null && (
        <View style={{alignItems:"baseline", marginHorizontal: "5%"}}>
            <Text style={{color: "#f90"}}>Nome: {user.usrProfile.name}</Text>
            <Text style={{color: "#f90"}}>E-mail: {user.usrProfile.email}</Text>
            <Text style={{color: "#f90"}}>CPF: {user.usrProfile.cpf}</Text>
            <Text style={{color: "#f90"}}>RG: {user.usrProfile.rg}</Text>
            <Text style={{color: "#f90"}}>Telefone: {user.usrProfile.phoneN}</Text>
        </View>
      )}
      <View style={{...commonStyles.standartBtn, ...commonStyles.loginBtn}}>
        <Button title='Logout' color={"#F90"} onPress={logout}></Button>
      </View>
    </SafeAreaView>
  );
}