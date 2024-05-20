import React, {useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {
  RectButton,
  PanGestureHandler,
  State,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {removeItem} from '../../../redux/actions/itemAction';
const {height, width} = Dimensions.get('window');

export default function Order({navigation}) {
  const items = useSelector(state => state?.order?.items);
  console.log(items);
  const customer = useSelector(state => state?.order?.customer);
  const menuItems = [{id: 1, name: 'asd'}, {id: 2}];

  const [itemList, setItemList] = useState(items);
  const [draggingIndex, setDraggingIndex] = useState(-1);
  const [pan] = useState(new Animated.ValueXY());

  const dispatch = useDispatch();

  const handleGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: pan.x,
          translationY: pan.y,
        },
      },
    ],
    {useNativeDriver: false},
  );

  const onHandlerStateChange = event => {
    console.log(pan.x._value);
    if (event.nativeEvent.state === State.END) {
      if (pan.x._value > width / 2) {
        // Execute your function when item is dragged halfway
        handleHalfwayReached();
      }
      setDraggingIndex(-1);
      pan.setValue({x: 0, y: 0});
    }
  };
  const handleHalfwayReached = () => {
    // Execute your function here
    console.log('Item dragged halfway or more.');
    // setItemList(prevItems =>
    //   prevItems.filter((_, index) => index !== draggingIndex),
    // );
    dispatch(removeItem(items[draggingIndex]));
    ToastAndroid.show('Item Removed Successfully', ToastAndroid.SHORT);
  };

  const addMore = () => {
    navigation.navigate('Catogeries');
  };

  const getTotal = () => {
    let x = 0;
    const total = items.map((item, index) => {
      x = x + parseFloat(item.totalPrice);
    });

    return x.toFixed(2);
  };

  return (
    <View style={styles.maincontainer}>
      <Text style={styles.headingTxt}>Order Details</Text>
      <View style={styles.infoContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{...styles.infoTxt, color: '#082053'}}>Customer - </Text>
          <Text style={{...styles.infoTxt, marginLeft: 10}}>
            {customer?.customer_name}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{...styles.infoTxt, color: '#082053'}}>
            Address{'    - '}
          </Text>
          <Text style={{...styles.infoTxt, marginLeft: 10}}>
            {customer?.customer_address}
          </Text>
        </View>
      </View>
      <ScrollView
        style={styles.Scrollcontainer}
        contentContainerStyle={{alignItems: 'center'}}>
        {items.map((item, index) => (
          <PanGestureHandler
            onGestureEvent={handleGestureEvent}
            onHandlerStateChange={onHandlerStateChange}
            onBegan={() => setDraggingIndex(index)}
            key={index}>
            <Animated.View
              style={[styles.card, draggingIndex === index && pan.getLayout()]}>
              <LinearGradient
                locations={[0, 0.5, 0.6]}
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.linearGradient}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemQuantity}>{item.quantity}</Text>
                <Text style={styles.itemPrice}>
                  {'Rs'} {item.totalPrice}
                </Text>
              </LinearGradient>
            </Animated.View>
          </PanGestureHandler>
        ))}
      </ScrollView>
      <View style={{...styles.btnContainer, justifyContent: 'flex-end'}}>
        <Text style={{...styles.headingTxt, marginRight: 20, fontSize: 18}}>
          Total
        </Text>
        <Text style={styles.totalTxt}>Rs {getTotal()}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.cardbutton} onPress={addMore}>
          <LinearGradient
            // start={{x: 0.0, y: 0.25}}
            // end={{x: 0.5, y: 1.0}}
            locations={[0, 0.5, 0.6]}
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.linearGradient}>
            <Image
              source={require('../../../assets/icons/Add.png')}
              style={{width: 30, height: 30}}
            />
            <Text style={styles.buttonText}>Add More</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardbutton}>
          <LinearGradient
            // start={{x: 0.0, y: 0.25}}
            // end={{x: 0.5, y: 1.0}}
            locations={[0, 0.5, 0.6]}
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={styles.linearGradient}>
            <Image
              source={require('../../../assets/icons/Add.png')}
              style={{width: 30, height: 30}}
            />
            <Text style={styles.buttonText}>Submit</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    paddingBottom: 10,
    backgroundColor: '#9db3ee',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: width * 0.9,
    paddingBottom: 5,
    paddingTop: 5,
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
    padding: 4,
    marginBottom: 12,
    width: width * 0.9,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    marginLeft: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
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
    //marginBottom: 1,
    width: 160,
  },
  itemName: {
    marginLeft: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    color: '#fff',
    fontSize: 15,
    width: '40%',
    //color:''
  },
  itemQuantity: {
    marginLeft: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    color: '#fff',
    fontSize: 15,
    width: '10%',
    //color:''
  },
  itemPrice: {
    marginLeft: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    color: '#fab0b0',
    fontSize: 15,
    // width:'30%'
    //color:''
  },
  linearGradient: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15,
    // paddingRight: 15,
    borderRadius: 5,
  },
  headingTxt: {
    fontWeight: '600',
    alignItems: 'center',
    color: '#000000',
    fontSize: 18,
    // width:200
  },
  infoContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '90%',
    paddingBottom: 15,
    paddingTop: 15,
    backgroundColor: '',
  },
  infoTxt: {
    fontWeight: 'bold',
    alignItems: 'center',
    color: '#666363',
    fontSize: 15,
  },
  totalTxt: {
    fontWeight: 'bold',
    alignItems: 'center',
    color: '#ee1313',
    fontSize: 18,
    width: 150,
  },
});
