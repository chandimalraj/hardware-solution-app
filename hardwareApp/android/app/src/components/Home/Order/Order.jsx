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

export default function Order() {
  const items = useSelector(state => state?.order?.items);
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
    setItemList(prevItems =>
      prevItems.filter((_, index) => index !== draggingIndex),
    );
    dispatch(removeItem(itemList[draggingIndex]));
    ToastAndroid.show('Item Removed Successfully', ToastAndroid.SHORT);
  };
  return (
    <View style={styles.maincontainer}>
      <Text>Order</Text>
      <ScrollView
        style={styles.Scrollcontainer}
        contentContainerStyle={{alignItems: 'center'}}>
        {itemList.map((item, index) => (
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
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    marginLeft: 20,
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
    marginBottom: 20,
    width: width * 0.9,
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
});
