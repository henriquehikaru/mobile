import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
  label: string;
  onPress?: () => void;
  theme?: 'primary' | 'secondary';
};

export default function Button({ label, onPress, theme }: Props) {

  const isPrimary = theme === 'primary';

  return (
    <View style={styles.container}>
      <Pressable
        style={[
          styles.button,
          isPrimary ? styles.primary : styles.secondary
        ]}
        onPress={onPress}
      >
        {isPrimary && (
          <FontAwesome
            name="shopping-cart"
            size={18}
            color="#fff"
            style={styles.icon}
          />
        )}

        <Text style={[
          styles.text,
          isPrimary ? styles.primaryText : styles.secondaryText
        ]}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
  },

  button: {
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  primary: {
    backgroundColor: '#EA1D2C',
  },

  secondary: {
    borderWidth: 2,
    borderColor: '#EA1D2C',
    backgroundColor: '#FFF',
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  primaryText: {
    color: '#FFF',
  },

  secondaryText: {
    color: '#EA1D2C',
  },

  icon: {
    marginRight: 8,
  },
});