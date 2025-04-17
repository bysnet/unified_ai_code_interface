import React from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

export default function ChatScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={[]}
        renderItem={({ item }) => <Text>{item.content}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput placeholder="Type a message..." style={{ borderWidth: 1, padding: 8 }} />
      <Button title="Send" onPress={() => {}} />
    </View>
  );
}
