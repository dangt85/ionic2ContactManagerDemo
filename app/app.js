import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import * as force from 'forcejs';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  mode: 'ios'
})
export class MyApp {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      force.init({
          proxyURL: "https://dev-cors-proxy.herokuapp.com/"
      });
      force.login();

      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      //
      // For example, we might change the StatusBar color. This one below is
      // good for light backgrounds and dark text;
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp)
