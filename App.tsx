import {View, Text, ScrollView, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import ImgCards from './components/ImgCards';
import ActionCards from './components/ActionCards';
import ContactCards from './components/ContactCards';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>My App</Text>
          <FlatCards />
          <ElevatedCards />
          <ImgCards />
          <ActionCards />
          <ContactCards/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 33,
    textAlign: 'center',
    margin: 10,
  },
});
