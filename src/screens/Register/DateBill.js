import { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { format } from 'date-fns';
import { commonStyles } from '../../styles/commonStyles';

export function DateBill({navigation, route}) {
    const {usrProfile} = route.params;
    const {usrAdress} = route.params;
    const [date, setDate] = useState(() => {
        const today = new Date();
        return format(today, "dd")
    });

    function tosNav() {
        navigation.navigate("Tos", {
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

    function backNav() {
        navigation.navigate("AdressInf", {
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
            }
        });
    }
    return (
        <View style={commonStyles.container}>
        <Text style={commonStyles.registerTx}>Qual a data de cobrança?</Text>
        <Calendar 
                style={{borderRadius: 15}}
                markedDates={{
                    [date]: {
                        selected: true,
                        marked: true,
                        selectedColor: "#f90",
                        dotColor: "#f90",
                    }
                }}
                onDayPress={(currentDate) => setDate(currentDate.dateString)}
                theme={{
                    calendarBackground: "#fff",
                    selectedDayTextColor: "#fff",
                    todayTextColor: "#f90",
                    dayTextColor: "#fff",
                    arrowColor: "#fff",
                    monthTextColor: "#fff",
                    textDayFontWeight: "300",
                }}
            />
        <View style={commonStyles.registerBtn}>
            <View style={commonStyles.btnContainer}><Button title='Voltar' color="#f90" onPress={backNav}/>
            </View>
            <View style={commonStyles.btnContainer}><Button title='Avançar' color="#f90" onPress={tosNav}/>
            </View>
        </View>
        </View>
    );
}