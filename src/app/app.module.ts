/* Core import*/
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";

/* Module import */
import {BrowserModule} from "@angular/platform-browser";

/* Icons import */
import {NgIconsModule} from "@ng-icons/core";
import {heroHome} from "@ng-icons/heroicons/outline";

/* Translate import */
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

/* Other import */
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgChartsModule} from "ng2-charts";

/* Pages import */
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {NotfoundComponent} from "./pages/error/notfound/notfound.component";
import {PrivacyComponent} from "./pages/license/private/privacy.component";

/*	Components import  */
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {TeamConditionsComponent} from "./pages/license/team-conditions/team-conditions.component";
import {DisclaimerComponent} from "./pages/license/disclaimer/disclaimer.component";
import {CoockieComponent} from "./pages/license/coockie/coockie.component";
import {PolicyLayoutComponent} from "./pages/license/layout/PolicyLayout.component";
import {EULAComponent} from "./pages/license/eula/eula.component";
import {SessiaLinksComponent} from "./pages/sessia-links/sessia-links.component";

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http);
}

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		WelcomeComponent,
		NotfoundComponent,
		PrivacyComponent,
		TeamConditionsComponent,
		DisclaimerComponent,
		CoockieComponent,
		PolicyLayoutComponent,
		EULAComponent,
		SessiaLinksComponent,
	],
	imports: [
		/* based */
		HttpClientModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,

		/* other */
		NgChartsModule,

		/* Icons */
		NgIconsModule.withIcons({ heroHome }),

		/* Translate */
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
