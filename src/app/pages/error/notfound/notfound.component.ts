import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
	selector: "app-notfound",
	templateUrl: "./notfound.component.html",
	styleUrls: ["./notfound.component.scss"],
})
export class NotfoundComponent {
	constructor(
		private router: Router,
		private translate: TranslateService
	) {}

	public redirect(path: string) {
		this.router.navigateByUrl(path);
	}
}
