import {cleanup, init} from 'detox';
import adapter from 'detox/runners/jest/adapter';
const config = require('../package.json').detox;
import 'jasmine';

jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);

beforeAll(async () => {
  await init(config);
  await device.launchApp({
    newInstance: true
  });
});

beforeEach(async () => {
  await adapter.beforeEach();
});

afterEach(async () => {
  // await device.reloadReactNative()
});

afterAll(async () => {
  await adapter.afterAll();
  await cleanup();
});