import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const CartWrapper = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 10px 15px;
`;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

export const ProductTitleAndPrice = styled.View`
  flex: 1;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
`;

export const RemoveButton = styled.TouchableOpacity``;

export const ProductActions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #eee;
  border-radius: 4px;
  padding: 10px;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonPlus = styled.TouchableOpacity``;

export const Input = styled.TextInput`
  background: #fff;
  height: 30px;
  width: 50px;
  margin: 0 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 5px;
  text-align: center;
`;

export const ButtonMinus = styled.TouchableOpacity``;

export const ProductTotalPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const CartAction = styled.View``;

export const CartPrice = styled.View`
  align-items: center;
  padding: 20px 0;
`;

export const TextTotal = styled.Text`
  color: #999;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const CartTotalPrice = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

export const CartButton = styled.TouchableOpacity`
  text-align: center;
  background: ${colors.primary};
  padding: 10px;
  border-radius: 4px;
`;

export const CartButtonLabel = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;
