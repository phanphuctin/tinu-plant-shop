import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { WelcomeComponent } from "../welcome/welcome.component";
import { authGuard } from "../../auth/auth.guard";

export const DASHBOARD_ROUTES: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: 'welcome',
                component: WelcomeComponent,
                canActivate: [authGuard]
            }
        ]
    }
]