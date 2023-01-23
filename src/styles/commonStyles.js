import { StyleSheet, Dimensions } from "react-native";

const screenW = Dimensions.get("screen").width;
const screenH = Dimensions.get("screen").height;

export const commonStyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#fff",
    },
    initalPgAnimation:{
        width: screenW * 0.75,
        height: screenH * 0.3,
    },
    btnContainer:{
        alignItems: "center",
        width: "100%",
    },
    standartBtn:{
        width: "55%",
        height: 35,
        marginVertical: 15,
        borderRadius: 5,
    },
    inpTextContainer:{
        width: "100%",
        alignItems: "center",
    },
    standartInpText:{
        width: "75%",
        padding: 10,
        margin: 9,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "#f90",
        color: "#f90",
    },
    logo:{
        fontSize: 76,
        fontWeight: "700",
        color: "#f90",
        marginTop: "-25%",
    },
    registerTx:{
        fontSize: 28,
        fontWeight: "bold",
        color: "#f90",
        marginVertical: "10%",
    },
    label:{
        alignSelf: "flex-start",
        marginLeft: "15%",
        color: "#f90",
    },
    picker:{
        marginVertical: 7,
        backgroundColor: "#f90",
        color: "#fff",
        width: "75%",
    },
    pickerItem:{
        color: "#f90",
    },
    userProfile:{
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    loginBtn:{
        alignSelf: "center", 
        marginTop: "100%",
    },
    cardView: {
        width: "86%",
        maxWidth: "100%", 
        paddingVertical: 15, 
        borderWidth: 1.75, 
        borderRadius: 5, 
        borderColor:"#f90", 
        marginHorizontal: "3.5%", 
        marginVertical: 7, 
        padding: 7, 
        height: 90,
    },
    cardTop: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        width: "100%",
        marginTop: "-2%",
        
    },
    cardBottom: {
        marginTop: "9%",
    },
    cardBoard: {
        marginTop: "5%",
    },
    cardTx: {
        color: "#f90", 
        fontWeight: "bold",
    },
    scannerTopView: {
        alignItems: "flex-start", 
        marginTop: "10%"
    },
    scannerTopTx: {
        fontSize: 22, 
        color: "#f90", 
        marginHorizontal: 7
    },
    scannerTopDivisor: {
        width: 400, 
        borderWidth: 1, 
        borderColor: "#f90"
    },
    billInfo: {
        alignSelf: "center", 
        marginTop: "20%"
    },
    billBtnView: {
        marginVertical: "20%", 
        marginHorizontal: "20%", 
        flexDirection: "row"
    },
    noBillsToPay: {
        alignSelf: "center", 
        marginTop: "20%"
    },
    registerBtn: {
        flexDirection: "row", 
        justifyContent: "space-evenly"
    },
})