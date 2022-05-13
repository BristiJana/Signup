import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View , Button, TextInput,TouchableOpacity, Image,Linking} from 'react-native';
import React,{useState,useCallback} from 'react';
import DocumentPicker, { types } from 'react-native-document-picker';


export default function App() {

  
  

  
  const [user,updateuser]=useState({
    username:'',
  business:'',
  phone:'',
  address:''
  });

  
  const changeHandler = (key,val) =>
{
  updateuser({...user,[key]:val})
}
const [fileResponse, setFileResponse] = useState();

  


const handleSubmit = async() =>{

  
  console.log(user);
  console.warn(fileResponse);

  try {
    
    console.log('user successfully signed up!: ')
  } catch (err) {
    console.log('error signing up: ')
  }
  
  
  
}


  return (
    <View style={styles.container}>
      
    <Text style ={styles.header}>SIGN UP</Text>
    <Text style={styles.pli}> NAME</Text>
      <TextInput
      placeholder='UserName'
      
      autoCapitalize="none"
      underlineColorAndroid={'transparent'}
      style={styles.input}
          onChangeText={val => changeHandler('username', val)}
        />
        <Text style={styles.pli}>BUSINESS NAME</Text>
        
        <TextInput
          style={styles.input}
          placeholder='Business'
          
          autoCapitalize="none"
          underlineColorAndroid={'transparent'}
          onChangeText={val => changeHandler('business', val)}
        />
        <Text style={styles.pli}>PHONE</Text>
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          underlineColorAndroid={'transparent'}
          onChangeText={val => changeHandler('phone', val)}
        />
        <Text style={styles.pli}>ADDRESS</Text>
        <TextInput
          style={styles.input}
          placeholder='Address'
          autoCapitalize="none"
          underlineColorAndroid={'transparent'}
          onChangeText={val => changeHandler('address', val)}
        />
        <Text style={styles.bli}> Upload Identity Account</Text>
      <TouchableOpacity style={styles.upload}>
          <Text style={styles.upbtn}>UPLOAD FILE</Text>
        </TouchableOpacity>
        
         <TouchableOpacity style={styles.button}>
          <Text style={styles.btntext}onPress={handleSubmit}>NEXT</Text>
        </TouchableOpacity>
        <Text style={styles.bli}>Already Have an account <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('https://techup.co.in');
            }}>
           LogIn
          </Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({

  header:{
    fontSize:24,
    color:'#fff',
    paddingBottom:10,
    marginBottom:40,
    
    paddingLeft:50,
  },
 upload:{
  alignSelf:'stretch',
  alignItems:'center',
  padding:20,
  borderColor:'black',
  marginTop:30,
  width:200,
  borderRadius:30,
  marginLeft:100,
  backgroundColor:'white',
  
 },
 bli:{
  alignSelf:'stretch',
  alignItems: 'center',
  color:'white',
  marginLeft:120,
  textShadowColor:'#F66B0E',
  borderColor:'#F66B0E',
 },
 hyperlinkStyle: {
  color: 'blue',
},
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    
  },
  pli:
  {
    alignSelf:'stretch',
    alignItems: 'center',
    color:'white',
    marginLeft:50,
    textShadowColor:'#F66B0E',
    borderColor:'#F66B0E',
  },
  input: {
    alignSelf:'stretch',
    marginBottom:30,
    height: 40,
    borderColor:'#F66B0E',
   borderWidth:1,
    color: 'black',
    padding:8,
    margin:10,
    width:300,
    fontSize: 18,
    fontWeight: '500',
    marginLeft:50,
    borderRadius:10,
    backgroundColor:'white',
  },
  container: {
    flex: 1,
     alignSelf:'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FFCD38',
  },
  button:{

    alignSelf:'stretch',
    alignItems:'center',
    padding:20,
    backgroundColor:'white',
    marginTop:30,
    width:200,
    borderRadius:30,
    marginLeft:100,
    
  },
  btntext:{
    color:'black',
    fontWeight:'bold',
    alignItems:'center',
    alignSelf:'stretch',
paddingLeft:54,

  },
  upbtn:
  {
    color:'black',
    fontWeight:'bold',
    alignItems:'center',
    alignSelf:'stretch',
paddingLeft:40,
  },
});
