import React, { Component } from 'react';
import { StatusBar, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styles/colors';

import api from '../../services/api';

import { formatPrice } from '../../util/format';

import {
  Container,
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductAddToCartButton,
  ProductNumber,
  ButtonNumber,
  ButtonLabel,
} from './styles';

class Main extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  };

  renderProduct = ({ item }) => {
    return (
      <ProductCard>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.formatPrice}</ProductPrice>

        <ProductAddToCartButton>
          <ButtonNumber>
            <Icon name="add-shopping-cart" size={18} color="#fff" />
            <ProductNumber>3</ProductNumber>
          </ButtonNumber>
          <ButtonLabel>ADICIONAR</ButtonLabel>
        </ProductAddToCartButton>
      </ProductCard>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor={colors.dark} />

        <FlatList
          data={products}
          horizontal
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}

export default Main;
