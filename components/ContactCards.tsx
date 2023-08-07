import {
  Image,
  Linking,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ContactCards() {
    function openSite (link:string){
        Linking.openURL(link)
    }
  const contacts = [
    {
      name: 'Alice Johnson',
      age: 28,
      image: 'https://placebear.com/g/200/200',
      website: 'https://www.example.com/alice',
    },
    {
      name: 'Bob Smith',
      age: 35,
      image:
        'https://www.kasandbox.org/programming-images/avatars/spunky-sam.png',
      website: 'https://www.example.com/bob',
    },
    {
      name: 'Emily Davis',
      age: 22,
      image:
        'https://www.kasandbox.org/programming-images/avatars/spunky-sam-green.png',
      website: 'https://www.example.com/emily',
    },
    {
      name: 'John Miller',
      age: 40,
      image:
        'https://www.kasandbox.org/programming-images/avatars/purple-pi.png',
      website: 'https://www.example.com/john',
    },
  ];

  return (
    <View>
      <Text>ContactCards</Text>
      {contacts.map((item, index) => (
        <View key={index}>
          <Text>{item.name}</Text>
          <Image source={{uri: item.image}} style={{height: 150}} />
          <TouchableOpacity onPress={()=>{openSite(item.website)}}>
            <Text
              style={{backgroundColor: 'gold', color: 'blue', fontSize: 20}}>
              Website
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
