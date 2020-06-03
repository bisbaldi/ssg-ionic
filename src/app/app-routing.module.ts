import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'add-plants', loadChildren: './pages/plants/plants.module#PlantsPageModule' },
    { path: 'plants/:id', loadChildren: './pages/plant-details/plant-details.module#PlantDetailsPageModule' },
    { path: 'overview', loadChildren: './pages/overview/overview.module#OverviewPageModule'},
    { path: 'add-plant-details', loadChildren: './pages/add-details/add-details.module#AddDetailsPageModule'},
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule)
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
