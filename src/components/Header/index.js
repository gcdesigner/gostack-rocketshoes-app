import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Cart, CartNumber } from './styles';

export default function Header({ navigation }) {
  return (
    <Container>
      <Logo />
      <Cart onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" size={24} color="#fff" />
        <CartNumber>1</CartNumber>
      </Cart>
    </Container>
  );
}
