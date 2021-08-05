import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";



const slides = [
  {
    key: "one",
    title: " SHOP FROM YOUR COMFORT ZONE",
    // text:
    //   "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("../images/1.png"),
  },
  {
    key: "two",
    title: "SHOP WITH EASE",
    // text:
    //   "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("../images/2.png"),
  },
  {
    key: "three",
    title: "SHOP ONLINE WITH WOOZEEE",
    //  text:" Next",
    image: require("../images/3.png"),
  },
];

export default class OnboardingScreen extends React.Component {
  state = { showHomePage: false };
  _renderItem = ({ item }) => {
    return (

      
      <View style={{ flex: 1 }}>


<Image
        source={require("../assets/logo.png")}
        style={styles.small}
        />
        <Image
          source={item.image}
          style={{
            resizeMode: "cover",
             height: "200%",
             width: "100%",
             marginTop:"8%"
          }}
        />

<Text style={styles.swipe} >Swipe</Text>

     
        <Text
          style={{
            paddingTop: 5,
            paddingBottom: 5,
            fontSize: 14,
            fontWeight: "bold",
            color: "black",
            alignSelf: "center",
          }}
        >
          {item.title}
        </Text>

        <Text style={{
          textAlign:"center",
          color:"white",
          // fontSize:15,
          width:"50%",
          marginLeft:'auto',
          marginRight:'auto',
          display:"block",
          backgroundColor:"red",
          // paddingHorizontal:10
        }}>
          {item.text}
        </Text>
<Text style={styles.skip} >Skip</Text>


      </View>
    );
  };
  

  render() {
    if (this.state.showHomePage){
      return <App/>
    } else 
    return (
    <AppIntroSlider
      renderItem={this._renderItem} 
      data={slides} 
     
     />
  
    );
  }
}





const styles = StyleSheet.create({
  container: {
    // flex: ,
    padding:'20',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{

    color:'red',
    textTransform:'uppercase',
    fontSize:'2rem',
    marginTop: '3'
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 100,
    
},
small:{
  height:"50%",
  width:"50%",
  display:"block",
  marginLeft:'auto',
  marginRight:'auto',
  marginTop:"2%",
  resizeMode:"contain"



},
swipe:{
  bottom:"10%",
  padding:"5px",
  textDecorationLine:"underline",
  color:"#043E7D",
},
skip:{



  fontSize: 12,
  fontWeight: "bold",
  color: "white",
  alignSelf: "center",
  backgroundColor:"#FF5757",
  marginTop: "10px",
  padding:"5px",
  width:"20%",
  textAlign:"center",
  borderRadius:"20px"

},

});
