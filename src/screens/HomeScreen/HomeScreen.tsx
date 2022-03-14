import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Header } from "../../components/"
import { styles } from "./HomeScreen.styles"
import { Typography } from "../../styles"


function HomeScreen({ navigation }: { navigation: NavigationProp<any, any> }) {


    return (
        <SafeAreaView>
            <ScrollView style={styles.screen}>
                <Header />
                <View style={styles.title}>
                    <Text style={Typography.title}>createShipment'</Text>
                    <Text style={Typography.subTitle}>Step 1 of 6 &bull; shipper</Text>
                </View>

                <Text style={styles.heading}>
                    Indicates Required fields
                </Text>
            </ScrollView>
        </SafeAreaView>

    );
}


export default HomeScreen