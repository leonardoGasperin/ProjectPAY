import { useState } from 'react';
import { Button, Text, TextInput, TouchableOpacity, View, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API } from '../../api/api';
import { commonStyles } from '../../styles/commonStyles';

export function Login({navigation}) {
    const [user, setUser] = useState("");
    const [psw, setPsw] = useState("");
    const [users, setUsers] = useState([]);

    function resetStates() {
        setUsers("");
        setPsw("");
    }
    
    function registerNav() {
        resetStates();
        navigation.navigate("Register");
    }

    async function storage(item) {
        const jsonItem = JSON.stringify(item)
        try{
            await AsyncStorage.setItem("@id", jsonItem);
            resetStates();
            navigation.navigate("PAYTabNav");
        }
        catch (e){
            console.log("não foi possivel armazenar o usuario");
        }
    }

    function cheker() {
        let userChk = 0;
        let pswChk = 0;
        let id = 0;
        if(users != []){
            users.map((item) => {
                if(item.usrProfile.cpf == user && userChk == 0){
                    userChk++;
                }
                if(item.usrProfile.psw == psw && pswChk == 0){
                    pswChk++;
                }
                if((userChk > 0 && pswChk > 0) && (item.usrProfile.psw == psw && item.usrProfile.cpf == user)){
                    id = item.id;
                }
            });
        }
        if(userChk == 0){
            alert("CPF não encontrado, verifique seus dados.")
        }else if(pswChk == 0){
            alert("Senha invalida.")
        }else{
            storage(id);
        }
    }

    function login() {
        fetch(API + "/user")
        .then(async (response) => {
            const data = await response.json();
            if(data != ""){
                setUsers(data);
            }
        })
        .catch(() => console.log("erro ao procurar usuario."))
        .finally(() => cheker())
    }
  return (
    <KeyboardAvoidingView style={commonStyles.container} 
    behavior={(Platform.OS === "android" || Platform.OS === "android") ? "height" : "height"}>
        <Text style={commonStyles.logo}>PAY</Text>
        <SafeAreaView style={commonStyles.inpTextContainer}>
            <Text style={commonStyles.label}>Usuario:</Text>
            <TextInput
                style={commonStyles.standartInpText}
                placeholder='CPF somente numeros'
                value={user}
                onChangeText={setUser}
                keyboardType="number-pad"
                maxLength={11}
            />
            <Text style={commonStyles.label}>Senha:</Text>
            <TextInput
                style={commonStyles.standartInpText}
                placeholder='Entre com sua senha'
                value={psw}
                onChangeText={setPsw}
                secureTextEntry={true}
            />
            <View style={commonStyles.standartBtn}>
                <Button title='Logar' color="#f90" onPress={login}/>
            </View>
            <TouchableOpacity onPress={registerNav}>
                <Text style={{color:"#f90"}}>Abrir conta gratuita</Text>
            </TouchableOpacity>
        </SafeAreaView>
    </KeyboardAvoidingView>
  );
}