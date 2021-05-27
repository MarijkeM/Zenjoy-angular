import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EndlessExtrasComponent } from './components/endless-extras/endless-extras.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { JoinComponent } from './components/join/join.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PaymentMethodsComponent } from './components/payment-methods/payment-methods.component';
import { StarCodesComponent } from './components/star-codes/star-codes.component';
import { InformationComponent } from './components/information/information.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselFreebiesComponent } from './components/endless-extras/carousel-freebies/carousel-freebies.component';
import { CarouselOrderComponent } from './components/endless-extras/carousel-order/carousel-order.component';
import { CarouselChallengeComponent } from './components/endless-extras/carousel-challenge/carousel-challenge.component';


@NgModule({
  declarations: [
    AppComponent,
    EndlessExtrasComponent,
    GettingStartedComponent,
    JoinComponent,
    FavoritesComponent,
    PaymentMethodsComponent,
    StarCodesComponent,
    InformationComponent,
    FooterComponent,
    HeaderComponent,
    CarouselFreebiesComponent,
    CarouselOrderComponent,
    CarouselChallengeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
