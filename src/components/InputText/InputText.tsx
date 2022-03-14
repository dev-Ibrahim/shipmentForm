import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { styles } from './InputText.style';
import { Typography } from '../../styles';

const Input: React.FC<any> = ({ label, placeholder }: { label: string, placeholder: string }) => (
    <View style={[styles.flexer, styles.inputField]}>
        <View style={styles.inputLabel}>
            <Text style={Typography.label}>{label}</Text>
        </View>
        <View style={styles.input}>
            <TextInput placeholder={placeholder} />
        </View>
    </View>
);

export default Input;

