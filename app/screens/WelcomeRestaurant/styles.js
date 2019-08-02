import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor:'white'
    }, 
    logo: {
      width:46,
      height:46,
      alignSelf:'center'
  },
     image: {
    width: 200,
    height: 200,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 16,
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
  circle: {
   width: 84,
   height:84, 
   borderRadius: 84/2,
   marginTop:-220,  
    alignSelf: 'center', 
    justifyContent:'center', 
    backgroundColor:'white'
},
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  buttonContainer: { 
  marginTop:220.8,  
    height:180.4, 
    width:243.7,  
    borderRadius:10,
    alignSelf: 'center', 
    justifyContent:'center', 
    backgroundColor:'white'
  },
  buttonContainer1: { 
  marginTop:-24, 
  alignSelf: 'center',
  width:243.7,  
  backgroundColor:'white' 
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
  buttonText: {
  marginTop:6.5,  
    lineHeight: 20,
    fontFamily: 'Nunito-Bold',
    fontSize:15,
    textAlign:'center',
    color: 'rgb(224,60,52)',
    fontWeight: 'bold',
  },
  buttonText1: {  
  marginTop:4.4, 
    lineHeight: 20,
    fontFamily: 'Nunito-Bold',
    fontSize:18,
    paddingLeft:40,
    paddingRight:41,
    textAlign:'center',
    color: 'black',
    fontWeight: 'bold',
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
    marginTop: 51.5, 
    fontSize: 14,
    lineHeight: 32,  
    color: 'black',
    fontFamily: 'Nunito-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph1: { 
  marginTop:10, 
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
      alignSelf: 'center',
      fontSize: 11,
      lineHeight:15,
    fontFamily: 'Nunito-Regular',
      justifyContent:'center',
      color:'rgb(255,159,28)',
    },

});

export default styles;
