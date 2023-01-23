import { Text, View, Button } from 'react-native';
import { commonStyles } from '../../styles/commonStyles';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from 'react';
import { API } from '../../api/api';

export function Tos({navigation, route}) {
    const {usrProfile} = route.params;
    const {usrAdress} = route.params;
    const {date} = route.params;
    const loremIpsum = require('lorem-ipsum-react-native'), output = loremIpsum();
    
    const [chkToS, setChkToS] = useState(false);

    function backNav() {
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
                cep: usrAdress.cep,
                street: usrAdress.street,
                city: usrAdress.city,
                uf: usrAdress.uf,
                dist: usrAdress.dist,
                adNum: usrAdress.adNum,
                complement: usrAdress.complement,
            },
            date: date
        });
    }

    function createAccount() {
        if(chkToS){
            fetch(API + "/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    usrProfile: {
                        name: usrProfile.name,
                        phoneN: usrProfile.phoneN,
                        email: usrProfile.email,
                        rg: usrProfile.rg,
                        cpf: usrProfile.cpf,
                        psw: usrProfile.psw,
                    },
                    usrAdress: {
                        cep: usrAdress.cep,
                        street: usrAdress.street,
                        city: usrAdress.city,
                        uf: usrAdress.uf,
                        dist: usrAdress.dist,
                        adNum: usrAdress.adNum,
                        complement: usrAdress.complement,
                    },
                    date: date  
                })
            })
            .then(() => {
                console.log("conta registrado com sucesso!");
                alert("Conta registrado com sucesso!");
                navigation.navigate("Login");
            })
            .catch(() => {
                console.log("Houve um problema ao cadastrar a conta");
                alert("Houve um problema ao registrar. Tente novamente mais tarde");
            })
        }else {
            alert("Aceite os termos de uso.");
        }
    }

  return (
    <View style={commonStyles.container}>
        <Text style={commonStyles.registerTx}>Termos de uso</Text>
        <View>
            <Text>
                {output}{output}{output}{output}{output}{output}{output}{output}{output}{output}{output}{output}{output}{output}{output}{output}{output}{output}
            </Text>
        </View>
        <BouncyCheckbox 
            fillColor='#f90'
            text='Aceito os Termos de uso.'
            onPress={() => {chkToS == false ? setChkToS(!chkToS) : setChkToS(!chkToS);}}
        />
        <View style={commonStyles.registerBtn}>
            <View style={commonStyles.btnContainer}>
                <Button title='Voltar' color="#f90" onPress={backNav}/>
            </View>
            <View style={commonStyles.btnContainer}>
                <Button title='Finalizar' color="#f90" onPress={createAccount}/>
            </View>
        </View>
    </View>
  );
}