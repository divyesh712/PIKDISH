import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor:'white'
    }, 
  gridView: {
    marginTop: 25, 
    marginLeft:22,
    marginRight:22,
    flex: 1,
  },
  itemContainer: { 
     height: 140,
     marginTop:7,
     marginBottom:7,
  },
  itemName: {
    fontSize: 10,
    paddingRight:15,
    paddingLeft:15,
    paddingTop:7.5,
    paddingBottom:7.5,
    alignSelf: 'center', 
    color: 'rgb(255,255,255)',
    lineHeight: 14,
    fontFamily: 'Nunito-Bold',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
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
    backgroundColor: 'red',
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
