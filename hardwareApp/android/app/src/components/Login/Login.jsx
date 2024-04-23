import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

export default function Login({navigation}) {
  const [userName, setUserName] = useState('');
  const [userpassword, setUserPassword] = useState('');

  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);

  const handleFocus1 = () => setIsFocused1(true);
  const handleBlur1 = () => setIsFocused1(false);

  const handleFocus2 = () => setIsFocused2(true);
  const handleBlur2 = () => setIsFocused2(false);

  const [isModalVisible, setModalVisible] = useState(false);

  const handleTouch = () => {
    Keyboard.dismiss();
  };
  const hideModel = () => {
    setModalVisible(false);
  };

  const login = () => {
    if (userName.length == 0 || userpassword.length == 0) {
      setModalVisible(true);
      return;
    } else {
      //login process
      //navigate to the home screen
      navigation.navigate('Home');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleTouch}>
      <View style={styles.maincontainer}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/icons/LockNew.png')}
              style={{width: 100, height: 100}}
            />
          </View>

          <TextInput
            style={[styles.card, isFocused1 && styles.in2]}
            placeholder="Username"
            onFocus={handleFocus1}
            onBlur={handleBlur1}
            onChangeText={text => setUserName(text)}
          />
          <TextInput
            style={[styles.card, isFocused2 && styles.in2]}
            placeholder="Password"
            onFocus={handleFocus2}
            onBlur={handleBlur2}
            onChangeText={text => setUserPassword(text)}
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.cardbutton} onPress={() => login()}>
            <LinearGradient
              // start={{x: 0.0, y: 0.25}}
              // end={{x: 0.5, y: 1.0}}
              locations={[0, 0.5, 0.6]}
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.linearGradient}>
              <Image
                source={require('../../assets/icons/Login.png')}
                style={{width: 25, height: 25}}
              />
              <Text style={styles.btnText}>Log In</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <Modal
          isVisible={isModalVisible}
          animationIn="fadeIn"
          animationOut="slideOutDown"
          // You can change the animationType to slide or fade
          transparent={true}
          backdropTransitionOutTiming={0}
          animationOutTiming={700}
          onBackdropPress={() => setModalVisible(false)}>
          <View style={styles.modelContainer}>
            <Text style={styles.modelTxt}>
              Please Enter Correct Credentials!
            </Text>

            <TouchableOpacity
              style={styles.modalbutton}
              onPress={() => hideModel()}>
              <LinearGradient
                // start={{x: 0.0, y: 0.25}}
                // end={{x: 0.5, y: 1.0}}
                locations={[0, 0.5, 0.6]}
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.linearGradient}>
                <Image
                  source={require('../../assets/icons/Warning.png')}
                  style={{width: 25, height: 25}}
                />
                <Text style={styles.btnText}>Ok</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
    backgroundColor: '#9db3ee',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loginContainer: {
    color: 'red',
    flex: 1,
    justifyContent: 'center',
  },
  card: {
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
    marginBottom: 20,
    width: width * 0.9,
    fontSize: 18,
  },
  in2: {
    borderColor: '#42b72a',
  },
  imageContainer: {
    marginBottom: 60,
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
  modelTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  modalbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#4788bd',
    borderRadius: 10,
    //elevation: 5,
    shadowColor: '#000',
    //shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 10,
    // marginBottom: 20,
    width: 200,
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
    textAlign: 'center',
    marginLeft: 20,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
