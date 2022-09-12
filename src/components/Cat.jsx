import { useState } from 'react';
import { View, Text, Button, Vibration, Image, 
    TextInput, ScrollView, FlatList, StyleSheet, 
    Platform, SafeAreaView, StatusBar, Switch } from 'react-native'

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];


const Cat = ({ navigation }) => {

    const [Reactive, setReactive] = useState('');
    const [isEnabled, setIsEnabled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
    const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    

    function handlePress() {
        Vibration.vibrate(5000)
    }

    const changeStatusBarVisibility = () => setHidden(!hidden);

    const changeStatusBarStyle = () => {
        const styleId = STYLES.indexOf(statusBarStyle) + 1;
        if (styleId === STYLES.length) {
            setStatusBarStyle(STYLES[0]);
        } else {
            setStatusBarStyle(STYLES[styleId]);
        }
    };

    const changeStatusBarTransition = () => {
        const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
        if (transition === TRANSITIONS.length) {
            setStatusBarTransition(TRANSITIONS[0]);
        } else {
            setStatusBarTransition(TRANSITIONS[transition]);
        }
    };


    return(
        <ScrollView >
            
            <View style={page.container}>
                <Text style={flattenStyle}>React Native</Text>
                {isEnabled ? <Image source={require('../../assets/favicon.png')} 
                    onPress={() => alert('this img so cool, isn\'t it?')} /> : null}

                <Text>Flatten Style</Text>
                <Text style={page.code}>
                    {JSON.stringify(flattenStyle, null, 2)}
                </Text>
            </View>
            <View>
                <Text>show img:</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            
            <View style={styles.container}>
                <Text style={styles.title}>Scroll list bellow:</Text>
                <ScrollView

                >
                    {[1, 2, 3, 4, 5].map((el, index) => {
                        return (
                            <Text key={el + index}>
                                {index}: {el}
                            </Text>
                        )
                    })}
                </ScrollView>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Cat Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('About')}
                />
            </View>
            <SafeAreaView style={styles.container2}>
                <StatusBar
                    animated={true}
                    backgroundColor="#61dafb"
                    barStyle={statusBarStyle}
                    showHideTransition={statusBarTransition}
                    hidden={hidden} />
                <Text style={styles.textStyle}>
                    StatusBar Visibility:{'\n'}
                    {hidden ? 'Hidden' : 'Visible'}
                </Text>
                <Text style={styles.textStyle}>
                    StatusBar Style:{'\n'}
                    {statusBarStyle}
                </Text>
                {Platform.OS === 'ios' ? (
                    <Text style={styles.textStyle}>
                        StatusBar Transition:{'\n'}
                        {statusBarTransition}
                    </Text>
                ) : null}
                <View style={styles.buttonsContainer}>
                    <Button
                        title="Toggle StatusBar"
                        onPress={changeStatusBarVisibility} />
                    <Button
                        title="Change StatusBar Style"
                        onPress={changeStatusBarStyle} />
                    {Platform.OS === 'ios' ? (
                        <Button
                            title="Change StatusBar Transition"
                            onPress={changeStatusBarTransition} />
                    ) : null}
                </View>
            </SafeAreaView>
            <TextInput 
                value={Reactive}
                onChangeText={setReactive}
                placeholder='Type here'
                autoComplete={'name'}
                placeholderTextColor={'blue'}
            />
            {Reactive ? <Text ellipsizeMode='head'>{Reactive}</Text> : null}
            
            
            <Button onPress={handlePress} title="Clcik me (sorry press) to start Vibration" color="#841584"/>
            
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        padding: 24,
        backgroundColor: "#eaeaea"
    },
    container2: {
        height: 200,
        justifyContent: 'center',
        backgroundColor: '#ECF0F1'
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    },
    buttonsContainer: {
        padding: 10
    },
    textStyle: {
        textAlign: 'center',
        marginBottom: 8
    }
});

const page = StyleSheet.create({
    container: {
        height: 300,
        padding: 24,
        alignItems: "center"
    },
    text: {
        color: "#000",
        fontSize: 14,
        fontWeight: "bold"
    },
    code: {
        marginTop: 12,
        padding: 12,
        borderRadius: 8,
        color: "#666",
        backgroundColor: "#eaeaea"
    }
});

const typography = StyleSheet.create({
    header: {
        color: "#61dafb",
        fontSize: 30,
        marginBottom: 36
    }
});

const flattenStyle = StyleSheet.flatten([
    page.text,
    typography.header
]);


export default Cat