// Main.js

import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MainText = styled.Text`
  font-size: 24px;
  margin-bottom: 16px;
`;

const MainButton = styled.Button``;

const Main = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate("Friend");
  };

  return (
    <Container>
      <MainText>Main Component</MainText>
      <MainButton title="Go to Friend" onPress={handleButtonPress} />
    </Container>
  );
};

export default Main;
