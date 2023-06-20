import React from "react";
import { View, Text } from "react-native";
import { styled } from "styled-components";

function Option() {
  return (
    <View>
      <StyleText>Option Page</StyleText>
    </View>
  );
}

export default Option;

const StyleText = styled.Text`
  margin: auto;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
`;
