import React from "react";
import { View } from "react-native";
import { Colors } from '../../styles'
import { Dimensions } from '../../styles'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { styles } from "./Header.style";

const Header = () => (
    <View style={[styles.header, styles.flexer]}>
        <Feather name="menu" size={Dimensions.SIZE_M} color={Colors.BLACK} />
        <View style={styles.flexer}>
            {/* <Image
                style={styles.profileImage}
                source={require('../assets/sophia.jpeg')}
            /> */}
            <AntDesign
                name="caretdown"
                size={Dimensions.SIZE_M}
                color={Colors.BLACK}
            />
        </View>
    </View>
);

export default Header;