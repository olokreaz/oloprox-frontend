import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../environments/environments';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	env = environment;

	protected readonly environment = environment;

	public constructor(private titleService: Title) {}

	public setTitle(newTitle: string) {
		this.titleService.setTitle(newTitle);
	}
}
