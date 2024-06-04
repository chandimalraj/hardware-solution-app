import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  getItemsByCategory,
  getItemsByName,
} from '../../../../services/itemService';
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
import {useSelector, useDispatch} from 'react-redux';
import {addItem} from '../../../../redux/actions/itemAction';
const {height, width} = Dimensions.get('window');

const DataItemView = ({item, navigation}) => {
  //const dispatch = useDispatch();

  const handleAddItem = () => {
    // dispatch(addItem({id: item.id, name: item.name}));
    navigation.navigate('Item', {
      // Pass values as parameters
      item: item,
    });
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handleAddItem();
      }}>
      <View style={styles.itemView}>
        <Image
          source={{uri: item?.image_url}}
          style={{width: width * 0.8, height: width * 0.52}}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.itemTxt}>{item?.name}</Text>
          <Text style={styles.unitTxt}>{item?.unit}</Text>
          <Text style={styles.itemPrice}>
            Rs {parseFloat(item?.price).toFixed(2)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function Dynamic({navigation}) {
  const route = useRoute();
  const {category} = route.params;
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const items = useSelector(state => state?.order?.items);
  const dispatch = useDispatch();

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    try {
      console.log(category.toUpperCase());
      const response = await getItemsByCategory(category.toUpperCase(), page);
      setData(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  const searchItems = async text => {
    try {
      console.log(category.toUpperCase());
      const response = await getItemsByName(text, category.toUpperCase());
      setData(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.maincontainer}>
      <TextInput
        style={styles.textInput}
        placeholder={`Search ${category} Items`}
        InputProps={{disableUnderline: true}}
        underlineColor="transparent"
        onChangeText={text => searchItems(text)}
      />
      <View style={styles.listContainer}>
        <FlatList
          renderItem={({item}) => (
            <DataItemView
              item={item}
              dispatch={dispatch}
              navigation={navigation}
            />
          )}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatList}
        />
      </View>
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
    paddingBottom: 50,
  },
  //   flatList: {paddingBottom: 50, },
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
    // padding: 8,
    marginBottom: 5,
    width: width * 0.9,
    // height: 300,

    // borderColor:'#296ce7',
    // borderWidth:5
  },
  itemTxt: {
    fontSize: 17,
    fontWeight: '700',
    color: 'black',
    marginRight: 10,
  },
  unitTxt: {
    fontSize: 17,
    fontWeight: '700',
    color: 'gray',
    marginRight: 10,
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
});
