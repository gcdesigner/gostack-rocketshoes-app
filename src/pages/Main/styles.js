import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.View`
  padding: 20px;
  background: ${colors.background};
`;

export const ProductCard = styled.View`
  width: 250px;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  margin: 0 15px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ProductAddToCartButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  background: ${colors.primary};
  border-radius: 4px;
  margin-top: auto;
`;

export const ButtonNumber = styled.View`
  flex-direction: row;
  align-items: center;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  margin-right: 5px;
  padding: 5px 10px;
`;

export const ProductNumber = styled.Text`
  margin-left: 5px;
  font-size: 14px;
  color: #fff;
`;

export const ButtonLabel = styled.Text`
  flex: 1;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  padding: 12px 0;
`;
