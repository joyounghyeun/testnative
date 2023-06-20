import React, { useState } from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, TextInput } from "react-native";

const Main = () => {
  const navigation = useNavigation();
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleButtonPress = () => {
    navigation.navigate("Chat");
  };
  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  return (
    <Container>
      <MainText>Welcome to KakaoTalk</MainText>
      <SubText>
        If you have a Kakao Account,{"\n"}log in with your email or phone
        number.
      </SubText>

      <LoginInput>
        <InputText
          placeholder="Email or phone number"
          value={Email}
          onChangeText={handleEmailChange}
        />
      </LoginInput>
      <LoginInput>
        <SecureTextInput
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={handlePasswordChange}
        />
      </LoginInput>
      <MainButton onPress={handleButtonPress}>
        <ButtonText>Log in</ButtonText>
      </MainButton>
      <MainButton>
        <ButtonText>Sign up</ButtonText>
      </MainButton>
      <SubButton title="Find Kakao Account or Password" />
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
  text-align: center;
  margin-bottom: 70px;
`;

const LoginInput = styled.View`
  width: 90%;
  height: 8%;
  background-color: whitesmoke;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #a4a4a4;
  border-bottom-style: solid;
`;

const InputText = styled.TextInput`
  font-size: 16px;
  color: black;
  flex: 1;
`;

const SecureTextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: black;
`;

const MainButton = styled.TouchableOpacity`
  width: 90%;
  height: 8%;
  background-color: #e6e6e6;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const ButtonText = styled.Text`
  color: black;
  font-size: 16px;
`;

const SubButton = styled.Button``;
