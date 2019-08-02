import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
      container: {alignItems: 'center',flex: 1,justifyContent: 'center', }, 
  logo: {   
    height: 162.5,  
    width: 162.5,
    alignSelf: 'center',
    borderRadius: 162.5/ 2,
    backgroundColor:'rgb(231,233,249)',
  },
  buttonContainer: {
    marginTop: 53,
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
    fontSize: 23,
    lineHeight: 31,  
    color: 'black',
    fontFamily: 'Nunito-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph1: {  
    paddingTop:27.7,
    paddingLeft: 22,
    paddingRight: 22,
    fontSize: 19,
    lineHeight: 26,
    fontWeight: 'bold',
    fontFamily: 'Nunito-Bold',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
  },
  paragraph2: {  
    paddingTop:10,
  paddingLeft: 30, 
    fontSize: 16,
    color: 'black', 
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
