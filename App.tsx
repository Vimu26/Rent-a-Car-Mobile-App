import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {appStyles} from './src/themes/Common-theme';
import OpeningPage from './src/components/LoadingPage/OpeningPage';

function App(): React.JSX.Element {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.replace('Home');
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <View style={[appStyles.mainDark, styles.imageView]}>
      <View>
        <OpeningPage />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
