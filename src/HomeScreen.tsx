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

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

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

const DetoxLogo = () => {
  return (
    <Image
      source={{
        uri: imgUrl,
      }}
      style={styles.niceAndCentered}
    />
  );
};

let isDarkMode;

export const HomeScreen = ({navigation}: any) => {
  isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // const navigation = useNavigation();

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        testID="scrollView">
        <Header />
        <View style={styles.darkMode} testID="welcome">
          <View style={styles.darkMode} />
          <Text testID="hello" style={styles.niceAndCentered}>
            Hello, Detox!
          </Text>

          <Section title="Test App">
            Test app for reproducing detox issues.
          </Section>
          <Button
            title="Open Playground Screen"
            onPress={() => navigation.navigate('Playground')}
          />
          <View style={styles.niceAndCentered}>
            <Text testID="hello_button">Hello!!!</Text>
            <Text testID="world_button">World!!!</Text>
            <DetoxLogo />
            <DetoxLogo />
            <DetoxLogo />
            <DetoxLogo />
            <DetoxLogo />
            <DetoxLogo />
            <Button testID="findMe" title="Here I am" />
            <DetoxLogo />
          </View>
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
  darkMode: {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  },
  niceAndCentered: {
    alignItems: 'center',
    margin: 20,
    flex: 1,
  },
  // {justifyContent: 'center', width: 200, height: 200}
});
