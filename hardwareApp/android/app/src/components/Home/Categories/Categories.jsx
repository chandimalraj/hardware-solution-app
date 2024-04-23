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
import tools from '../../../assets/icons/Tools.png';
import chem from '../../../assets/icons/Chem.png';
import plumb from '../../../assets/icons/Plumb.png';
import beam from '../../../assets/icons/Beam.png';
import electrical from '../../../assets/icons/Disconnected.png';
import nut from '../../../assets/icons/NutAndBolt.png';
import more from '../../../assets/icons/More.png';
import LinearGradient from 'react-native-linear-gradient';

const {height, width} = Dimensions.get('window');

export default function Categories({navigation}) {
  const handleClick = (path ,value)=> {
    navigation.navigate(path, {
        // Pass values as parameters
        category: value,
        
      });
  };
  return (
    <View style={styles.maincontainer}>
      <ScrollView
        style={styles.Scrollcontainer}
        contentContainerStyle={{alignItems: 'center'}}>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.card} onPress={()=>handleClick('Dynamic','Hardware')}>
            <LinearGradient
              // start={{x: 0.0, y: 0.25}}
              // end={{x: 0.5, y: 1.0}}
              locations={[0, 0.5, 0.6]}
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.linearGradient}>
              <Image source={tools} style={{width: 50, height: 50}} />
              <Text style={styles.buttonText}>Hardware</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={()=>handleClick('Dynamic','Chemical')}>
            <LinearGradient
              // start={{x: 0.0, y: 0.25}}
              // end={{x: 0.5, y: 1.0}}
              locations={[0, 0.5, 0.6]}
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.linearGradient}>
              <Image source={chem} style={{width: 50, height: 50}} />
              <Text style={styles.buttonText}>Chemical</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.card} onPress={()=>handleClick('Dynamic','Steel')}>
            <LinearGradient
              // start={{x: 0.0, y: 0.25}}
              // end={{x: 0.5, y: 1.0}}
              locations={[0, 0.5, 0.6]}
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.linearGradient}>
              <Image source={beam} style={{width: 50, height: 50}} />
              <Text style={styles.buttonText}>Steel</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={()=>handleClick('Dynamic','PCV')}>
            <LinearGradient
              // start={{x: 0.0, y: 0.25}}
              // end={{x: 0.5, y: 1.0}}
              locations={[0, 0.5, 0.6]}
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.linearGradient}>
              <Image source={tools} style={{width: 50, height: 50}} />
              <Text style={styles.buttonText}>PVC</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.card} onPress={()=>handleClick('Dynamic','Electrical')}>
            <LinearGradient
              // start={{x: 0.0, y: 0.25}}
              // end={{x: 0.5, y: 1.0}}
              locations={[0, 0.5, 0.6]}
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.linearGradient}>
              <Image source={electrical} style={{width: 50, height: 50}} />
              <Text style={styles.buttonText}>Electrical</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={()=>handleClick('Dynamic','Bolt & Nuts')}>
            <LinearGradient
              // start={{x: 0.0, y: 0.25}}
              // end={{x: 0.5, y: 1.0}}
              locations={[0, 0.5, 0.6]}
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.linearGradient}>
              <Image source={nut} style={{width: 50, height: 50}} />
              <Text style={styles.buttonText}>Bolt & Nuts</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.card} onPress={()=>handleClick('Dynamic','Plumbing')}>
            <LinearGradient
              // start={{x: 0.0, y: 0.25}}
              // end={{x: 0.5, y: 1.0}}
              locations={[0, 0.5, 0.6]}
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.linearGradient}>
              <Image source={plumb} style={{width: 50, height: 50}} />
              <Text style={styles.buttonText}>Plumbing</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={()=>handleClick('Dynamic','Other')}>
            <LinearGradient
              // start={{x: 0.0, y: 0.25}}
              // end={{x: 0.5, y: 1.0}}
              locations={[0, 0.5, 0.6]}
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={styles.linearGradient}>
              <Image source={more} style={{width: 50, height: 50}} />
              <Text style={styles.buttonText}>Other</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  Scrollcontainer: {
    width: width,
    paddingBottom: 60,
    backgroundColor: '#9db3ee',
    display: 'flex',
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
    width: width * 0.4,
    height: 150,
    marginRight: 10,
    // paddingTop: 20,
    // paddingBottom: 20,
  },
  item: {
    fontSize: 20,
    fontWeight: '600',
    //marginLeft: 20,
    color: '#296ce7',
    fontFamily: 'Roboto-Bold',
  },
  linearGradient: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',

    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    //marginLeft: 20,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
