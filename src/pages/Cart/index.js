import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  CartWrapper,
  Product,
  ProductInfo,
  Image,
  ProductTitleAndPrice,
  ProductTitle,
  ProductPrice,
  RemoveButton,
  ProductActions,
  ProductAmount,
  ButtonPlus,
  Input,
  ButtonMinus,
  ProductTotalPrice,
  CartAction,
  CartPrice,
  TextTotal,
  CartTotalPrice,
  CartButton,
  CartButtonLabel,
} from './styles';

import colors from '../../styles/colors';

export default function Cart() {
  return (
    <Container>
      <CartWrapper>
        <Product>
          <ProductInfo>
            <Image
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMGfuoq6sAuNm8DHatTZuj-RQ7rBU5K41srkIYG-ObON8ibuE4',
              }}
            />
            <ProductTitleAndPrice>
              <ProductTitle>Tênis muito loco</ProductTitle>
              <ProductPrice>R$ 150,00</ProductPrice>
            </ProductTitleAndPrice>
            <RemoveButton>
              <Icon
                name="remove-shopping-cart"
                size={20}
                color={colors.primary}
              />
            </RemoveButton>
          </ProductInfo>
          <ProductActions>
            <ProductAmount>
              <ButtonPlus>
                <Icon name="add-circle" size={18} color={colors.primary} />
              </ButtonPlus>
              <Input value="1" editable={false} />
              <ButtonMinus>
                <Icon name="remove-circle" size={18} color={colors.primary} />
              </ButtonMinus>
            </ProductAmount>
            <ProductTotalPrice>R$ 150,00</ProductTotalPrice>
          </ProductActions>
        </Product>

        <Product>
          <ProductInfo>
            <Image
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMGfuoq6sAuNm8DHatTZuj-RQ7rBU5K41srkIYG-ObON8ibuE4',
              }}
            />
            <ProductTitleAndPrice>
              <ProductTitle>Tênis muito loco</ProductTitle>
              <ProductPrice>R$ 150,00</ProductPrice>
            </ProductTitleAndPrice>
            <RemoveButton>
              <Icon
                name="remove-shopping-cart"
                size={20}
                color={colors.primary}
              />
            </RemoveButton>
          </ProductInfo>
          <ProductActions>
            <ProductAmount>
              <ButtonPlus>
                <Icon name="add-circle" size={18} color={colors.primary} />
              </ButtonPlus>
              <Input value="1" editable={false} />
              <ButtonMinus>
                <Icon name="remove-circle" size={18} color={colors.primary} />
              </ButtonMinus>
            </ProductAmount>
            <ProductTotalPrice>R$ 150,00</ProductTotalPrice>
          </ProductActions>
        </Product>

        <CartAction>
          <CartPrice>
            <TextTotal>Total</TextTotal>
            <CartTotalPrice>R$ 150,00</CartTotalPrice>
          </CartPrice>

          <CartButton>
            <CartButtonLabel>FINALIZAR PEDIDO</CartButtonLabel>
          </CartButton>
        </CartAction>
      </CartWrapper>
    </Container>
  );
}
