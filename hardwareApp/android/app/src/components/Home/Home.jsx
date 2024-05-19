import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tools from '../../assets/icons/Tools.png';
import addOrder from '../../assets/icons/AddFile.png';
import addCustomer from '../../assets/icons/New.png';
import customers from '../../assets/icons/Supplier.png';
import search from '../../assets/icons/Search.png';
import whatsApp from '../../assets/icons/WhatsApp.png';
import cart from '../../assets/icons/Cart.png';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

export default function Home({navigation}) {
  const menuItems = [
    // {name: 'Categories', icon: tools, link: 'Catogeries'},
    {name: 'New Order', icon: addOrder,link: 'Catogeries'},
    {name: 'Current Order', icon: cart,link: 'Order'},
    {name: 'New Customer', icon: addCustomer},
    {name: 'Customers', icon: customers},
    {name: 'Search Items', icon: search},
  ];

  const handleClick = path => {
    navigation.navigate(path);
  };
  return (
    <View style={styles.maincontainer}>
      <ScrollView
        style={styles.Scrollcontainer}
        contentContainerStyle={{alignItems: 'center'}}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            style={styles.card}
            key={index}
            onPress={() => {
              handleClick(item.link);
            }}>
            <LinearGradient
              // start={{x: 0.0, y: 0.25}}
              // end={{x: 0.5, y: 1.0}}
              locations={[0, 0.5, 0.6]}
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.linearGradient}>
              <Image source={item.icon} style={{width: 50, height: 50}} />
              <Text style={styles.buttonText}>{item.name}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button}>
        <LinearGradient
          // start={{x: 0.0, y: 0.25}}
          // end={{x: 0.5, y: 1.0}}
          locations={[0, 0.5, 0.6]}
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <Image source={whatsApp} style={{width: 50, height: 50}} />
          <Text style={styles.buttonText}>Contact Office</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    // paddingBottom: 40,
    backgroundColor: '#9db3ee',
  },
  Scrollcontainer: {
    width: width,
    paddingBottom: 60,
    backgroundColor: '#9db3ee',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 8,
    marginBottom: 12,
    width: width * 0.9,
    // paddingTop: 20,
    // paddingBottom: 20,
  },
  item: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 20,
    color: '#296ce7',
    fontFamily: 'Roboto-Bold',
  },
  linearGradient: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    // paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    marginLeft: 20,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  button: {
    position: 'absolute',
    bottom: 20, // Adjust this value to set the distance from the bottom
    right: 20, // Adjust this value to set the distance from the right
    //backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
});
