import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('window');

const dataItemView = ({item}) => {
  return (
    <TouchableOpacity>
      <View style={styles.itemView}>
        <Text style={styles.itemTxt}>{item.customerName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function SelectCustomer({navigation}) {
  const data = [
    {
      customerName: 'ABC Hardware ,No 49/A Kandy Road',
    },
    {
      customerName: 'ABC Hardware ,No 49/A Kandy Road',
    },
    {
      customerName: 'ABC Hardware ,No 49/A Kandy Road',
    },
    {
      customerName: 'ABC Hardware ,No 49/A Kandy Road',
    },
    {
      customerName: 'ABC Hardware ,No 49/A Kandy Road',
    },
    {
      customerName: 'ABC Hardware ,No 49/A Kandy Road',
    },
    {
      customerName: 'ABC Hardware ,No 49/A Kandy Road',
    },
    {
      customerName: 'ABC Hardware ,No 49/A Kandy Road',
    },
    {
      customerName: 'ABC Hardware ,No 49/A Kandy Road',
    },
    {
      customerName: 'ABC Hardware ,No 49/A Kandy Road',
    },
    {
      customerName: 'ABC Hardware ,No 49/A Kandy Road',
    },
    {
      customerName: 'ABC Hardware ,No 49/A Kandy Road',
    },
    {
      customerName: 'ABC Hardware ,No 49/A Kandy Road',
    },
    {
      customerName: 'ABC Hardware ,No 49/A Kandy Road',
    },
    {
      customerName: 'ABC Hardware ,No 49/A Kandy Road',
    },
    {
      customerName: 'ABC Hardware ,No 49/A Kandy Road',
    },
  ];

  const redirectToNewCustomer = () => {
    navigation.navigate('NewCustomer');
  };
  return (
    <View style={styles.maincontainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Search Customer"
        InputProps={{disableUnderline: true}}
        underlineColor="transparent"
      />
      <Text style={styles.buttonText}>Or</Text>
      <TouchableOpacity style={styles.cardbutton} onPress={() => redirectToNewCustomer()}>
        <LinearGradient
          // start={{x: 0.0, y: 0.25}}
          // end={{x: 0.5, y: 1.0}}
          locations={[0, 0.5, 0.6]}
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <Image
            source={require('../../../assets/icons/Add.png')}
            style={{width: 25, height: 25}}
          />
          <Text style={styles.btnText}>Enter New Customer</Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.listContainer}>
        <FlatList
          renderItem={dataItemView}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatList}
        />
      </View>
      <TouchableOpacity style={styles.loadbutton} onPress={() => login()}>
        <LinearGradient
          // start={{x: 0.0, y: 0.25}}
          // end={{x: 0.5, y: 1.0}}
          locations={[0, 0.5, 0.6]}
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <Image
            source={require('../../../assets/icons/Load.png')}
            style={{width: 25, height: 25}}
          />
          <Text style={styles.btnText}>Load More</Text>
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
    paddingBottom: 230,
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
  linearGradient: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    // paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    fontWeight: '800',
    textAlign: 'center',
    //marginLeft: 20,
    color: '#ffffff',
    backgroundColor: 'transparent',
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
  btnText: {
    marginLeft: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    color: '#fff',
    fontSize: 15,

    //color:''
  },
  listContainer: {
    display: 'flex',
    //backgroundColor:'red',
    width: '90%',
    //paddingBottom:40
  },
  //   flatList: {paddingBottom: 50, },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    //elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    //shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 8,
    marginBottom: 5,
    width: width * 0.9,
    height: 70,
  },
  itemTxt: {
    fontSize: 17,
    fontWeight: '700',
    color: 'black',
  },
  loadbutton: {
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
    width: width * 0.5,
  },
});
