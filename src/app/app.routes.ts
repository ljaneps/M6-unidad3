import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inventario',
    loadComponent: () => import('./components/inventario/inventario.component').then(m => m.InventarioComponent)
  }
];
