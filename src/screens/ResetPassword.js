import React, { useState, useEffect } from 'react';

import { Image, View, Text, TextInput, TextInputBase, ScrollView } from 'react-native';

import { SvgXml } from 'react-native-svg';
import TextInput1 from '../comp/TextInput1';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { Checkbox, TouchableRipple } from 'react-native-paper';
import Button1 from '../comp/Button1';
import AntDesign from 'react-native-vector-icons/AntDesign'

const ResetPassword = ({ navigation }) => {


    return (
        <ScrollView>
            <View style={STYLES.container}>
                <View style={{
                    //backgroundColor: 'red', 
                    flex: 1,
                    // alignItems: 'center',
                }}>
                    <TouchableRipple style={{
                        alignSelf: 'flex-start',
                        marginTop: '10%'
                    }}
                        onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={23} color={COLORS.black000000}
                        />
                    </TouchableRipple>
                    <View style={{
                        flex: 0.25,//backgroundColor: 'green',
                        justifyContent: 'center',
                        alignSelf: 'center', //marginTop: '15%'
                    }}>
                        <SvgXml xml={Svgs.logoSSFR} style={{ alignSelf: 'center' }} />
                        <Text style={STYLES.fontSize25_074B08_Arial_Bold}>Trackaza</Text>

                    </View>
                    <View style={{ //backgroundColor: 'red',
                        flex: 0.55
                    }}>
                        <Text style={[STYLES.fontSize21_black1C1A1A_Arial_Bold,
                        { alignSelf: 'center', marginBottom: '15%', marginTop: '7%' }]}>Reset Password</Text>
                        <View style={{ marginBottom: '5%' }}>
                            <TextInput1 placeholder='New Password' xml={Svgs.logoHuman} />
                        </View>

                        <View style={{ marginBottom: '5%' }}>
                            <TextInput1 placeholder='Confirm New Password' xml={Svgs.logoHuman} />
                        </View>

                    </View>
                    <View style={{
                        //  backgroundColor: 'orange',
                        justifyContent: 'flex-end',
                        flex: 0.2, paddingBottom: '15%'
                    }}>
                        <Button1 text="CONTINUE"
                            onPress={() => navigation.navigate("SignIn")} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

ResetPassword.propTypes = {

};

export default ResetPassword;