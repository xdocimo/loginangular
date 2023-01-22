// app.routing.ts

import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LogoutComponent } from "./logout/logout.component";
import { IndexViewComponent } from "./index-view/index-view.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

type PathMatch = "full" | "prefix" | undefined;

const appRoutes = [
  { path: "", component: IndexViewComponent, pathMatch: "full" as PathMatch },
  { path: "login", component: LoginComponent, pathMatch: "full" as PathMatch},
  { path: "register", component: RegisterComponent, pathMatch: "full" as PathMatch },
  { path: "logout", component: LogoutComponent, pathMatch: "full" as PathMatch }
];
export const routing = RouterModule.forRoot(appRoutes);