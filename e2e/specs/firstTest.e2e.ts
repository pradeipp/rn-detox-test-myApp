import {expect} from 'detox';
import {HomePage} from '../pages/HomePage';

xdescribe('Example', () => {
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

  xit('should scroll down until it finds a button', async () => {
    await HomePage.helloText.tap();
    await waitFor(HomePage.findMeButton)
      .toBeVisible()
      .whileElement(HomePage.scrollView)
      .scroll(50, 'down');
  });
});
