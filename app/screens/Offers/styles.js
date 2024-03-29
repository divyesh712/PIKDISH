import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop:31.5,
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
      fontSize:15,
      lineHeight:20,
      textAlign:'left',
    fontFamily:'Nunito-ExtraBold',
        fontWeight: 'bold',
        color:'rgb(0,0,0)'
    },
    normalText: {
      color:'black',  
      fontSize:15,
      lineHeight:20,
      fontWeight: 'bold',
      textAlign:'right',
        color:'rgb(224,60,52)',
      fontFamily:'Nunito-ExtraBold', 
    },
     dialogboldText: { 
      fontSize:15,
      fontWeight:'bold',
      lineHeight:20,
      textAlign:'left',
    fontFamily:'Nunito-Bold', 
        color:'#1D2126'
    },
    smallText: {
    marginTop:3.4,  
      fontSize:15,
      lineHeight:14,  
      textAlign:'center',
        color:'rgb(224,60,52)',  
      fontFamily:'Nunito-Regular', 
    }, 
    dialogbuttontext:{ 
      paddingTop:3.9,
      paddingBottom:3.9,
      paddingLeft:18.2,
      paddingRight:18.7,
      marginLeft:17.2,
      borderWidth: 1,
    borderColor: '#B9B9B9',
      fontSize:10,
      lineHeight:14,  
      textAlign:'left',
        color:'rgb(224,60,52)',  
      fontFamily:'Nunito-SemiBold', 
    },
    dialognormalText: {  
      fontSize:11,
      lineHeight:16,  
      textAlign:'left',
        color:'#EC1818',
        borderBottomColor: '#E3E3E4',
        borderBottomWidth: 1, 
      fontFamily:'SF Pro Display-Regular', 
    }, 
  paragraph: { 
    marginTop: 18,
    marginBottom: 6,  
    fontSize: 16,
    lineHeight: 22,  
    color: 'rgb(0,0,0)',
    fontFamily: 'Nunito-ExtraBold', 
    textAlign: 'left',
  },
  paragraph1: {  
    fontSize: 13,
    lineHeight: 18,
    fontFamily: 'Nunito-SemiBold',
    color: 'rgb(0,0,0)',
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
  buttontextmodal: {   
    fontSize: 15,
     lineHeight: 20,  
    fontFamily: 'Nunito-Bold',
    color: 'white',
    textAlign: 'center',
    fontWeight:'bold'
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
      fontSize: 20,
      lineHeight:27,
      fontWeight:'bold',
      marginRight:146,
    fontFamily: 'Nunito-Bold',
      justifyContent:'center',
      color:'rgb(39,39,39)',
    },
    checkboxlbel:{
      fontSize: 14,
      lineHeight:23, 
      marginLeft:15,
      fontFamily: 'Nunito-Regular', 
      color:'black',
    },
tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    marginLeft:37,
    marginRight:11.8,
    marginTop:14.5
  },
  tabTextSortStyle: {
    color: 'grey', 
    fontSize: 20,
    lineHeight:27,
    fontWeight:'bold',
    paddingBottom:9.5,
  },
  tabTextCuisineStyle:{
    color: 'grey',
    marginLeft: 72,
    marginRight: 77,
    fontSize: 20,
    textShadowColor:'#000000',
    lineHeight:27,
    fontWeight:'bold',
    paddingBottom:9.5,
  },
  tabTextFilterStyle:{
    color: 'grey', 
    marginRight: 23.2,
    fontSize: 20,
    lineHeight:27,
    fontWeight:'bold',
    paddingBottom:9.5,
  },
  ModalHeaderText: {
    color: '#272727', 
    fontSize: 20,
    fontFamily:'Nunito-Bold',
    lineHeight:27,
    textAlign:'left',
    fontWeight:'bold'
  },
  tabUnderline: { 
    textDecorationColor:'#D63932',
    textDecorationStyle:'solid',
    textDecorationLine: 'underline',
    fontSize: 20,
    lineHeight:27,
    fontWeight:'bold',
    color:'#272727',
    paddingBottom:9.5, 
  },
  buttonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  buttonStyle: {
    padding: 15,
    borderRadius: 5,
    marginBottom: 18, 
  },
});

export default styles;
