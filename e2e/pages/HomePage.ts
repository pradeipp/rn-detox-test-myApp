import {element, by} from 'detox';

export class HomePage {
  static get findMeButton() {
    return element(by.id('findMe')).atIndex(0);
  }
  static get scrollView() {
    return by.type('android.widget.ScrollView');
  }
  static get helloText() {
    return element(by.id('hello'));
  }
  static get openPlaygroundBtn() {
    return element(by.text('OPEN PLAYGROUND SCREEN'));
  }
}
