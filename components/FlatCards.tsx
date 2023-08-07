import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.heading}>FlatCards</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
  },
  CardsContainer: {
    flexDirection: 'row',
    paddingVertical:10,
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
