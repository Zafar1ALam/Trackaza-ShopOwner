import React, { useState, useEffect } from 'react';

import { Image, View, Text, TextInput } from 'react-native';

import { SvgXml } from 'react-native-svg';
import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
const TextInput1 = props => {
    return (
        <View style={{
            borderRadius: 29,
            borderWidth: 1, borderColor: COLORS.black1A1A1A,
            flexDirection: 'row', paddingHorizontal: '5%',
            //paddingVertical: '5%', 
            alignItems: 'center',
        }}>
            <SvgXml xml={props.xml} />
            <TextInput placeholder={props.placeholder} style={[STYLES.fontSize15_grey707070_Arial_400, { marginLeft: '5%' }]} />
        </View>
    );
};

TextInput1.propTypes = {

};

export default TextInput1;