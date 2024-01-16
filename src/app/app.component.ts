import { Component, OnInit } from "@angular/core";
import { environment } from "../environments/environment";
import { TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	readonly env = environment;

	constructor(public translate: TranslateService) {
		let lang =
			localStorage.getItem("lang") == null
				? localStorage.getItem("lang")
				: localStorage.setItem("lang", "ru");

		if (lang != null) this.translate.use(lang);
		this.translate.setDefaultLang("ru");
	}

	ngOnInit(): void {}
}
