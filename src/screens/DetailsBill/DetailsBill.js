import { useIsFocused } from '@react-navigation/native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useEffect, useState } from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import { formatCurrency } from 'react-native-format-currency';
import { API } from '../../api/api';
import { commonStyles } from '../../styles/commonStyles';

export function DetailsBill({navigation, route}) {
    const [bill, setBill] = useState();
    const isFocused = useIsFocused();
    const [formatedAmount, setFormatedAmount] = useState([]);
    const [chkPay, setChkPay] = useState(null);
    const [date, setDate] = useState(() => {
        const today = new Date();
        return format(today, "dd 'de' MMMM 'às' HH:mm", 
            {
                timeZone: 'America/Sao_Paulo',
                locale: pt
            }
        );
    });

    const {billId} = route.params;
    const {id} = route.params;

    function callBill() {
        if(chkPay === null){
            fetch(API + "/debts/" + billId)
            .then(async (response) => {
                const data = await response.json();
                if(data != null){
                    setBill(data);
                    setFormatedAmount(formatCurrency({ amount: data.amount, code: "BRL"}))
                    setChkPay(false);
                }
            })
            .catch(() => alert("Erro ao carregar boleto"));
        }
    }

    function pay(){
        fetch(API + "/invoices", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                date: date,
                recipient: bill.recipient,
                amount: formatCurrency({ amount: bill.amount, code: "BRL"}),
                user: id,
            })
        })
        .then(() => {
            alert("Boleto pago com sucesso!");
            setChkPay(true);
            navigation.navigate("Bills");
        })
        .catch(() => alert("Erro ao carregar boleto"));
    }

    function cancel() {
        navigation.navigate("Scanner");
    }

    useEffect(() => {
        if(isFocused){
            callBill()
        }
    }, [isFocused]);
    
  return (
    <SafeAreaView style={commonStyles.container}>
        {chkPay === false && (
            <View>
                <View style={commonStyles.billInfo}>
                    <Text>Para:</Text>
                    <Text>{bill.recipient}</Text>
                    <Text>Valor:</Text>
                    <Text>{formatedAmount[0]}</Text>
                    <Text>Código do boleto:</Text>
                    <Text>{bill.id}</Text>
                    <Text>CashBack:</Text>
                    <Text>R$ {Number(bill.amount * 0.1).toFixed(2)}</Text>
                </View>
                <View style={commonStyles.billBtnView}>
                    <Button title='Pagar' color={"#f90"} onPress={pay}/>
                    <View style={{marginHorizontal: "15%"}}></View>
                    <Button title='Cancelar' color={"red"} onPress={cancel}/>
                </View>
            </View>
        )}
        {chkPay == null && (
            <View style={commonStyles.noBillsToPay}>
                <Text style={commonStyles.cardTx}>Nenhum boleto escaneado encontrado!</Text>
                <Button title='Voltar' color={"#f90"} onPress={cancel}/>
            </View>
        )}
    </SafeAreaView>
  );
}