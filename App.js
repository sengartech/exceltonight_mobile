import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import ExternalLink from './components/ExternalLink';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Finally a bare minimum!</Text>
    //   {/* <StatusBar style="auto" /> */}
    // </View>

    // <View style={styles.container}>
    //   <Text>Finally a bare minimum!</Text>
    //   <ExternalLink
    //     href="https://exceltonight.com"
    //   ></ExternalLink>
    // </View>

    // <ExternalLink
    //   href="https://exceltonight.com"
    // ></ExternalLink>
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: 'https://exceltonight.com' }}
        style={styles.webView}
      />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webView: {
    flex: 1,
  },
});
