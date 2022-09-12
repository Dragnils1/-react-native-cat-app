import {
    View, Text, Button, Vibration, Image,
    TextInput, ScrollView, FlatList, StyleSheet,
    Platform, SafeAreaView, StatusBar, Switch
} from 'react-native'

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }}
            />
            <Button title="Go to Cat" onPress={() => navigation.navigate('Cat')} />
            <Button title="NastedCat" onPress={() => navigation.navigate('NastedCat')} />
            <Button title="Go to About" onPress={() => navigation.navigate('About')} />
        </View>
    );
}