import styled from 'styled-components/native';

import logo from '../../assets/logo.png';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 180px;
  height: 24px;
`;

export const Cart = styled.TouchableOpacity`
  position: relative;
`;

export const CartNumber = styled.Text`
  position: absolute;
  top: -8px;
  right: -3px;
  width: 16px;
  height: 16px;
  background: ${colors.primary};
  border-radius: 9px;
  color: #fff;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;
`;
