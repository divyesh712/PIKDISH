import { StyleSheet,Dimensions } from 'react-native'; 
const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const heightes = screenHeight/2;

const styles = StyleSheet.create({
       container: {
    flex: 1, 
    backgroundColor: '#F5FCFF',
  }, 
     safeAreaView: {
    flex: 1, 
  },
  scrollStyle: {
    backgroundColor: 'white',
    paddingLeft: 65,
    marginTop:15,
    paddingRight: 65,
    // justifyContent: 'center',
  },
  tabBarTextStyle: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  underlineStyle: {
    height: 3,
    backgroundColor: 'red',
    borderRadius: 3,
    width: 50,
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
  tabBarTextStyle: {
    fontSize: 14,
    fontWeight: 'normal',
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
        color:'#EC1818',
        borderBottomColor: '#E3E3E4',
        borderBottomWidth: 1, 
      fontFamily:'SF Pro Display-Regular', 
    },
    percentoffText: {  
      fontSize:13,
      lineHeight:16,  
      textAlign:'left',
        color:'#F44336', 
      fontFamily:'SF Pro Display-Regular', 
    },
    smallText: {  
      fontSize:10,
      lineHeight:16,  
      textAlign:'left',
        color:'#000000',  
      fontFamily:'SF Pro Display-Regular', 
    },
    dialogsmallText: {
    marginTop:3.4,  
      fontSize:15,
      lineHeight:14,  
      textAlign:'center',
        color:'rgb(224,60,52)',  
      fontFamily:'Nunito-Regular', 
    }, 
    dialogboldText: { 
      fontSize:15,
      fontWeight:'bold',
      lineHeight:20,
      textAlign:'left',
    fontFamily:'Nunito-Bold', 
        color:'#1D2126'
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
     arrowText: {  
      fontSize:10,
      lineHeight:16,  
      textAlign:'left',
      paddingLeft:2,
      paddingRight:2,
        color:'#CECECF', 
      fontFamily:'SF Pro Display-Regular', 
    },
  paragraph: {   
    fontSize: 16,
    lineHeight: 22,  
    color: 'rgb(0,0,0)',
    fontFamily: 'Nunito-ExtraBold', 
    textAlign: 'center',
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
});

export default styles;
