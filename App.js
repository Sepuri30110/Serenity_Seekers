import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function App() {

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.header1}>
          <Text style={styles.header1_text}>Self-identifying the mental health status</Text>
        </View>
        <View style={styles.header2}>
          <TouchableOpacity>
            <Text style={styles.header2_text}>SignUp</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.header2_text}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.image}>
        <img src={require('./assets/icon.png')} />
      </View>
      <View style={styles.footer}>
        <View style={styles.footer1}>
          <TouchableOpacity>
            <Text style={styles.footer_text}>Contact US</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footer_text}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#666',
    alignItems: 'center',
    width: window.innerWidth,
    //marginBottom:600,
  },
  header1: {
    marginLeft: 20,
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
  },
  header2: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    marginRight:20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '20px'
  },
  header1_text: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  header2_text: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 3,
  },
  image: {
    backgroundColor: '#000',
    width: '250px',
    height: '250px',
    marginTop: 100,
    marginBottom: 100,
    alignSelf: 'center',
  },
  footer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    backgroundColor: '#666',
    alignItems: 'center',
    width: window.innerWidth,
    //marginBottom:600,
  },
  footer1:{
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    marginRight:20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '20px',
  },
  footer_text: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 3,
  }
});
