import { useState } from 'react';
import { Text, View, KeyboardAvoidingView, TextInput, ScrollView, Button, Alert } from 'react-native';
import { commonStyles } from '../../styles/commonStyles';

export function Register({navigation}) {
    const [name, setName] = useState("");
    const [phoneN, setPhoneN] = useState("");
    const [email, setEmail] = useState("");
    const [rg, setRg] = useState("");
    const [cpf, setCpf] = useState("");
    const [psw, setPsw] = useState("");
    const [chkPsw, setChkPsw] = useState("");

    const validate = (email) => {
        const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

        return expression.test(String(email).toLowerCase())
    }

    function backNav() {
        resetStates();
        navigation.navigate("Initial");
    }

    function adressNav(){
        if(name == ""){
            alert("Campo de Nome completo, se enconta vazio");
        }else if(name.length < 8){
            alert("Digite um nome com no minimo 8 caractéres");
        }else if(phoneN == ""){
            alert("Campo de Telefone, se enconta vazio");
        }else if(phoneN.length < 11){
            alert("Digite um numero de telefone valido");
        }else if(email == ""){
            alert("Campo de Email, se enconta vazio");
        }else if(!validate(email)){
            alert("Digite um email valido");
        }else if(rg == ""){
            alert("Campo de RG, se enconta vazio");
        }else if(rg.length < 9){
            alert("Digite um rg valido");
        }else if(cpf == ""){
            alert("Campo de CPF, se enconta vazio");
        }else if(cpf.length < 11){
            alert("Digite um CPF valido");
        }else if(psw == ""){
            alert("Campo de senha, se enconta vazio");
        }else if(psw.length < 8){
            alert("Digite uma senha de no minimo 8 caracteres");
        }else if(chkPsw == ""){
            alert("Confirme sua senha");
        }else if(chkPsw !== psw){
            alert("As senhas não são iguais");
        }else{
            navigation.navigate("AddressInf", {usrProfile: {
                name: name,
                phoneN: phoneN,
                email: email,
                rg: rg,
                cpf: cpf,
                psw: psw,
            }})
        }
    }
    
    function resetStates(){
        setName("");
        setPhoneN("");
        setEmail("");
        setRg("");
        setCpf("");
        setPsw("");
        setChkPsw("");
    }
  return (
    <KeyboardAvoidingView style={{...commonStyles.container, ...{justifyContent: "space-between"}}} 
    behavior={(Platform.OS === "android" || Platform.OS === "android") ? "height" : "height"}>
        <Text style={commonStyles.registerTx}>Nova conta</Text>
        <ScrollView style={{width: "100%"}}>
            <View style={commonStyles.inpTextContainer}>
                <Text style={commonStyles.label}>Nome Completo:</Text>
                <TextInput
                        style={commonStyles.standartInpText}
                        placeholder='Digite seu nome completo'
                        value={name}
                        onChangeText={setName}
                        maxLength={120}
                />
                <Text style={commonStyles.label}>Telefone:</Text>
                <TextInput
                        style={commonStyles.standartInpText}
                        placeholder='Digite seu telefone'//vamos dizer que é so para brasileiros +55
                        value={phoneN}
                        onChangeText={setPhoneN}
                        keyboardType="number-pad"
                        maxLength={11}
                />
                <Text style={commonStyles.label}>Email:</Text>
                <TextInput
                        style={commonStyles.standartInpText}
                        placeholder='Digite um email'
                        value={email}
                        onChangeText={setEmail}
                />
                <Text style={commonStyles.label}>Nº do RG:</Text>
                <TextInput
                        style={commonStyles.standartInpText}
                        placeholder='RG somente numeros'
                        value={rg}
                        onChangeText={setRg}
                        keyboardType="numeric"
                        maxLength={10}
                />
                <Text style={commonStyles.label}>CPF:</Text>
                <TextInput
                        style={commonStyles.standartInpText}
                        placeholder='CPF somente numeros'
                        value={cpf}
                        onChangeText={setCpf}
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
                    maxLength={16}
                />
                <Text style={commonStyles.label}>Confirmar senha:</Text>
                <TextInput
                    style={commonStyles.standartInpText}
                    placeholder='Confirme sua senha'
                    value={chkPsw}
                    onChangeText={setChkPsw}
                    secureTextEntry={true}
                    maxLength={16}
                />
            </View>
        </ScrollView>
        <View style={commonStyles.registerBtn}>
            <View style={commonStyles.btnContainer}><Button title='Voltar' color="#f90" onPress={backNav}/>
            </View>
            <View style={commonStyles.btnContainer}><Button title='Avançar' color="#f90" onPress={adressNav}/>
            </View>
        </View>
    </KeyboardAvoidingView>
  );
}