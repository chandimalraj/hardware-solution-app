import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {addItem} from '../../../../redux/actions/itemAction';
const {height, width} = Dimensions.get('window');

export default function ItemScreen({navigation}) {
  const route = useRoute();
  const dispatch = useDispatch();
  const {item} = route.params;

  const [quantity, setQuantity] = useState();
  const [total, setTotal] = useState('0');
  console.log(item);
  const totalPriceSet = qty => {
    setQuantity(qty);
    const quantity = parseInt(qty);
    const total = quantity * parseFloat(item?.price);
    console.log(total);
    console.log(total == NaN);
    if (isNaN(total)) {
      setTotal('0');
      return;
    } else {
      setTotal(total.toFixed(2));
    }
  };

  const handleAddItem = () => {
    const itemData = {
      id: item.id,
      name: item.name,
      quantity: quantity,
      totalPrice: total,
    };
    if (parseInt(quantity) > 0) {
      dispatch(addItem(itemData));
      ToastAndroid.show('Item Added Successfully', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Please Enter The Quantity', ToastAndroid.SHORT);
    }
  };

  const backToItems = () => {
    navigation.navigate('Dynamic', {
      // Pass values as parameters
      category: item?.category,
    });
  };

  const viewOrder = () => {
    navigation.navigate('Order');
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.itemView}>
        <Image
          source={{uri: item?.image_url}}
          style={{width: 250, height: 250}}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.itemTxt}>{item?.name}</Text>
          <Text style={styles.itemPrice}>
            Rs {parseFloat(item?.price).toFixed(2)}
          </Text>
        </View>
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.halfContainer}>
          <Text style={styles.itemTxt}>Enter Quantity</Text>
          <TextInput
            style={styles.textInput}
            InputProps={{disableUnderline: true}}
            underlineColor="transparent"
            defaultValue={''}
            value={quantity}
            onChangeText={text => totalPriceSet(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.halfContainer}>
          <Text style={styles.itemTxt}>Total Price</Text>
          <TextInput
            style={styles.textShow}
            InputProps={{disableUnderline: true}}
            underlineColor="transparent"
            editable={false}
            defaultValue={'0'}
            value={total}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.cardbutton}
        onPress={() => {
          handleAddItem();
        }}>
        <LinearGradient
          // start={{x: 0.0, y: 0.25}}
          // end={{x: 0.5, y: 1.0}}
          locations={[0, 0.5, 0.6]}
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <Image
            source={require('../../../../assets/icons/Add.png')}
            style={{width: 25, height: 25}}
          />
          <Text style={styles.btnText}>Add Item To The Order</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardbutton} onPress={backToItems}>
        <LinearGradient
          // start={{x: 0.0, y: 0.25}}
          // end={{x: 0.5, y: 1.0}}
          locations={[0, 0.5, 0.6]}
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <Image
            source={require('../../../../assets/icons/Undo.png')}
            style={{width: 25, height: 25}}
          />
          <Text style={styles.btnText}>Back To Items</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cardbutton} onPress={viewOrder}>
        <LinearGradient
          // start={{x: 0.0, y: 0.25}}
          // end={{x: 0.5, y: 1.0}}
          locations={[0, 0.5, 0.6]}
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <Image
            source={require('../../../../assets/icons/Bill.png')}
            style={{width: 25, height: 25}}
          />
          <Text style={styles.btnText}>View Order</Text>
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
    paddingBottom: 20,
    backgroundColor: '#9db3ee',
  },
  itemView: {
    flexDirection: 'column',
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
    height: 300,
  },
  itemTxt: {
    fontSize: 17,
    fontWeight: '600',
    color: 'black',
    marginRight: 10,
    marginBottom: 10,
  },
  itemPrice: {fontSize: 18, fontWeight: '700', color: 'red'},
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
  infoContainer: {
    flexDirection: 'row',
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
    //width: width * 0.9,
    fontSize: 18,
  },
  textShow: {
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
    //width: width * 0.9,
    fontSize: 18,
    color: 'red',
  },
  dataContainer: {
    flexDirection: 'row',
    width: width * 0.9,
    // alignItems: 'center',
    //  backgroundColor:'red'
  },
  halfContainer: {
    flexDirection: 'column',
    width: '50%',
    padding: 12,
  },
  cardbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#ffffff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 5,
    marginBottom: 20,
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
  linearGradient: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    // paddingRight: 15,
    borderRadius: 5,
  },
});
