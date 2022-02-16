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
const ManageCashier = ({ navigation }) => {
    var shopRecords = [
        {
            id: '4',
            managerName: 'Name',


        },
        {
            id: '5',
            managerName: 'Name',

        },
        {
            id: '6',
            managerName: 'Name',

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
                    text="Manage Cashier"
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
                            justifyContent: 'center',
                            // numberOfLines: 2,

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
                            <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Edit</Text>
                        </DataTable.Title>
                        <DataTable.Title style={{ justifyContent: 'center' }} >
                            <Text style={STYLES.fontSize18_074B08_Arial_Bold}>Delete</Text>
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

                                        }}>

                                            <TouchableRipple style={{


                                            }} onPress={() =>
                                                navigation.navigate("EditCashier")}>
                                                <SvgXml xml={Svgs.Edit} />
                                            </TouchableRipple>


                                        </DataTable.Cell>
                                        <DataTable.Cell style={{
                                            justifyContent: 'center'

                                        }}>

                                            <TouchableRipple style={{


                                            }}>
                                                <SvgXml xml={Svgs.Delete} />
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

                        onPress={() =>
                            navigation.navigate("AddCashier")} />

                </View>

            </View>
        </View >
    );
};


export default ManageCashier;