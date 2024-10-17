import { StyleSheet, Button, Text, View } from 'react-native';

export default function Layout() {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={styles.dummyText}>Hello World!!</Text>
      </View>
      <Text 
      style={styles.dummyText}>Another piece of text!</Text>

      <Button title='Tap me' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText:
  {
    margin: 16,
    borderWidth: 2,
    borderColor: 'green',
    padding: 16,
  },
});
