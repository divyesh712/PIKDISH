import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {flex:1, marginTop: 4, paddingTop:31  }, 
  logo: {   
    height: 45,  
    width: 244,
    alignSelf: 'center',
  },
  buttonContainer: {
    marginTop: 24,
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
    paddingLeft: 46.5,
    paddingRight: 47.5,
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
  paragraph2: {  
    paddingTop:10,
  paddingLeft: 30, 
    fontSize: 16,
    color: 'black', 
    textAlign: 'left',
  },
  paragraph6: {  
    paddingTop:10,
  paddingLeft: 30, 
    fontSize: 16,
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
