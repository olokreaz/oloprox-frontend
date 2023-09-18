import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { NotfoundComponent } from './pages/error/notfound/notfound.component';

const routes: Routes = [
	{
		path: '',
		component: WelcomeComponent,
		data: {
			name: 'Welcome',
		},
	},
	{
		path: '**',
		component: NotfoundComponent,
		data: {
			name: 'NotFound',
		},
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
