import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Main = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate("Chat");
  };

  return (
    <Container>
      <MainText>Welcome to KakaoTalk</MainText>
      <SubText>If you have a Kakao Account,</SubText>
      <SubText>log in with your email or phone number.</SubText>
      <LoginInput>
        <InputText>Email or phone number</InputText>
      </LoginInput>
      <LoginInput>
        <InputText>Password</InputText>
      </LoginInput>
      <MainButton onPress={handleButtonPress}>
        <ButtonText>Log in</ButtonText>
      </MainButton>
      <MainButton>
        <ButtonText>Sign up</ButtonText>
      </MainButton>
      <SubText>Find Kakao Account or Password</SubText>
    </Container>
  );
};

export default Main;

const Container = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 150px;
`;

const MainText = styled.Text`
  font-size: 25px;
  margin-bottom: 25px;
`;

const SubText = styled.Text`
  font-size: 18px;
  color: gray;
`;

const LoginInput = styled.TextInput`
  width: 90%;
  height: 8%;
  background-color: white;
  margin-bottom: 10px;
  border-bottom: 1px;
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-color: black;
`;

const InputText = styled.Text`
  font-size: 16px;
  color: gray;
`;

const MainButton = styled(TouchableOpacity)`
  width: 90%;
  height: 8%;
  background-color: whitesmoke;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const ButtonText = styled.Text`
  color: black;
  font-size: 16px;
`;
