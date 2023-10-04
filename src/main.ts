import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { PessoasComponent } from './app/pessoa/pessoa.component';


platformBrowserDynamic().bootstrapModule(PessoasComponent)
  .catch(err => console.error(err));
