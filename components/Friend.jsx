import React from "react";
import { View, Text, Image } from "react-native";
import { styled } from "styled-components";

function Friend() {
  return (
    <View>
      <StyleText>Searching Page</StyleText>
    </View>
  );
}

export default Friend;

const StyleText = styled.Text`
  margin: auto;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
`;
