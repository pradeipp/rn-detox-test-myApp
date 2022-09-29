/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const imgUrl = 'https://miro.medium.com/max/1400/1*CqwmNh7ECSLGO4Zz_gL9Vw.png';
const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
          testID="welcome">
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}
          />
          <Text testID="hello">Hello, Detox!</Text>
          <Section title="Test App">
            Test app for reproducing detox issues.
          </Section>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text testID="hello_button" style={{justifyContent: 'center'}}>Hello!!!</Text>
          </View>
          <View style={{flex: 1, marginBottom: 10}}>
            <Text testID="world_button" style={{justifyContent: 'center'}}>World!!!</Text>
          </View>
          <Image
            source={{
              uri: imgUrl,
            }}
            style={{justifyContent: 'center', width: 200, height: 200 }}
          />
          <Image
            source={{
              uri: imgUrl,
            }}
            style={{justifyContent: 'center', width: 200, height: 200 }}
          />
          <Image
            source={{
              uri: imgUrl,
            }}
            style={{justifyContent: 'center', width: 200, height: 200 }}
          />
          <Image
            source={{
              uri: imgUrl,
            }}
            style={{justifyContent: 'center', width: 200, height: 200 }}
          />
          <Image
            source={{
              uri: imgUrl,
            }}
            style={{justifyContent: 'center', width: 200, height: 200 }}
          />
          <Image
            source={{
              uri: imgUrl,
            }}
            style={{justifyContent: 'center', width: 200, height: 200 }}
          />
          <Button testID='findMe' title='Here I am' />
          <Image
            source={{
              uri: imgUrl,
            }}
            style={{justifyContent: 'center', width: 200, height: 200 }}
          />
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
