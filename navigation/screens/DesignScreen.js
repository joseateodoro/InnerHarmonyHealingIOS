import * as React from 'react';
import { View, Text } from 'react-native';

export default function DesignScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text onPress={() => alert('This is the Home Screen.')}
            style={{ fontSize: 26, fontWeight: 'bold' }}>Desgin Screen</Text>
        </View>
    );
}