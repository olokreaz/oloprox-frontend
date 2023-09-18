import { Component, Input } from "@angular/core";
import { environment } from "../../../environments/environments";
import { Router } from "@angular/router";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
	env = environment;
	menu: boolean = false;

	@Input({ alias: "class" }) header_class!: string;

	constructor(public router: Router) {}

	menuDropdown() {
		this.menu = !this.menu;
	}
}
