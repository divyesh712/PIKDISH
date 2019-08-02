import { StyleSheet,Dimensions } from 'react-native'; 
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const heightes = screenHeight/2;

const styles = StyleSheet.create({
      container: {
        flex: 1, 
        backgroundColor:'rgb(245,245,247)', 
    },  
     safeAreaView: {
    flex: 1, 
  },
  card: {
    backgroundColor: 'white',
    alignItems: 'center', 
    borderRadius:10,
  },
    logo: { 
      width:375,
      height:282,
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
      fontSize:15,
      fontWeight:'bold',
      lineHeight:20,
      textAlign:'left',
    fontFamily:'Nunito-Bold', 
        color:'#1D2126'
    },
    normalText: {  
      fontSize:11,
      lineHeight:16,  
      textAlign:'left',
        color:'#585858',
        borderBottomColor: '#E3E3E4',
        borderBottomWidth: 1, 
      fontFamily:'Nunito-Regular', 
    },
    percentoffText: {  
      fontSize:12,
      lineHeight:16,  
      textAlign:'left',
        color:'black', 
      fontFamily:'Nunito-Regular', 
    },
    smallText: {  
      fontSize:10,
      lineHeight:16,  
      textAlign:'left',
        color:'#000000',  
      fontFamily:'Nunito-Regular', 
    },
    shadowbox:{
      height:24,
      width:24,
      marginTop:4,
      borderRadius:24/2,
      alignItems:'center',
      justifyContent:'center',
      shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 1,
  },
  paragraph: {    
    fontSize: 13,
    lineHeight: 18,  
    color: '#1D1C1C',
    fontWeight:'bold',
    marginRight:9.5,
    fontFamily: 'Nunito-Bold', 
    textAlign: 'center',
  },
  paragraph1: {    
    fontSize: 10,
    lineHeight: 18,  
    color: '#1D1C1C', 
    fontFamily: 'Nunito-Regular', 
    textAlign: 'center',
  }, 
  textblockcontainer: {  
    marginTop:4,  
    flex: 1,
    marginRight:24, 
  },
  arrowText: {  
      fontSize:11,
      lineHeight:16,  
      textAlign:'left',
      paddingLeft:2,
      paddingRight:2,
        color:'#CECECF', 
      fontFamily:'SF Pro Display-Regular', 
    }, 
  paragraph4: {   
    fontSize: 14,
    lineHeight: 19,
    fontFamily: 'Nunito-Regular',
    color: '#E03C34', 
    textAlign: 'left',
    borderBottomWidth:1,
    borderBottomColor:'rgba(0,0,0,0.16)'
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
