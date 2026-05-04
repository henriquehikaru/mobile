import React, { useState } from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
  StyleSheet, Alert, TextInput
} from 'react-native';

export default function CartScreen() {

  const [cart, setCart] = useState([
    { id: '1', name: 'Hambúrguer', price: 25, quantity: 1 },
    { id: '2', name: 'Batata Frita', price: 15, quantity: 2 },
  ]);

  const [cupom, setCupom] = useState('');
  const [desconto, setDesconto] = useState(0);

  const taxaEntrega = 5;

  const increase = (id: string) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrease = (id: string) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const removeItem = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const aplicarCupom = () => {
    const subtotal = getSubtotal();

    if (cupom.toLowerCase() === 'ifood10') {
        setDesconto(10);
        Alert.alert('Cupom aplicado!', 'R$10 de desconto 🎉');

    } else if (cupom.toLowerCase() === 'ifood50') {
        const descontoCalculado = subtotal * 0.5;
        setDesconto(descontoCalculado);
        Alert.alert('🔥 CUPOM 50%!', 'Você ganhou 50% de desconto!');

    } else {
        setDesconto(0);
        Alert.alert('Cupom inválido');
    }
  };

  const totalFinal = () => {
    return getSubtotal() + taxaEntrega - desconto;
  };

  const finalizarPedido = () => {
    Alert.alert(
      "Pedido Confirmado 🍔",
      `Total: R$ ${totalFinal()}\nEntrega em 30-40 min 🚀`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu Carrinho</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>R$ {item.price}</Text>

            <View style={styles.controls}>
              <TouchableOpacity onPress={() => decrease(item.id)} style={styles.btn}>
                <Text style={styles.btnText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.quantity}>{item.quantity}</Text>

              <TouchableOpacity onPress={() => increase(item.id)} style={styles.btn}>
                <Text style={styles.btnText}>+</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => removeItem(item.id)}>
                <Text style={styles.remove}>🗑</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* CUPOM */}
      <View style={styles.cupomContainer}>
        <TextInput
          placeholder="Cupom de desconto"
          value={cupom}
          onChangeText={setCupom}
          style={styles.input}
        />
        <TouchableOpacity onPress={aplicarCupom} style={styles.cupomBtn}>
          <Text style={{ color: '#FFF' }}>Aplicar</Text>
        </TouchableOpacity>
      </View>

      {/* RESUMO */}
      <View style={styles.footer}>
        <Text>Subtotal: R$ {getSubtotal()}</Text>
        <Text>Entrega: R$ {taxaEntrega}</Text>
        <Text>Desconto: - R$ {desconto}</Text>

        <Text style={styles.total}>
          Total: R$ {totalFinal()}
        </Text>

        <TouchableOpacity style={styles.checkoutBtn} onPress={finalizarPedido}>
          <Text style={styles.checkoutText}>Finalizar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 3,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between'
  },

  btn: {
    backgroundColor: '#EA1D2C',
    padding: 8,
    borderRadius: 8,
  },

  btnText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
  },

  remove: {
    fontSize: 18,
  },

  cupomContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },

  input: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },

  cupomBtn: {
    backgroundColor: '#EA1D2C',
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
  },

  footer: {
    borderTopWidth: 1,
    borderColor: '#DDD',
    paddingTop: 10,
  },

  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  checkoutBtn: {
    backgroundColor: '#EA1D2C',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  checkoutText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});