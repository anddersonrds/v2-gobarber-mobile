import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 52}px;
  background: #28262e;
`;

export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 20px;
  font-family: 'RobotoSlab-Medium';
  line-height: 28px;
`;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  margin: 24px 0;
  color: #f4ede8;
`;

export const BackButton = styled.TouchableOpacity`
  /* margin-top: 40px; */
`;

export const UserAvatarButton = styled.View`
  position: relative;
  align-self: center;
  width: 186px;
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  background: #999591;
`;

export const CameraButton = styled.TouchableOpacity`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 62px;
  height: 62px;
  border-radius: 31px;
  right: 0;
  bottom: 0;
  background: #ff9000;
`;
