import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './UserModule/components/header/header.component';
import { FooterComponent } from './UserModule/components/footer/footer.component';
import { FunctionhallComponent } from './UserModule/components/functionhall/functionhall.component';
import { SearchbarComponent } from './UserModule/components/searchbar/searchbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HelpComponent } from './UserModule/components/help/help.component';
import { LoginComponent } from './UserModule/components/login/login.component';
import { SearchbarService } from './UserModule/services/searchbar.service';
import { FunctionhallpageComponent } from './UserModule/components/functionhall/functionhallpage/functionhallpage.component';
import { RegisterComponent } from './UserModule/components/register/register.component';
import { DashboardComponent } from './OwnerModule/components/listyourvenue/dashboard/dashboard.component';
import { LocationComponent } from './OwnerModule/components/listyourvenue/location/location.component';
import { DetailsComponent } from './OwnerModule/components/listyourvenue/details/details.component';
import { PaymentComponent } from './OwnerModule/components/listyourvenue/payment/payment.component';
import { SecurityComponent } from './OwnerModule/components/listyourvenue/security/security.component';
import { PhotosComponent } from './OwnerModule/components/listyourvenue/photos/photos.component';
import { PublishlistingComponent } from './OwnerModule/components/listyourvenue/publishlisting/publishlisting.component';
import { VerificationComponent } from './OwnerModule/components/listyourvenue/verification/verification.component';
import { PaygateComponent } from './UserModule/components/paygate/paygate.component';
import { AccountdetailsComponent } from './OwnerModule/components/listyourvenue/accountdetails/accountdetails.component';
import { OwnerDasboardComponent } from './OwnerModule/components/owner-dasboard/owner-dasboard.component';
import { MyhallsComponent } from './OwnerModule/components/myhalls/myhalls.component';
import { BookingsComponent } from './OwnerModule/components/bookings/bookings.component';
import { CalendarComponent } from './OwnerModule/components/calendar/calendar.component';
import { ProfileComponent } from './OwnerModule/components/profile/profile.component';
import { SettingsComponent } from './OwnerModule/components/settings/settings.component';
import { Login1Component } from './OwnerModule/components/login1/login1.component';
import { OwnerLoginComponent } from './OwnerModule/components/owner-login/owner-login.component';
import { OwnerRegisterComponent } from './OwnerModule/components/owner-register/owner-register.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FunctionhallComponent,
    SearchbarComponent,
    HelpComponent,
    LoginComponent,
    FunctionhallpageComponent,
    RegisterComponent,
    DashboardComponent,
    LocationComponent,
    DetailsComponent,
    PhotosComponent,
    PaymentComponent,
    SecurityComponent,
    
    PublishlistingComponent,
    VerificationComponent,
    PaygateComponent,
    AccountdetailsComponent,
    OwnerDasboardComponent,
    MyhallsComponent,
    BookingsComponent,
    CalendarComponent,
    ProfileComponent,
    SettingsComponent,
    Login1Component,
    OwnerLoginComponent,
    OwnerRegisterComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [SearchbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
