/**
 * Created by rcarlton1 on 2/13/2017.
 */
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LandingViewComponent} from "./landing-view/landing-view.component";
import {SubscriptionViewComponent} from "./subscription-view/subscription-view.component";
import {TermsViewComponent} from "./terms-view/terms-view.component";
import {HelpViewComponent} from "./help-view/help-view.component";

const routes: Routes = [
  {path: 'landingView', component: LandingViewComponent},
  {path: 'subscription', component: SubscriptionViewComponent},
  {path: 'terms', component: TermsViewComponent},
  {path: 'help', component: HelpViewComponent},
  {path: '', redirectTo: '/landingView', pathMatch: 'full'},
  {path: '**', redirectTo: '/landingView', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
