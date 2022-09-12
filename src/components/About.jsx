import React from 'react'
import { Button, Text, View } from 'react-native'

export default function About({ navigation }) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Button
              title="Go to About... again"
              onPress={() => navigation.push('About')}
          />
          <Button title="Go to Home" onPress={() => navigation.navigate('Cat')} />
          <Button title="Go back" onPress={() => navigation.goBack()} />
          <Button
              title="Go back to first screen in stack"
              onPress={() => navigation.popToTop()}
          />
      </View>
  )
}
