import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './filter.pipe';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MapComponent } from './map/map.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CookieService } from 'ngx-cookie-service';

import { UiSwitchModule } from 'angular2-ui-switch'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MapComponent,
    FilterPipe,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    UiSwitchModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
