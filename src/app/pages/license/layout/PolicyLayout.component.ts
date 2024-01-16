import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { NavigationEnd, Router } from "@angular/router";

@Component({
	selector: "app-layout",
	templateUrl: "./PolicyLayout.component.html",
	styleUrls: ["./PolicyLayout.component.scss"],
})
export class PolicyLayoutComponent {
	bShowMenu: boolean = false;
	items = [
		{
			name: "EULA Policy",
			path: "/policy/eula",
		},
		{
			name: "Private Policy",
			path: "/policy/private",
		},
		{
			name: "Team Conditions Policy",
			path: "/policy/private",
		},
		{
			name: "Cookie Policy",
			path: "/policy/cookie",
		},
		{
			name: "Disclaimer",
			path: "/policy/disclaimer",
		},
	];

	constructor(translate: TranslateService, router: Router) {
		router.events.subscribe((ev) => {
			if (ev instanceof NavigationEnd)
				this.bShowMenu = router.url == "/policy";
		});
	}
}
