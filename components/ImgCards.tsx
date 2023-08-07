import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ImgCards() {
  return (
    <View>
      <Text>ImgCards</Text>
      <Image source={{uri:'https://images.squarespace-cdn.com/content/v1/5c166ada7e3c3a927a75f1a1/1558976095731-YQIB0JE0ZM5SEY6DFSKU/adfad.jpg'}}
      style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({image:{
    height:150
}})