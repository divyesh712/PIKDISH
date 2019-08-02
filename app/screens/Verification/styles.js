import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
      container: {flex:1, marginTop: 49,  }, 
  logo: {   
    height: 162.5,  
    width: 162.5,
    alignSelf: 'center',
    borderRadius: 162.5/ 2,
    backgroundColor:'rgb(231,233,249)',
  },
  gridPad: { paddingLeft:27,paddingTop:37 },
    txtMargin: { margin: 5,height:40,
      width:40, },
    inputRadius: { textAlign: 'center' },
  buttonContainer: {
    marginTop: 52.5,
    alignSelf: 'center', 
    fontSize:18,
    lineHeight: 32,
    fontFamily: 'Nunito-Regular',
    color:'black'
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
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 53.5,
    paddingRight: 54.5,
    lineHeight: 19,
    fontFamily: 'Nunito-Regular',
    fontSize:14,
    color: 'white'
  },
  input: {
      margin: 15,
      height: 40, 
   },
  paragraph: {  
    fontSize: 30,
    paddingTop:45,
    lineHeight: 41,  
    paddingLeft: 32,
    color: 'black',
    fontFamily: 'Nunito-Bold', 
    textAlign: 'left',
  },
  paragraph1: {  
    paddingTop:27.7,
    paddingLeft: 32, 
    fontSize: 14,
    lineHeight: 25, 
    fontFamily: 'Nunito-Regular',
    color: 'rgb(146,146,146)',
    textAlign: 'left',
  },
  paragraph2: {  
    paddingTop:13,
  paddingRight: 30, 
    fontSize: 14,
    color: 'rgb(224,60,52)', 
    textAlign: 'right',
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
    paddingTop: 10, 
    paddingLeft: 32,
    lineHeight: 32,  
    paddingRight: 30,
    fontSize: 14,
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
