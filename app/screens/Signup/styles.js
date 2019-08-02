import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {flex:1, marginTop: 10,}, 
  logo: {   
    height: 45,  
    width: 244,
    alignSelf: 'center',
  },
  Alert_Main_View:{ 
  backgroundColor : "#009688", 
  height: 314 ,
  width: '100%',
  borderWidth: 1,
  borderColor: '#fff',
  borderRadius:7,
 
},
 
Alert_Title:{
 
  fontSize: 25, 
  color: "#fff",
  textAlign: 'center',
  padding: 10,
  height: '28%'
 
},
 
Alert_Message:{
 
    fontSize: 22, 
    color: "#fff",
    textAlign: 'center',
    padding: 10,
    height: '42%'
   
  },
 
buttonStyle: {
    
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
 
},
   
TextStyle:{
    color:'#fff',
    textAlign:'center',
    fontSize: 22,
    marginTop: -5
},
  buttonContainer: {
    marginTop: 36.6,
    alignSelf: 'center', 
    fontSize:18,
    lineHeight: 32,
    fontFamily: 'Nunito-Regular',
    color:'black'
  },
  textContainer: {
    marginTop: 14.4,
    alignSelf: 'center', 
    marginLeft: 25,
   marginRight: 25.5,  
    fontSize:14,
    lineHeight: 32,
    fontFamily: 'Nunito-Regular',
    color:'rgb(146,146,146)' 
  },
  text1: { 
    fontSize:14,
    lineHeight: 32,
    alignSelf: 'center', 
    paddingLeft: 50,
    paddingRight: 50, 
    fontFamily: 'Nunito-Regular',
    color:'rgb(146,146,146)'  
  },
  text2: { 
    fontSize:14,
    lineHeight: 32,
    alignSelf: 'center', 
    paddingLeft: 35,
    paddingRight: 35, 
    fontFamily: 'Nunito-Regular',
    color:'rgb(146,146,146)'  
  },
  tc: { 
    fontSize:14,
    lineHeight: 32, 
    fontFamily: 'Nunito-Regular',
    color:'rgb(25,25,25)'  
  },
  policy: { 
    fontSize:14,
    lineHeight: 32,  
    fontFamily: 'Nunito-Regular',
    color:'rgba(0,0,0,0.99)'  
  },
  buttonsocial: {
    marginTop: 20,
    borderWidth: 1,
      paddingLeft: 15,
      borderColor: 'black', 
    alignSelf: 'center', 
    fontSize:18,
    color:'black'
  },
  button: { 
     alignItems: 'center',
     borderRadius:5,
    backgroundColor: 'red',
  },
  buttonText: {
    paddingTop: 17,
    paddingBottom: 14,
    paddingLeft: 44.5,
    paddingRight: 43.5,
    lineHeight: 19,
    fontFamily: 'Nunito-Regular',
    fontSize:14,
    color: 'rgb(255,255,255)'
  },
  input: {
      margin: 15,
      height: 40, 
   },
  paragraph: { 
    marginTop: 10,
    paddingLeft: 32,
    fontSize: 30,
    lineHeight: 41,  
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  paragraph1: {  
    paddingLeft: 32,
    fontSize: 14,
    lineHeight: 32,
    fontFamily: 'Nunito-Regular',
    color: 'rgb(146,146,146)',
    textAlign: 'left',
  },
  dialogtitle: {  
  paddingTop:28,
  paddingBottom:20.5, 
    fontSize: 14,
    lineHeight: 19,
    fontFamily: 'Nunito-Bold',
    backgroundColor: 'rgb(255,255,255)',
    color: 'rgb(29,33,38)',
    textAlign: 'center',
  },
  dialogbutton:{  
    paddingTop:15,
    paddingBottom:13, 
    borderRadius:5, 
    fontSize: 14,
    lineHeight: 19,
    fontFamily: 'Nunito-Bold',
    backgroundColor: 'rgb(224,60,52)',
    color: 'white',
    textAlign: 'center',
  },
  dialogbuttoncontainer:{   
  marginLeft:43,
  marginTop:50,
  marginBottom:14,
  marginRight:42, 
  },
  dialogtextbox: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    alignSelf:'center',
    shadowRadius: 2,
    elevation: 1,
    paddingTop:18,
    marginTop:43.5,
    paddingBottom:16,
  },
  paragraph2: {   
  paddingLeft: 30, 
    fontSize: 13,
    color: 'black', 
    textAlign: 'left',
  },
  applycode: {   
  marginLeft: -15, 
    fontSize: 14,
    lineHeight:19,
    color: 'rgb(224,60,52)',
    textAlign: 'left',
  },
  paragraph5: {    
    fontSize: 14,
    paddingLeft: 30, 
    color: 'rgb(224,60,52)', 
    textAlign: 'left',
  },
  paragraph6: {  
    paddingTop:10,
    fontSize: 14,
    lineHeight: 19,
    fontFamily: 'Nunito-Regular',
    color: 'rgb(224, 60,52)', 
    textAlign: 'left',
  },
  paragraph4: {  
    paddingTop:16,
    paddingBottom:15, 
    paddingLeft: 30, 
    fontSize: 14,
    lineHeight: 19,
    fontFamily: 'Nunito-Regular',
    color: 'black', 
    textAlign: 'left',
  },
  paragraph3: {   
    fontSize: 14,
     lineHeight: 32,  
    fontFamily: 'Nunito-Regular',
    color: 'rgb(0, 0, 0)',
    textAlign: 'left',
  },
   textinput: {  
    paddingLeft: 32,
    paddingRight: 30,
    fontSize: 20,
    fontFamily: 'Nunito-Regular',
    color: 'rgb(0, 0, 0)', 
    textAlign: 'left',
  },
  textinput1: { 
    paddingTop: 10, 
    paddingLeft: 32,
    paddingRight: 30,
    fontSize: 20,
    fontFamily: 'Nunito-Regular',
    color: 'rgb(0, 0, 0)', 
    textAlign: 'left',
  },
  text: {
      borderWidth: 1,
      paddingLeft: 15,
      borderColor: 'black', 
    },
});

export default styles;
