import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
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
        onReceivedSslError={(webView, sslErrorHandler, sslError) => {
          if (sslError.primaryError === 'HOST_NAME_MISMATCH') {
            sslErrorHandler.cancel();
          } else {
            sslErrorHandler.proceed();
          }
        }}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
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

// text 2