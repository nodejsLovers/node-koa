import {bootstrap} from "@angular/platform-browser-dynamic";
import {ROUTER_PROVIDERS} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";
import 'rxjs';
import "./../public/style/style.scss";
import {RootService} from "./services/root.service";
import {AppComponent} from "./components/app/app.component";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    RootService,
    HTTP_PROVIDERS,
    {provide: 'AUTHOR', useValue: 'xiaomo'}
]);
