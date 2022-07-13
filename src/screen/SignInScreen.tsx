import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Images} from '../assets/images';
import {ScaledSheet} from 'react-native-size-matters';
import {Controller, useForm} from 'react-hook-form';

const SignInScreen = ({navigation}) => {
  const {
    register,
    setValue,
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      keyboardShouldPersistTaps="handled">
      <ImageBackground
        source={Images.bg_login}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.ViewContent}>
          <Text style={styles.texttitle}>Sign in and get</Text>
          <Text style={styles.Text2}>started</Text>
          <Text style={styles.Text3}>
            Welcome back! Please enter your details to sign in.
          </Text>
        </View>

        <View style={styles.viewinput}>
          <View style={styles.viewinput1}>
            <Text style={styles.label1}>Email</Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder="Enter your mail"
                  placeholderTextColor={'white'}
                />
              )}
              name="email"
              rules={{required: true}}
            />
          </View>
          <View style={styles.viewinput1}>
            <Text style={styles.label1}>Password</Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                  placeholder="Enter your password"
                  placeholderTextColor={'white'}
                  secureTextEntry={true}
                />
              )}
              name="password"
              rules={{required: true}}
            />
          </View>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.buttonSignup}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <View style={styles.buttonContent}>
              <Text style={styles.textButton}>SIGN IN</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.viewsignupfree}>
            <Text style={styles.textdon}>Don’t have account? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <Text style={styles.textfree}>Sign up for free</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
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
    color: 'red',
  },
  viewinput: {
    flex: 2,
    width: '80%',
    marginLeft: '10%',
    marginBottom: 20,
  },
  viewinput1: {
    flex: 1,
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

export default SignInScreen;
