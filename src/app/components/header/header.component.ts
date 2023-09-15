import { Component } from '@angular/core';
import { environment } from '../../../environments/environments';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	env = environment;
	menu: boolean = false;

	constructor() {}

	menuDropdown() {
		this.menu = !this.menu;
	}
}
