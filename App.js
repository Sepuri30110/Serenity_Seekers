import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, View, Image, Dimensions } from 'react-native';
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
        <View>
          <Image source={require("./assets/icon.png")} style={styles.image}/>
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

const x = Dimensions.get("window").width;
const q = Dimensions.get("window").height;
const y = q/2 - 125;

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#666',
    alignItems: 'center',
    width: window.innerWidth,
    paddingTop: 30,
    paddingBottom: 30,
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
    marginRight: 20,
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
    display:'flex',
    flex:1,
    width: 250,
    height: 250,
    alignSelf:'center',
    marginTop:100
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#666',
    alignItems: 'center',
    width: window.innerWidth,
    paddingTop: 20,
    paddingBottom: 20,
    position: 'absolute',
    bottom: 0,
  },
  footer1: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    marginRight: 20,
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
