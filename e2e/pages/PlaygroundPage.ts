import {element, by} from 'detox';

export class PlaygroundPage {
  static get fadeInBtn() {
    return element(by.text('FADE IN VIEW'));
  }
  static get fadeOutBtn() {
    return element(by.text('FADE OUT VIEW'));
  }
}
