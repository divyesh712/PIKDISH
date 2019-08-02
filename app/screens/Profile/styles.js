import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
      container: {flex:1, marginTop: 4, paddingTop:31  }, 
  logo: {  
    marginTop: 4,
    height: 45,  
    width: 244,
    alignSelf: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    alignSelf: 'center', 
    fontSize:18,
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
    backgroundColor: 'red'
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 40,
    paddingRight: 40,
    fontSize:18,
    color: 'white'
  },
  input: {
      margin: 15,
      height: 40, 
   },
  paragraph: { 
    marginTop: 5,
    paddingLeft: 20,
    fontSize: 30,
    lineHeight: 41,  
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  paragraph1: {  
    paddingLeft: 20,
    fontSize: 18,
    color: 'grey', 
    textAlign: 'left',
  },
  paragraph2: {  
    paddingTop:10,
  paddingLeft: 30, 
    fontSize: 16,
    color: 'black', 
    textAlign: 'left',
  },
  paragraph4: {  
    paddingTop:10,
    paddingBottom:10, 
    paddingLeft: 30, 
    fontSize: 16,
    color: 'black', 
    textAlign: 'left',
  },
  paragraph3: {   
    fontSize: 18,
    color: 'red', 
    textAlign: 'left',
  },
   textinput: { 
    paddingTop: 10, 
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 20,
    color: 'grey', 
    textAlign: 'left',
  },
  text: {
      borderWidth: 1,
      paddingLeft: 15,
      borderColor: 'black', 
    },

});

export default styles;
