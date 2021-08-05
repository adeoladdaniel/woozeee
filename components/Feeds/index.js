import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
// import StyledButton from "../StyledButton";
// import styles from   './styles';





export default class Feeds extends React.Component{
render(){
  return(
      <View>
        <Text>
          Feeds page
        </Text>
      </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});