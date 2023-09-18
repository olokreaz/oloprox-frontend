/* Core import*/
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

/* Module import */
import {BrowserModule} from '@angular/platform-browser';

/*	Components import  */
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';

/* Pages import */
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {NotfoundComponent} from './pages/error/notfound/notfound.component';

/* Icons import */
import {NgIconsModule} from '@ng-icons/core';
import {heroHome} from '@ng-icons/heroicons/outline';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

/* Other import */
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgChartsModule} from 'ng2-charts';

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
