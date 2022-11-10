import {expect} from 'detox'
import {MainPage} from '../pages/PageClass';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('hello_button')).tap();
    await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    await element(by.id('world_button')).tap();
    await expect(element(by.text('World!!!'))).toBeVisible();
  });

  it('should scroll down until it finds a button', async () => {
    // await waitFor(element(by.id('findMe'))).toBeVisible().whileElement(by.type('android.widget.ScrollView')).scroll(50, 'down');
    await MainPage.helloText.tap();
    await waitFor(MainPage.findMeButton).toBeVisible().whileElement(MainPage.scrollView).scroll(50, 'down');
    // await console.log('Hello text from main page: ' + MainPage.findMeButton.getAttributes().text);
  });
});
