import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function ActionCards() {
  function OpenURL(Website: string) {
    Linking.openURL(Website);
  }
  return (
    <View>
      <Text>ActionCards</Text>
      <View>
        <Text numberOfLines={2} style={{color:"red",backgroundColor:"yellow"}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          quos recusandae unde hic! Et cumque vel ex debitis accusantium
          laboriosam, deleniti consectetur nesciunt incidunt nam quas excepturi
          beatae dolores facilis.
        </Text>
        <TouchableOpacity onPress={() => OpenURL('https://cpetdhiu.in/')}>
          <Text>go to web</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
