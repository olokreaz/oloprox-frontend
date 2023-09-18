import { Component, OnInit } from "@angular/core";
import { environment } from "../environments/environments";
import { TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	readonly env = environment;

	constructor(public translate: TranslateService) {}

	ngOnInit() {
		let lang = localStorage.getItem("lang")
			? localStorage.getItem("lang")
			: localStorage.setItem("lang", "ru");

		if (lang != null) this.translate.setDefaultLang(lang);
	}
}
