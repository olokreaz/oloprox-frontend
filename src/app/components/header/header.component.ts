import { Component, Input } from "@angular/core";
import { environment } from "../../../environments/environment";
import { ActivatedRoute, Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
	env = environment;
	menu: boolean = false;

	@Input({ alias: "class" }) header_class!: string;

	constructor(
		public router: Router,
		public route: ActivatedRoute,
		public translate: TranslateService
	) {}

	menuDropdown() {
		this.menu = !this.menu;
	}
}
