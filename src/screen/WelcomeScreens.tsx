import * as React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Images} from '../assets/images';
import {ScaledSheet} from 'react-native-size-matters';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.bg_welcome}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.ViewContent}>
          <Text style={styles.Text1}>Welcome to</Text>
          <Text style={styles.Text2}>GetFit</Text>
          <Text style={styles.Text3}>
            Discover the best shape of your body.Click below to continue.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignIn SignUp');
          }}
          style={styles.button}>
          <View style={styles.buttonContent}>
            <Text style={styles.textButton}>CONTINUE </Text>
            <Image
              style={styles.icon}
              source={Images.ic_continute}
              resizeMode={'cover'}
            />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '80%',
    height: '55@s',
    margin: '10%',
    borderRadius: 17,
    bottom: 1,
  },
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  textButton: {
    fontSize: 20,
    color: 'black',
  },
  ViewContent: {
    flex: 1,
    width: '80%',
    margin: '20%',
    height: '50%',
    justifyContent: 'center',
  },
  Text1: {
    fontSize: 30,
    color: 'white',
  },
  Text2: {
    fontSize: 30,
    color: 'red',
  },
  Text3: {
    fontSize: 15,
    color: 'white',
  },
  icon: {},
});

export default WelcomeScreen;
