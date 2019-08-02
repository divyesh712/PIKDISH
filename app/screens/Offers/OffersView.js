import React, { Component } from 'react';
import { Text,Modal,Dimensions, SafeAreaView ,View, StyleSheet,TextInput, Image ,ScrollView,ImageBackground,TouchableOpacity} from 'react-native';
 import { Ionicons, FontAwesome } from 'react-native-vector-icons';
 import { BackHandler, FlatList } from 'react-native';
import {Alert,TouchableHighlight,TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import { Button ,Icon ,Card} from 'react-native-elements';
import PropTypes from 'prop-types';
import { IconButton } from 'react-native-paper';
import Toolbar from 'app/components/Toolbar'; 
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
 import ScrollableTabView, { ScrollableTabBar,DefaultTabBar  } from 'react-native-scrollable-tab-view';
import TabBar from "react-native-underline-tabbar"; 
  import {CardView,  CardTitle} from 'react-native-cardview';
import Dialog, { 
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton, 
} from 'react-native-popup-dialog';
 const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;
const heightes = screenHeight/2;

class OffersView extends Component {
    
  constructor(prop) {
    super(prop);
  this.state = {
    modalVisible: false,
    currentTab: 1,
    checked:false,
selectedCheckbox: {}, 
selectedCheckbox1: {},
sortselectedCheckbox: {},// keep selected item in state, by default its empty meaning nothing is selected
      checkboxValue: [
        {
          label: "My Favourite",
          value: 1
        },
        {
          label: "Offer Only",
          value: 2
        },
        {
          label: "Veg",
          value: 3
        }, 
      ], 
      checkValue: [
        {
          label: "Chinese",
          value: 1
        },
        {
          label: "South Indian",
          value: 2
        },
        {
          label: "Continetal",
          value: 3
        },
         
      ],
      SortValue: [
        {
          label: "Relevance",
          value: 1
        },
        {
          label: "Alphabetical",
          value: 2
        },
        {
          label: "Discount",
          value: 3
        },
         {
          label: "Rating",
          value: 4
        },
        {
          label: "Pre-parathion Time",
          value: 5
        },
      ]
    };
  }

  CheckMe = selectedCheckbox => {
    this.setState({ selectedCheckbox }); // update selected item
  };
  CheckMe1 = selectedCheckbox1 => {
    this.setState({ selectedCheckbox1 }); // update selected item
  };
  SortCheckMe = sortselectedCheckbox => {
    this.setState({ sortselectedCheckbox }); // update selected item
  };
onchange(){
    if(this.state.checked==false){
      this.setState({
      checked: true
    })
    }else{
      this.setState({
      checked: false
    })
    }
    
  }

  onTabClick = (currentTab) => {
    this.setState({
      currentTab: currentTab,
    });
  }; 
changeScrollValue(value) {
    this.scrollView.setNativeProps({ scrollEnabled: value });
    // this.setState({ isScroll : value});
  }
  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };
  renderModal()
  {
    const { checkboxValue, selectedCheckbox,checkValue,selectedCheckbox1,SortValue,sortselectedCheckbox } = this.state;
    return(
      <Modal 
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible} 
           onRequestClose={() => {
            this.setState({ modalVisible: false });
          }}>
          <TouchableWithoutFeedback onPress={() => { this.setModalVisible(false); }}>
          <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)',
                justifyContent: 'flex-end',  }}>
            <View
              style={{
                backgroundColor: 'white',  
                width:screenWidth, 
                height:screenHeight * 0.7,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 13, 
                  marginRight: 39,
                  marginLeft: 39,
                }}>
                <View>
                 <Text style={styles.ModalHeaderText}>Sort / Filter</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}> 
                  <TouchableWithoutFeedback onPress={() => { this.setModalVisible(false); }}>
                  <Image style={{width:12,height:12,}} source={require('../assets/Icon_Cancel.png')}/>
               </TouchableWithoutFeedback>
                </View>
              </View>
              <View style={{ borderBottomColor: 'rgba(0,0,0,0.16)', borderBottomWidth: 1,marginTop:14.5,}} />
              <View>
                <View style={styles.tabs}>
                  <Text
                    onPress={() => {
                      this.onTabClick(1);
                    }}
                    style={[
                      styles.tabTextSortStyle,
                      this.state.currentTab === 1 ? styles.tabUnderline : null,
                    ]}>
                    Sort
                  </Text>
                  <Text
                    onPress={() => {
                      this.onTabClick(2);
                    }}
                    style={[
                      styles.tabTextCuisineStyle,
                      this.state.currentTab === 2 ? styles.tabUnderline : null,
                    ]}>
                    Cuisine
                  </Text>
                  <Text
                    onPress={() => {
                      this.onTabClick(3);
                    }}
                    style={[
                      styles.tabTextFilterStyle,
                      this.state.currentTab === 3 ? styles.tabUnderline : null,
                    ]}>
                    Filter
                  </Text> 
                </View>

                {this.state.currentTab === 1 && (
                  <View style={{width:124,height:118,marginLeft:30,marginTop:40,marginBottom:50.5}}>
                    {checkboxValue.map((option, indexInArray) => {
                return (
                  <CircleCheckBox
                    key={option.value}
                    checked={option.value === selectedCheckbox.value} // for current element
                    onToggle={(value, index) => this.CheckMe(option)} // pass index of toggled element
                    labelPosition={LABEL_POSITION.RIGHT}
                    label={option.label}
                    outerColor="#E03C34"
                    innerColor="#E03C34"
                    styleCheckboxContainer={{marginBottom:20}}
                    styleLabel={styles.checkboxlbel}
                  />
                );
              })} 
                  </View>
                )}

                {this.state.currentTab === 2 && (
                  <View style={{width:124,height:118,marginLeft:30,marginTop:40,marginBottom:50.5}}>
                    {checkValue.map((option, indexInArray) => {
                return (
                  <CircleCheckBox
                    key={option.value}
                    checked={option.value === selectedCheckbox1.value} // for current element
                    onToggle={(value, index) => this.CheckMe1(option)} // pass index of toggled element
                    labelPosition={LABEL_POSITION.RIGHT}
                    label={option.label}
                    outerColor="#E03C34"
                    innerColor="#E03C34"
                    styleCheckboxContainer={{marginBottom:20}}
                    styleLabel={styles.checkboxlbel}
                  />
                );
              })}
                  </View>
                )}

                {this.state.currentTab === 3 && (
                  <View style={{width:375,height:118,marginLeft:30,marginTop:40,marginBottom:50.5}}>
                   <ScrollView
        ref={c => {
          this.scrollView = c;
        }}
        style={{ flex: 1, backgroundColor: 'white' }}
      >
                    {SortValue.map((option, indexInArray) => {
                return (
                  <CircleCheckBox
                    key={option.value}
                    checked={option.value === sortselectedCheckbox.value} // for current element
                    onToggle={(value, index) => this.SortCheckMe(option)} // pass index of toggled element
                    labelPosition={LABEL_POSITION.RIGHT}
                    label={option.label}
                    outerColor="#E03C34"
                    innerColor="#E03C34"
                    styleCheckboxContainer={{marginBottom:20}}
                    styleLabel={styles.checkboxlbel}
                  />
                );
              })}
              </ScrollView>
                  </View>
                )}
                {this.state.currentTab === 4 && (
                  <View>
                    <Text>SORT</Text>
                  </View>
                )}
              </View>

              <View />
              <View style={{ borderBottomColor: 'rgba(0,0,0,0.16)', borderBottomWidth: 1,marginTop:14.5,}} />
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={[
                    styles.buttonStyle,
                    {
                      marginTop: 20,
                      backgroundColor: 'red',
                      flex: 1,
                      marginRight: 18,
                      marginLeft: 33,
                    },
                  ]}
                  onPress={() => { this.setModalVisible(false); }}>
                  <Text style={styles.buttontextmodal}>
                    Clean All
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.buttonStyle,
                    {
                      marginTop: 20,
                      backgroundColor: 'red',
                      flex: 1,
                      marginRight: 32, 
                    },
                  ]}
                  onPress={() => { this.setModalVisible(false); }}>
                  <Text style={styles.buttontextmodal}>APPLY</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          </TouchableWithoutFeedback>
        </Modal>
      );
  }

    render() {  
        return (
            <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.container}>
        <Card style={styles.card} >
             <View >
                <View style={{flexDirection:"row",marginTop:25.8}}>
                    <View style={{flex:1.2,flexDirection:"row",paddingTop:9.2,backgroundColor:'rgb(244,244,220)',paddingBottom:9,borderWidth: 1,borderColor:'rgb(231,234,240)'}}>
                    <View style={{flex:0.5,alignSelf:'center'}}>
                        <Image style={{width:50,height:17,}} source={require('../assets/Paytm-Logo-With-White-Border-PNG-image-715x227.png')}/>
                    </View>
                    <View style={{flex:0.7,alignSelf:'center'}}>
                       <TouchableWithoutFeedback onPress={() => { this.setModalVisible(true); }}>
                        <Text style={styles.boldText}>PMNEWAPR</Text>
                        </TouchableWithoutFeedback>
                    </View> 
                    </View>
                    <View style={{flex:0.8,alignSelf:'center'}}>
                        <Text style={styles.normalText}>APPLY</Text>
                    </View>
                </View>
                  {this.renderModal()}
                <Text style={styles.paragraph}>Get 50% discount using Paytm</Text>
                <Text style={styles.paragraph1}>Use code PMNEWAPR & get flat Rs.50 cashback on
  }
 you orders  above Rs.419</Text>
              </View>
            </Card>
        </View>
        </SafeAreaView>
        );
    }
} 
OffersView.propTypes = {
    onLogin: PropTypes.func,
    isLoading: PropTypes.bool, 
};

export default OffersView;
