import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API } from '../../api/api';
import { commonStyles } from '../../styles/commonStyles';

export function Bills() {
    const [bills, setBills] = useState([]);
    const [id, setId] = useState(0);
    const isFocused = useIsFocused();
    
    async function storage() {
        try {
          const jsonValue = await AsyncStorage.getItem('@id');
          jsonValue != null ? setId(JSON.parse(jsonValue)) : null;
          }catch(e) {
          console.log("nao foi possivel encontrar o usuariosfdfsfsd!")
        }
      }
      
    useEffect(() => {
        if(isFocused){
            storage();
        }
    }, [isFocused]);

    useEffect(() => {
        if(isFocused){
            fetch(API + "/invoices?user=" + id)
            .then(async (response) => {
                const data = await response.json();
                if(data != null){
                    setBills(data);
                }
            })
            .catch(() => alert("Erro ao procurar boletos"))
        }
    }, [isFocused]);
    return (
        <SafeAreaView style={commonStyles.container}>
        <Text style={commonStyles.registerTx}>Boletos Pagos</Text>
            <ScrollView style={commonStyles.cardBoard}>
                {bills != [] && bills.map((item) => (
                    <View key={item.id} style={commonStyles.cardView}>
                        <View style={commonStyles.cardTop}>
                            <Text>pagou em: 
                            <Text  style={commonStyles.cardTx}> {item.date}</Text></Text>
                            <Text>{item.amount[0]}</Text>
                        </View>
                        <View style={commonStyles.cardBottom}>
                            <Text style={commonStyles.cardTx}>{item.recipient}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}