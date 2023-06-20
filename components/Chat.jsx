import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { styled } from "styled-components";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function Chat() {
  const chatData = [
    {
      id: 1,
      name: "KaKaoTalk",
      message: "Please check My KaKao Account Info",
      time: "10:10",
      icon: "numeric-1-circle",
      iconColor: "red",
    },
  ];

  const renderChatItem = ({ item }) => (
    <ChatingView>
      <View>
        <KaKaoText>{item.name}</KaKaoText>
        <SmallTalk>{item.message}</SmallTalk>
      </View>
      <TimeView>
        <Text>{item.time}</Text>
        <MaterialCommunityIcons
          name={item.icon}
          size={30}
          color={item.iconColor}
        />
      </TimeView>
    </ChatingView>
  );

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
      <FlatList
        data={chatData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderChatItem}
      />
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

const ChatingView = styled.View`
  flex-direction: row;
  margin-top: 20px;
`;

const KaKaoText = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const SmallTalk = styled.Text`
  color: gray;
`;

const TimeView = styled.View`
  margin-left: 30px;
  color: gray;
`;
