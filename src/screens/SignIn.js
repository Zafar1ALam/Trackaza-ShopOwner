import React, { useState, useEffect } from 'react';

import { Image, View, Text, TextInput, TextInputBase, ScrollView, TouchableOpacity } from 'react-native';

import { SvgXml } from 'react-native-svg';
import TextInput1 from '../comp/TextInput1';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { Checkbox, TouchableRipple } from 'react-native-paper';
import Button1 from '../comp/Button1';

const SignIn = ({ navigation }) => {


    return (
        <ScrollView>
            <View style={STYLES.container}>
                <View style={{
                    //backgroundColor: 'red', 
                    flex: 1,
                    // alignItems: 'center',
                }}>
                    <View style={{
                        flex: 0.35,//backgroundColor: 'green',
                        justifyContent: 'center',
                        alignSelf: 'center', //marginTop: '15%'
                    }}>
                        <SvgXml xml={Svgs.logoSSFR} style={{ alignSelf: 'center' }} />
                        <Text style={STYLES.fontSize25_074B08_Arial_Bold}>Trackaza</Text>

                    </View>
                    <View style={{ //backgroundColor: 'red',
                        flex: 0.45
                    }}>
                        <View style={{ marginBottom: '5%' }}>
                            <TextInput1 placeholder='Email' xml={Svgs.logoHuman} />
                        </View>

                        <View style={{ marginBottom: '5%' }}>
                            <TextInput1 placeholder='Password' xml={Svgs.logoHuman} />
                        </View>
                        <TouchableRipple onPress={() => navigation.navigate("ForgotPassword")}
                            style={{ alignSelf: 'flex-end' }}>
                            <Text style={[STYLES.fontSize12_black1C1A1A_Arial_400, { alignSelf: 'flex-end' }]}>Forgot Password?</Text>
                        </TouchableRipple>

                    </View>
                    <View style={{
                        //backgroundColor: 'orange',
                        justifyContent: 'flex-end',
                        flex: 0.2,
                    }}>
                        <Button1 text="SIGNIN" onPress={() => {
                            navigation.navigate("Welcome")

                        }} />
                        <TouchableOpacity onPress={() => { navigation.navigate("SignUp") }}>
                            <Text style={[{
                                marginVertical: '8%',
                                alignSelf: 'center'
                            }, STYLES.fontSize15_grey707070_Arial_400]}>Dont have an account Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

SignIn.propTypes = {

};

export default SignIn;