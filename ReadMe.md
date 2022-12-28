Barebones React Native app + Detox Typescript setup

Run App:

1. start emulator
2. start metro server - npx react-native start
3. build and run app - npx react-native run-android|run-ios

To run: 
1. yarn install
2. detox build -c android.emu.release
3. detox test -c android.emu.release

Notes: 
1. specify your emulator in detox.config.js file
2. this project was created on windows 11 machine and only android has been ran so far.
