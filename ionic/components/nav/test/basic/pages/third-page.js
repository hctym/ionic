import {Component, Directive} from 'angular2/src/core/annotations_impl/annotations';
import {View} from 'angular2/src/core/annotations_impl/view';

import {NavController, Header, Toolbar, ToolbarTitle} from 'ionic/ionic';


@Component()
@View({
  templateUrl: 'pages/third-page.html',
  directives: [Header, Toolbar, ToolbarTitle]
})
export class ThirdPage {
  constructor(
    nav: NavController
  ) {
    this.nav = nav
  }
  pop() {
    this.nav.pop()
  }
}
