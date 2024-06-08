import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function ExternalLink(props) {
  return (
    // <WebView
    //   {...props}
    //   source={{ uri: props.href }}
    // />
    <WebView
      source={{ uri: 'https://exceltonight.com' }}
      style={styles.webView}
    />
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  webView: {
    flex: 1,
  },
});
