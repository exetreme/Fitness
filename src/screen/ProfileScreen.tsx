import * as React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Images} from '../assets/images';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texttitle}>Profile</Text>
      <View>
        <Image source={Images.im_avatar} />
        <View>
          <Text>Full Name</Text>
        </View>
      </View>
      <TouchableOpacity>
        <Text style={styles.textfree}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
    flex: 1,
    width: '80%',
    margin: '20%',
    height: '50%',
    justifyContent: 'center',
  },
  texttitle: {
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
  textdon: {
    fontSize: 15,
    color: 'white',
  },
  textfree: {
    fontSize: 15,
    color: 'red',
    maginLeft: '40%',
  },
  label1: {
    color: 'white',
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
});

export default ProfileScreen;
