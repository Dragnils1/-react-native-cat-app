import * as React from 'react'

import {
    View, Text, Button, Vibration, Image,
    TextInput, ScrollView, FlatList, StyleSheet,
    Platform, SafeAreaView, StatusBar, Switch
} from 'react-native'

export default function DetailsScreen({ route, navigation }) {
    /* 2. Get the param */
    const { itemId, otherParam } = route.params;

    const [count, setCount] = React.useState(0);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button onPress={() => setCount(c => c + 1)} title="Update count" />
            ),
        });
    }, [navigation]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Text>Count: {count}</Text>
            <Button
                title="Go to Details... again"
                onPress={() =>
                    navigation.push('Details', {
                        itemId: Math.floor(Math.random() * 100),
                    })
                }
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}