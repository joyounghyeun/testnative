import React from "react";
import { View, Text } from "react-native";
import { styled } from "styled-components";

function Main() {
  return (
    <Backto>
      <Text>Main Page</Text>
    </Backto>
  );
}

export default Main;

const Backto = styled.View`
  margin-top: 100px;
  margin-left: 150px;
`;
