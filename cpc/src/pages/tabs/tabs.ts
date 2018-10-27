import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ConcernsPage } from '../concerns/concerns';
import { PlacesPage } from '../places/places';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PlacesPage;
  tab2Root = AboutPage;
  tab3Root = ConcernsPage;

  constructor() {

  }
}
