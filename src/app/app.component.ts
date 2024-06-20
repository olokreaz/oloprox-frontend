import { Component, OnInit } from "@angular/core";
import { environment } from "../environments/environment";
import { TranslateService } from "@ngx-translate/core";

// import { AuthService } from "./services/auth.service";
import { Event, NavigationEnd, Router } from "@angular/router";

import { IStaticMethods } from "preline/preline";

declare global {
	interface Window {
		HSStaticMethods: IStaticMethods;
	}
}

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	readonly env = environment;

	constructor(
		public translate: TranslateService,
		private router: Router
	) {
		let lang =
			localStorage.getItem("lang") == null
				? localStorage.getItem("lang")
				: localStorage.setItem("lang", "ru");

		if (lang != null) this.translate.use(lang);
		this.translate.setDefaultLang("ru");
	}

	ngOnInit(): void {
		this.router.events.subscribe((event: Event) => {
			if (event instanceof NavigationEnd) {
				setTimeout(() => {
					window.HSStaticMethods.autoInit();
				});
			}
		});
	}
}
