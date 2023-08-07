import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.heading}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.scrollDiv}>
        <View style={styles.CardsContainer}>
          <View style={[styles.card, styles.card1]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.card, styles.card2]}>
            <Text>blue</Text>
          </View>
          <View style={[styles.card, styles.card3]}>
            <Text>Green</Text>
          </View>
          <View style={[styles.card, styles.card4]}>
            <Text>magenta</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
  },scrollDiv:{
    elevation:3
  },
  CardsContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    gap: 25,
  },
  card: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  card1: {
    backgroundColor: 'red',
  },
  card2: {
    backgroundColor: 'blue',
  },
  card3: {
    backgroundColor: 'green',
  },
  card4: {
    backgroundColor: 'magenta',
  },
});
