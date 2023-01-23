# ProjectPAY
Project did for DevInHouse[EDP] Module 1 part 2, it's simulate a billing pay mobile application for Android maded with Expo React-Native.
The application have two pages one for login and other to registry account plus three tab pages for the app usage, payment: what use camera scanner for barCode39
account information and bills registry what have an page to bill details.
the application use a simple API runnng with Ngrok free server to save records informations in the API.
##
### Initial
Is the Initial screen for app, have button to go to login or to registration,
to login need have an account.
### Login
A login page with two inputs for login information plus one button to login and informations to register a new account.
### Registration page
In here is the space to user registry an account, having four pages 
- AdressInf
- DateBill
- Register
- TOS
#### AdressInfo
Is a form to get some adress information
- Valid CEP (post code/ ZIP)
- Street, city name and district all autocompleted with valid CEP
- Place number
All this need be valid to continue
#### DateBill
Use a calendar to choosen a day to bill check
#### Register
User information
- Complete name
- Phone number
- E-mail adress (need be valid email)
- ID number
- CPF (citizen number)
- Password and password checker
all the information need be valid to continue
#### TOS
This page only simulate a TOS acceptence if ok make and record the account in the API otherwise got back to beign page.
### Home
The middle tab, show user informations.
### Scanner
Left tab, use the smartphone camera to scan a barCode39.
using the package <pre>expo-barcode-scanner</pre> package to scan.
the application will ask for permition to use the dispositive camera, if negate it ask again and if negate it'll need go to configuration to pass permition for camera usage.
or clean Expo cache to ask again.
when the permission is give, the camera open and when is pointed to a bar code the application will need get pseudo values using in the project, inside of project have some [ bardcodes ](https://github.com/leonardoGasperin/ProjectPAY/tree/main/src/img) for exemple
after scan u can access the BillDetail or ask to scan again.
### Bills
Show all bills registred when hited go to Bill details
### BillDetails
Show all details of the bill information get in the barcode39.
## To Use
To run this application you will need have VSCode 
using the extensions:
<pre>
Babel JavaScript
React Native Tools
</pre>
- Scripts:
<pre>
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "api": "json-server projectPAY.json -w -p 3333"
</pre>
- Dependency:
<pre>
    "@react-native-async-storage/async-storage": "^1.17.10",
    "@react-native-picker/picker": "^2.4.4",
    "@react-navigation/bottom-tabs": "^6.3.3",
    "@react-navigation/native": "^6.0.12",
    "@react-navigation/stack": "^6.2.3",
    "date-fns": "^2.29.3",
    "date-fns-tz": "^1.3.7",
    "expo": "~46.0.9",
    "expo-barcode-scanner": "~11.4.0",
    "expo-status-bar": "~1.4.0",
    "json-server": "^0.17.0",
    "lorem-ipsum-react-native": "^1.0.3",
    "lottie-react-native": "5.1.3",
    "react": "18.0.0",
    "react-native": "0.69.5",
    "react-native-bouncy-checkbox": "^3.0.4",
    "react-native-calendars": "^1.1275.0",
    "react-native-format-currency": "^0.0.3",
    "react-native-gesture-handler": "~2.5.0",
    "react-native-reanimated": "^2.10.0",
    "react-native-safe-area-context": "4.3.1",
    "react-native-screens": "~3.15.0",
    "react-number-format": "^5.0.0-beta.4"
    "@babel/core": "^7.12.9"
</pre>
