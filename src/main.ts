import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";

import * as f from "./app/scripts/olo";

console.log(f);

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch((err) => console.error(err));
