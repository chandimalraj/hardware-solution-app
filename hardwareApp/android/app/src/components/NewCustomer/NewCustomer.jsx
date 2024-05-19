import React from 'react';
import {Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('window');

export default function NewCustomer() {
  return (
    <View style={styles.maincontainer}>
      <Text style={styles.headingTxt}>Enter New Hardware</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Hardware Name"
        InputProps={{disableUnderline: true}}
        underlineColor="transparent"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Address"
        InputProps={{disableUnderline: true}}
        underlineColor="transparent"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Owner Name"
        InputProps={{disableUnderline: true}}
        underlineColor="transparent"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Owner NIC"
        InputProps={{disableUnderline: true}}
        underlineColor="transparent"
      />
      <TouchableOpacity style={styles.cardbutton} >
        <LinearGradient
          // start={{x: 0.0, y: 0.25}}
          // end={{x: 0.5, y: 1.0}}
          locations={[0, 0.5, 0.6]}
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <Image
            source={require('../../assets/icons/Add.png')}
            style={{width: 25, height: 25}}
          />
          <Text style={styles.btnText}>Submit</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#9db3ee',
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 15,
    marginBottom: 10,
    width: width * 0.9,
    fontSize: 18,
  },
  headingTxt: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    fontWeight: '800',
    textAlign: 'center',
    //marginLeft: 20,
    //color: '#ffffff',
    backgroundColor: 'transparent',
    marginBottom: 50,
    marginTop: 20,
  },
  linearGradient: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    // paddingRight: 15,
    borderRadius: 5,
  },
  btnText: {
    marginLeft: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    color: '#fff',
    fontSize: 15,

    //color:''
  },
  cardbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#42b72a',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#ffffff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 5,
    // marginBottom: 20,
    width: width * 0.9,
  },
});
