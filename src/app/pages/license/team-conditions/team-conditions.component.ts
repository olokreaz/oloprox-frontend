import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-team-conditions",
	templateUrl: "./team-conditions.component.html",
	styleUrls: ["./team-conditions.component.scss"],
})
export class TeamConditionsComponent {
	constructor(translate: TranslateService) {}
}
