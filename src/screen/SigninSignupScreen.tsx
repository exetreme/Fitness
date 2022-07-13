import * as React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {Images} from '../assets/images';
import {ScaledSheet} from 'react-native-size-matters';

const SigninSignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.bg_login}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.ViewContent}>
          <Text style={styles.Text1}>Fitness at your</Text>
          <Text style={styles.Text2}>fingertips</Text>
          <Text style={styles.Text3}>
            Spend some fun time at gym with anytime training anywhere!
          </Text>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => {
              navigation.navigate('SignIn');
            }}>
            <View style={styles.buttonContent}>
              <Text style={styles.textButton}>SIGN IN</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSignup}
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <View style={styles.buttonContent}>
              <Text style={styles.textButton}>SIGN UP</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.viewsignupfree}>
            <Text style={styles.textdon}>Don’t have account? </Text>
            <TouchableOpacity>
              <Text style={styles.textfree}>Sign up for free</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  buttonLogin: {
    flex: 1,
    backgroundColor: 'white',
    height: '40@s',
    width: '80%',
    marginBottom: 10,
    marginLeft: '10%',
    borderRadius: 17,
    bottom: 1,
  },
  buttonSignup: {
    flex: 1,
    backgroundColor: 'white',
    height: '40@s',
    borderRadius: 17,
    width: '80%',
    marginBottom: 10,
    marginLeft: '10%',
    bottom: 1,
  },
  buttonView: {
    flex: 1,
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
    flex: 2,
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
  viewsignupfree: {
    flex: 1,
    flexDirection: 'row',
    width: '80%',
    marginLeft: '20%',
  },
  textdon: {
    fontSize: 15,
    color: 'white',
  },
  textfree: {
    fontSize: 15,
    color: 'white',
  },
});

export default SigninSignupScreen;
