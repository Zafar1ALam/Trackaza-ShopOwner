import React, { useState, useEffect } from 'react';

import { Image, View, Text, TextInput, TextInputBase, ScrollView } from 'react-native';

import { SvgXml } from 'react-native-svg';
import TextInput1 from '../comp/TextInput1';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { Checkbox } from 'react-native-paper';
import Button1 from '../comp/Button1';

const SignUp = ({ navigation }) => {
    const [checked, setChecked] = React.useState(false);

    return (
        <ScrollView>
            <View style={STYLES.container}>
                <View style={{
                    //backgroundColor: 'red', 
                    flex: 1,
                    // alignItems: 'center',
                }}>
                    <View style={{
                        flex: 0.35,// backgroundColor: 'green',
                        justifyContent: 'center',
                        alignSelf: 'center', marginTop: '15%'
                    }}>
                        <SvgXml xml={Svgs.logoSSFR} style={{ alignSelf: 'center' }} />
                        <Text style={STYLES.fontSize25_074B08_Arial_Bold}>Trackaza</Text>
                        <Text style={[STYLES.fontSize16_grey1C1939_Arial_Bold,
                        { textAlign: 'center', marginTop: '5%' }]}>Registration</Text>
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
                        <View style={{ marginBottom: '5%' }}>
                            <TextInput1 placeholder='user name' xml={Svgs.logoHuman} />
                        </View>
                        <View style={{
                            flexDirection: 'row', alignItems: 'center',
                            marginLeft: '2%', //backgroundColor: 'red'
                        }}>

                            <Checkbox color={COLORS.green074B08}
                                status={checked ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked(!checked);
                                }}
                            />
                            <Text style={STYLES.fontSize12_black1C1A1A_Arial_400}>Remember Me</Text>
                        </View>
                    </View>
                    <View style={{
                        //  backgroundColor: 'orange',
                        justifyContent: 'flex-end',
                        flex: 0.2, paddingBottom: '15%'
                    }}>
                        <Button1 text="SIGNUP"
                            onPress={() => navigation.navigate("SignIn")} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

SignUp.propTypes = {

};

export default SignUp;