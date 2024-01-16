import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-private",
	templateUrl: "./privacy.component.html",
	styleUrls: ["./privacy.component.scss"],
})
export class PrivacyComponent {
	constructor(translate: TranslateService) {}
}
