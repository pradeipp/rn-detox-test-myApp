import { expect } from 'detox';
import { HomePage } from '../pages/HomePage';
import { PlaygroundPage } from '../pages/PlaygroundPage';
import { sleep } from '../utils';

describe('Animations tests', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    it('should open playground page and run animations', async () => {
        await HomePage.openPlaygroundBtn.tap();
        await PlaygroundPage.fadeInBtn.tap();
        await sleep(10000);
        await PlaygroundPage.fadeOutBtn.tap();
    })
});