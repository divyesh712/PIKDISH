import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor:'rgb(245,245,247)'
    }, 
    logo: { 
      width:46,
      height:46,
      alignSelf:'center'
  }, 
  buttonContainer: {    
    height:50,    
    flexDirection: 'row',  
    backgroundColor:'rgb(224,60,52)'
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
   column: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: 200
    },
    textBlock: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        flex: 1, 
        left: 16, 
    },
    textBlock1: { 
        flex: 1, 
        marginTop:18,
    }, 
    textBlock2: { 
        flex: 1, 
        marginTop:8, 
        flexDirection: 'row', 
        left: 16, 
    }, 
    textBlock3: { 
        flex: 1, 
        marginTop:8, 
        flexDirection: 'row', 
        left: 16,
        marginBottom:28, 
    }, 
    bullet: {
        width: 10, 
    },
    bulletText: {
        flex: 1,
        paddingLeft:7,
        paddingRight:24,
    },
    boldText: { 
      fontSize:16,
      lineHeight:18,
    fontFamily:'Nunito-Bold',
        fontWeight: 'bold',
        color:'rgb(29,28,23)'
    },
    normalText: {
      color:'black', 
      alignSelf:'center',
      fontSize:14,
      lineHeight:19,
      fontFamily:'Nunito-Regular',
      flexWrap: 'wrap',
    },
  paragraph: { 
    marginTop: 15,
    marginBottom: 12,  
    fontSize: 16,
    lineHeight: 18,  
    color: 'white',
    fontFamily: 'Nunito-ExtraBold ',
    fontWeight: 'bold',
    textAlign: 'left',
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
  textblockcontainer: {  
    marginTop:4,  
    flex: 1,
    marginRight:24, 
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
