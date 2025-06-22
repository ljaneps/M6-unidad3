import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InventarioComponent } from './components/inventario/inventario.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InventarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Unidad-3-OK';
}
