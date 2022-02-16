import React, { useState, useEffect } from 'react';

import { Image, View, Text, TextInput, TextInputBase, ScrollView } from 'react-native';


import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { DataTable, TouchableRipple } from 'react-native-paper';
import Button1 from '../comp/Button1';

import Header from '../comp/Header';
import ButtonSvg from '../comp/ButtonSvg';
import { SvgXml } from 'react-native-svg';
const ManageManager = ({ navigation }) => {
    var shopRecords = [
        {
            id: '4',
            managerName: 'Name',
            price: 'price',

        },
        {
            id: '5',
            managerName: 'Name',
            price: 'price',
        },
        {
            id: '6',
            managerName: 'Name',
            price: 'price',
        },
    ];
    return (
        <View style={STYLES.withoutpaddingcontainer}>

            <View style={[{
                flex: 0.2, backgroundColor: COLORS.green074B08,
                //justifyContent: 'center', 
                paddingLeft: '10%',

            }]}>
                <Header xml={Svgs.goBack} xml1={Svgs.manageManagers}
                    text="Manage Manager"
                    onPress={() => navigation.goBack()} />

            </View>
            <View style={{
                flex: 0.66, //backgroundColor: 'red',
                // paddingHorizontal: '7%'

                alignItems: 'center',
                // justifyContent: 'center'
            }}>
                <DataTable style={{
                    marginTop: '5%',
                    //width: '95%',
                    //backgroundColor: 'red'
                }}>
                    <DataTable.Header style={{
                        borderBottomWidth: 0
                    }}>
                        <DataTable.Title style={{
                            //  backgroundColor: 'red',
                            justifyContent: 'center'
                        }}>

                            <View style={{
                                //   backgroundColor: 'green'
                            }}>
                                <Text style={[STYLES.fontSize18_074B08_Arial_Bold,
                                {
                                    // 
                                }]}>Id</Text>
                            </View>
                        </DataTable.Title>
                        <DataTable.Title style={{ justifyContent: 'center' }} >
                            <Text style={STYLES.fontSize18_074B08_Arial_Bold}
                            >Name</Text>
                        </DataTable.Title>
                        <DataTable.Title style={{ justifyContent: 'center' }} >
                            <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Picture</Text>
                        </DataTable.Title>
                        <DataTable.Title style={{ justifyContent: 'center' }} >
                            <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Action</Text>
                        </DataTable.Title>

                    </DataTable.Header>
                    {
                        shopRecords.map((records) => {
                            return (
                                <View key={records.id}>
                                    <DataTable.Row
                                        style={{
                                            borderBottomWidth: 0,
                                            height: 80,

                                        }} >
                                        <DataTable.Cell style={{
                                            justifyContent: 'center'
                                        }}>
                                            <Text style={STYLES.fontSize18_black161923_Arial_400}>{records.id}</Text></DataTable.Cell>
                                        <DataTable.Cell style={{ justifyContent: 'center' }} >
                                            <Text style={STYLES.fontSize18_black161923_Arial_400}>{records.managerName}</Text></DataTable.Cell>
                                        <DataTable.Cell style={{

                                            justifyContent: 'center'
                                        }} >
                                            <View style={{
                                                //alignSelf: 'stretch',
                                                //backgroundColor: 'red', //alignSelf: 'center', 
                                                //flex: 1
                                                // width: '30%', height: '30%'
                                            }}>
                                                <Image source={require('../utilities/images/humanBeing.png')}
                                                    style={{
                                                        // flex: 1,
                                                        resizeMode: 'contain',
                                                        flex: 1
                                                    }}
                                                />
                                            </View>


                                        </DataTable.Cell>
                                        <DataTable.Cell style={{
                                            justifyContent: 'center'

                                        }}>

                                            <TouchableRipple style={{


                                            }}
                                                onPress={() => navigation.navigate("EditManager")}>
                                                <SvgXml xml={Svgs.Eye} />
                                            </TouchableRipple>


                                        </DataTable.Cell>



                                    </DataTable.Row>
                                    <View style={{
                                        width: '80%',
                                        alignSelf: 'center',
                                        borderBottomWidth: 1,
                                        borderBottomColor: COLORS.grey707070_51
                                    }}></View>
                                </View>
                            )
                        })
                    }



                </DataTable>

            </View>
            <View style={{
                flex: 0.14, //backgroundColor: 'green',
                justifyContent: 'flex-end',
                paddingHorizontal: '7%'
            }}>

                <View style={{
                    marginBottom: '8%',
                    // backgroundColor: 'pink'
                }}>
                    <ButtonSvg text="Add" xml={Svgs.add}
                        onPress={() => navigation.navigate("AddManager")} />

                </View>

            </View>
        </View >
    );
};

ManageManager.propTypes = {

};

export default ManageManager;