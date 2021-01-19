import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/classes/user/user.guard';
 
 
const appRoutes: Routes = [
    { 
        path: 'userList', 
        loadChildren: () => import('./page/user-list/user-list.module').then(m => m.UserListModule),
        canActivate: [UserGuard] 
    },{ 
        path: 'login', 
        loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule) 
    },{
        path: '**',
        redirectTo: 'login',        
        pathMatch: 'full'
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [
    ]
})
export class AppRoutingModule { 
}