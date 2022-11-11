import { element, by } from 'detox';

export class MainPage {
  static get findMeButton() {return element(by.id('findMe')).atIndex(0);}
  static get scrollView() {return by.type('android.widget.ScrollView');}
  static get helloText() {return element(by.id('hello'));}
}
