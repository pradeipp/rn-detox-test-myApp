require('dotenv/config');

const iosName = 'MyApp';
const emulator = '31_aosp';
const simulator = 'iPhone 11';
const derivedDataPath = 'ios/build';
const sdk = 'iphonesimulator';
const LOCAL_PREFIX = process.platform === 'win32' ? '' : './';

module.exports = {
  testRunner: 'jest',
  runnerConfig: require.resolve('./e2e/config.json'),
  skipLegacyWorkersInjection: true,
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath: `${derivedDataPath}/Build/Products/Debug-${sdk}/${iosName}.app`,
      build: `./scripts/build-detox-ios.sh ${iosName} Debug YES`,
    },
    'ios.release': {
      type: 'ios.app',
      binaryPath: `${derivedDataPath}/Build/Products/Release-${sdk}/${iosName}.app`,
      build: `./scripts/build-detox-ios.sh ${iosName} Release YES`,
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      testBinaryPath:
        'android/app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk',
      build: `cd android && ${LOCAL_PREFIX}gradlew clean && ${LOCAL_PREFIX}gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..`,
    },
    'android.release': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
      testBinaryPath:
        'android/app/build/outputs/apk/androidTest/release/app-release-androidTest.apk',
      build: `cd android && ${LOCAL_PREFIX}gradlew clean && ${LOCAL_PREFIX}gradlew assembleRelease assembleAndroidTest -DtestBuildType=release && cd ..`,
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: simulator,
      },
    },
    emulator: {
      type: 'android.emulator',
      headless: false,
      gpuMode: 'swiftshader_indirect',
      device: {
        avdName: emulator,
      },
    },
  },
  configurations: {
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.debug',
    },
    'ios.sim.release': {
      device: 'simulator',
      app: 'ios.release',
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug',
    },
    'android.emu.release': {
      device: 'emulator',
      app: 'android.release',
    },
  },
};
