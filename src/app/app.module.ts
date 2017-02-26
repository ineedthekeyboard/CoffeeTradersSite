import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { AppRoutingModule } from './app.router';
import { AppComponent } from './app.component';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { LandingChartViewComponent } from './landing-chart-view/landing-chart-view.component';
import { SubscriptionViewComponent } from './subscription-view/subscription-view.component';
import { HelpViewComponent } from './help-view/help-view.component';
import { TermsViewComponent } from './terms-view/terms-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingViewComponent,
    LandingChartViewComponent,
    SubscriptionViewComponent,
    HelpViewComponent,
    TermsViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
