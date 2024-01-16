import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import { TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"],
})
export class FooterComponent {
	env = environment;

	@Input({ alias: "class" }) footer_class!: string;

	constructor(
		public router: Router,
		public route: ActivatedRoute,
		public translate: TranslateService
	) {}
}
