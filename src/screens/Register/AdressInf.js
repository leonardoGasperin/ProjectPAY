import { useEffect, useState } from 'react';
import { Text, View, KeyboardAvoidingView, TextInput, ScrollView, Button, Alert } from 'react-native';
import { API, ViaCep } from '../../api/api';
import { Picker } from '@react-native-picker/picker';
import { commonStyles } from '../../styles/commonStyles';

export function AdressInf({navigation, route}) {
    const {usrProfile} = route.params;

    const [cep, setCep] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");
    const [dist, setDist] = useState("");
    const [adNum, setAdNum] = useState("");
    const [complement, setComplement] = useState("");

    function dateBillNav(){
        if(cep == ""){
            alert("Campo de CEP completo, se enconta vazio");
        }else if(cep.length < 8){
            alert("Digite um CEP valido");
        }else if(street == ""){
            alert("Campo Rua, se enconta vazio");
        }else if(city == ""){
            alert("Campo Cidade, se enconta vazio");
        }else if(uf == ""){
            alert("Selecione um estado");
        }else if(dist == ""){
            alert("Campo Bairro, se enconta vazio");
        }else if(adNum == ""){
            alert("Campo Nº da residência, se enconta vazio");
        }else{
            navigation.navigate("DateBill", {
                usrProfile: {
                    name: usrProfile.name,
                    phoneN: usrProfile.phoneN,
                    email: usrProfile.email,
                    rg: usrProfile.rg,
                    cpf: usrProfile.cpf,
                    psw: usrProfile.psw,
                },
                usrAdress: {
                    cep: cep,
                    street: street,
                    city: city,
                    uf: uf,
                    dist: dist,
                    adNum: adNum,
                    complement: complement,
                }
            })
        }
    }

    function autoFill(){
        fetch(ViaCep + cep + "/json/")
        .then(async(response) => {
            const data = await response.json();
            if(data != null){
                setStreet(data.logradouro);
                setDist(data.bairro);
                setCity(data.localidade);
                setUf(data.uf);
            }
        })
        .catch(() => {
            console.log("erro ao checar cep");
            alert("CEP não encontrado")
        })
    }

    function backNav() {
        resetStates();
        navigation.navigate("PAY");
    }

    useEffect(() => {
        if(cep.length == 8){
          autoFill();
        }
      }, [cep])
  return (
    <KeyboardAvoidingView style={{...commonStyles.container, ...{justifyContent: "space-between"}}} 
    behavior={(Platform.OS === "android" || Platform.OS === "android") ? "height" : "height"}>
        <Text style={commonStyles.registerTx}>Endereço</Text>
        <ScrollView style={{width: "100%"}}>
            <View style={commonStyles.inpTextContainer}>
                <Text style={commonStyles.label}>CEP:</Text>
                <TextInput
                        style={commonStyles.standartInpText}
                        placeholder='Digite um CEP'
                        value={cep}
                        onChangeText={setCep}
                        maxLength={8}
                        keyboardType="number-pad"
                />
                <Text style={commonStyles.label}>Rua:</Text>
                <TextInput
                        style={commonStyles.standartInpText}
                        placeholder='Adicione sua rua'
                        value={street}
                        onChangeText={setStreet}
                />
                <Text style={commonStyles.label}>Cidade:</Text>
                <TextInput
                        style={commonStyles.standartInpText}
                        placeholder='Digite o nome da sua cidade'
                        value={city}
                        onChangeText={setCity}
                />
                <Text style={commonStyles.label}>Nº da residência:</Text>
                <TextInput
                        style={commonStyles.standartInpText}
                        placeholder='Digite o numero da residencia'
                        value={adNum}
                        onChangeText={setAdNum}
                        keyboardType="numeric"
                />
                <Text style={commonStyles.label}>Estado/UF:</Text>
                <Picker
                selectedValue={uf}
                style={commonStyles.picker}
                itemStyle={commonStyles.pickerItem}
                onValueChange={(itemValue) => setUf(itemValue)}>
                    <Picker.Item label="Selecione um estado" value=""/>
                    <Picker.Item label="RO" value="RO"/>
                    <Picker.Item label="AC" value="AC"/>
                    <Picker.Item label="AM" value="AM"/>
                    <Picker.Item label="RR" value="RR"/>
                    <Picker.Item label="PA" value="PA"/>
                    <Picker.Item label="AP" value="AP"/>
                    <Picker.Item label="TO" value="TO"/>
                    <Picker.Item label="MA" value="MA"/>
                    <Picker.Item label="PI" value="PI"/>
                    <Picker.Item label="CE" value="CE"/>
                    <Picker.Item label="RN" value="RN"/>
                    <Picker.Item label="PB" value="PB"/>
                    <Picker.Item label="PE" value="PE"/>
                    <Picker.Item label="AL" value="AL"/>
                    <Picker.Item label="SE" value="SE"/>
                    <Picker.Item label="BA" value="BA"/>
                    <Picker.Item label="MG" value="MG"/>
                    <Picker.Item label="ES" value="ES"/>
                    <Picker.Item label="RJ" value="RJ"/>
                    <Picker.Item label="SP" value="SP"/>
                    <Picker.Item label="PR" value="PR"/>
                    <Picker.Item label="SC" value="SC"/>
                    <Picker.Item label="RS" value="RS"/>
                    <Picker.Item label="MS" value="MS"/>
                    <Picker.Item label="MT" value="MT"/>
                    <Picker.Item label="GO" value="GO"/>
                    <Picker.Item label="DF" value="DF"/>
                </Picker>
                <Text style={commonStyles.label}>Bairro:</Text>
                <TextInput
                    style={commonStyles.standartInpText}
                    placeholder='Digite seu bairro'
                    value={dist}
                    onChangeText={setDist}
                />
                <Text style={commonStyles.label}>Complemento:</Text>
                <TextInput
                    style={commonStyles.standartInpText}
                    placeholder='Adicione algum complemento'
                    value={complement}
                    onChangeText={setComplement}
                />
            </View>
        </ScrollView>
        <View style={commonStyles.registerBtn}>
            <View style={commonStyles.btnContainer}><Button title='Voltar' color="#f90" onPress={backNav}/>
            </View>
            <View style={commonStyles.btnContainer}><Button title='Avançar' color="#f90" onPress={dateBillNav}/>
            </View>
        </View>
    </KeyboardAvoidingView>
  );
}