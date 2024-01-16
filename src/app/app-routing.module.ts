import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components
import { WelcomeComponent } from "./pages/welcome/welcome.component";
import { PrivacyComponent } from "./pages/license/private/privacy.component";
import { NotfoundComponent } from "./pages/error/notfound/notfound.component";
import { PolicyLayoutComponent } from "./pages/license/layout/PolicyLayout.component";
import { TeamConditionsComponent } from "./pages/license/team-conditions/team-conditions.component";
import { EULAComponent } from "./pages/license/eula/eula.component";
import { CoockieComponent } from "./pages/license/coockie/coockie.component";
import { DisclaimerComponent } from "./pages/license/disclaimer/disclaimer.component";
import { SessiaLinksComponent } from "./pages/sessia-links/sessia-links.component";

const routes: Routes = [
	{
		path: "",
		component: WelcomeComponent,
	},
	{
		path: "links",
		component: SessiaLinksComponent,
	},
	{
		path: "policy",
		component: PolicyLayoutComponent,
		children: [
			{
				path: "privacy",
				component: PrivacyComponent,
			},
			{
				path: "terms-conditions",
				component: TeamConditionsComponent,
			},
			{
				path: "eula",
				component: EULAComponent,
			},
			{
				path: "cookie",
				component: CoockieComponent,
			},
			{
				path: "disclaimer",
				component: DisclaimerComponent,
			},
			{
				path: "private",
				component: PrivacyComponent,
			},
		],
	},
	{
		path: "**",
		component: NotfoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
