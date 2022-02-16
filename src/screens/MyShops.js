import React, { useState, useEffect } from 'react';

import { Image, View, Text, TextInput, TextInputBase, ScrollView } from 'react-native';


import STYLES from '../STYLES';
import COLORS from '../utilities/colors/Color';
import Svgs from '../utilities/svgs/Svgs';
import { DataTable, TouchableRipple } from 'react-native-paper';
import Button1 from '../comp/Button1';

import Header from '../comp/Header';
import { SvgXml } from 'react-native-svg';
const MyShops = ({ navigation }) => {
    var shopRecords = [
        {
            id: '4',
            managerName: 'Manager Name',
            shopName: 'Shop Name',

        },
        {
            id: '5',
            managerName: 'Manager Name',
            shopName: 'Shop Name',
        },
        {
            id: '6',
            managerName: 'Manager Name',
            shopName: 'Shop Name',
        },
    ];
    return (
        <View style={STYLES.withoutpaddingcontainer}>

            <View style={[{
                flex: 0.2, backgroundColor: COLORS.green074B08,
                //justifyContent: 'center', 
                paddingLeft: '10%',

            }]}>
                <Header xml={Svgs.goBack} xml1={Svgs.myShope}
                    text="My Shops"
                    onPress={() => navigation.goBack()}
                />

            </View>
            <View style={{
                flex: 0.66, //backgroundColor: 'red',
                // paddingHorizontal: '7%'
                marginTop: "5%"
            }}>
                <DataTable style={{}}>
                    <DataTable.Header style={{ borderBottomWidth: 0, }}>
                        <DataTable.Title style={{
                            //   flex: 0.25, //backgroundColor: 'red'
                            justifyContent: 'center'
                        }}>

                            <View style={{

                            }}>
                                <Text style={[STYLES.fontSize17_074B08_Arial_Bold,
                                {
                                    // textAlign: 'center',
                                    // alignSelf: 'stretch',// backgroundColor: 'green'
                                }]}>Id</Text>
                            </View>
                        </DataTable.Title>
                        <DataTable.Title style={{
                            justifyContent: 'center',
                            // backgroundColor: 'red'
                        }} //numberOfLines={2}
                        >
                            <Text style={STYLES.fontSize17_074B08_Arial_Bold}
                            >Manager</Text>
                        </DataTable.Title>
                        <DataTable.Title style={{ justifyContent: 'center' }}
                        >
                            <Text style={STYLES.fontSize17_074B08_Arial_Bold}>Name</Text>
                        </DataTable.Title>
                        <DataTable.Title style={{ justifyContent: 'center' }}
                        >
                            <Text style={STYLES.fontSize17_074B08_Arial_Bold}>Edit</Text>
                        </DataTable.Title>
                        <DataTable.Title style={{ justifyContent: 'center' }}
                        >
                            <Text style={STYLES.fontSize17_074B08_Arial_Bold}>Action</Text>
                        </DataTable.Title>
                    </DataTable.Header>
                    {
                        shopRecords.map((records) => {
                            return (
                                <View key={records.id}>
                                    <DataTable.Row style={{
                                        borderBottomWidth: 0, height: 70
                                    }} >
                                        <DataTable.Cell style={{ justifyContent: 'center' }}>
                                            <Text style={STYLES.fontSize18_black161923_Arial_400}>{records.id}</Text></DataTable.Cell>
                                        <DataTable.Cell style={{
                                            justifyContent: 'center',
                                            //backgroundColor: 'green'
                                        }}>


                                            <Text style={STYLES.fontSize18_black161923_Arial_400}>{records.managerName}
                                            </Text>

                                        </DataTable.Cell>
                                        <DataTable.Cell style={{ justifyContent: 'center' }} ><Text
                                            style={STYLES.fontSize18_black161923_Arial_400}>{records.shopName}</Text></DataTable.Cell>


                                        <DataTable.Cell style={{
                                            justifyContent: 'center'

                                        }}>

                                            <TouchableRipple style={{


                                            }} onPress={() => navigation.navigate("EditShops")}>
                                                <SvgXml xml={Svgs.Edit} />
                                            </TouchableRipple>


                                        </DataTable.Cell>
                                        <DataTable.Cell style={{ justifyContent: 'center' }}>
                                            <TouchableRipple style={{
                                                borderRadius: 10,
                                                backgroundColor: COLORS.green074B08,
                                                width: 54, height: 23, justifyContent: 'center',
                                                alignItems: 'center'
                                            }} onPress={() => navigation.navigate("ManageShop")}>
                                                <Text style={STYLES.fontSize11_whiteFFFFFF_Arial_Bold}>Manage</Text>
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
                    marginBottom: '5%',
                    // backgroundColor: 'pink'
                }}>
                    <Button1 text="Create New Shop"
                        onPress={() => navigation.navigate("AddShop")} />
                </View>

            </View>
        </View >
    );
};

MyShops.propTypes = {

};

export default MyShops;