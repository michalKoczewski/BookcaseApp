import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "registration",
    loadChildren: () =>
      import("./registration/registration.module").then(
        (m) => m.RegistrationPageModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "add-book",
    loadChildren: () =>
      import("./add-book/add-book.module").then((m) => m.AddBookPageModule),
  },
  {
    path: "list",
    loadChildren: () =>
      import("./list/list.module").then((m) => m.ListPageModule),
  },
  {
    path: 'userpanel',
    loadChildren: () => import('./userpanel/userpanel.module').then( m => m.UserpanelPageModule)
  },
  {
    path: 'book-details',
    loadChildren: () => import('./book-details/book-details.module').then( m => m.BookDetailsPageModule)
  },
  {
    path: 'userpassword',
    loadChildren: () => import('./userpassword/userpassword.module').then( m => m.UserpasswordPageModule)
  },
  {
    path: 'useremail',
    loadChildren: () => import('./useremail/useremail.module').then( m => m.UseremailPageModule)
  },
  {
    path: 'usercity',
    loadChildren: () => import('./usercity/usercity.module').then( m => m.UsercityPageModule)
  },
  {
    path: 'userdata',
    loadChildren: () => import('./userdata/userdata.module').then( m => m.UserdataPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
