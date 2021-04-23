import React from 'react';
import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonPros extends TouchableOpacityProps{
    title: string;
}

export function Button({ title, ...rest }: ButtonPros ){
    return(
        <TouchableOpacity style={styles.container} {...rest}>
            <Text style={styles.buttonText}>
                { title }
            </Text>
        </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontFamily: fonts.heading
    }
});