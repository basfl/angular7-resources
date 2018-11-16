# This is *routing*

* app.module.ts
  * import { Routes, RouterModule } from '@angular/router'
  * const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent },
  { path: 'servers', component: ServersComponent },
  { path: 'servers/:id/edit', component: EditServerComponent }
];
  * add  RouterModule.forRoot(appRoutes) to imports
* links in html
  *  add   routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" to HTML elements 
  * add   routerLink="/" to a HTML 
  * add <router-outlet></router-outlet> to app.component.html
* rerouting inside type script 
    *  Inject :  constructor(private router:Router) { }
    *  Add this.router.navigate(['/servers',id,'edit'],{queryParams:{'allowEdit':'1'},fragment:'loading'}) : this correspond to
        http://localhost:4200/servers/1/edit?allowEdit=1#loading
* rerouting inside HTML + queryparam & fragment
    * add [routerLink]="['/servers',5,'edit']" [queryParams]="{allowEdit:'1'}" fragment="loading" to "a" HTML tag

* Getting parameter inside TypeScript
    * inject constructor(private route:ActivatedRoute) { }
    *  this.user={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    };
    * If we reload/redirect page we can use
      this.route.params.subscribe(
      (params:Params)=>{
        this.user.id=params['id'];
        this.user.name=params['name'];
      }
    );
* Getting query parametrs
  *  inject constructor(private route:ActivatedRoute) { }
  * approach 1 :
    *  this.route.snapshot.queryParams
    *  this.route.snapshot.fragment
  * approach 2 if we reroute within page
    *   this.route.queryParams.subscribe();
    *   this.route.fragment.subscribe();
* nested rout
  * use children array when defining the router in app.module.ts 
   e.g :
    {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent },
    ]
  },

  * provide <router-outlet></router-outlet> in parent 
* preserve url while redirecting using queryParamsHandling :
   
   *  this.router.navigate(['edit'], { relativeTo: this.route ,queryParamsHandling:'preserve'});
* wildcard
   * use ** in app.module.ts Note: make sure it is the last
   
* when we have many roting it is good practice to move them to their module e.g app-routing.module.ts

* Protect the route using   canActivateChild and auth-guard.ervice