import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { Header } from "../../components/"
import { styles } from "./HomeScreen.styles"


function HomeScreen({ navigation }: { navigation: NavigationProp<any, any> }) {


    return (
        <SafeAreaView>
            <ScrollView style={styles.screen}>
                <Header />
            </ScrollView>
        </SafeAreaView>

    );
}


export default HomeScreen