import React from "react";
import { View, Text, FlatList } from "react-native";
import { styled } from "styled-components";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function Chat() {
  return (
    <View>
      <HeaderView>
        <ChatText>Chats</ChatText>
        <SmallView>
          <AntDesign name="search1" size={35} color="black" />
          <MaterialCommunityIcons
            name="chat-plus-outline"
            size={35}
            color="black"
          />
          <Ionicons name="musical-notes-outline" size={35} color="black" />
          <Ionicons name="settings-outline" size={35} color="black" />
        </SmallView>
      </HeaderView>
    </View>
  );
}

export default Chat;

const ChatText = styled.Text`
  font-size: 30px;
  margin-top: 60px;
  margin-left: 20px;
  font-weight: bold;
  flex: 1;
`;

const HeaderView = styled.View`
  flex-direction: row;
`;

const SmallView = styled.View`
  flex-direction: row;
  margin-top: 60px;
  width: 200px;
  justify-content: space-around;
`;
