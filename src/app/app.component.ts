import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterproductComponent } from './Components/masterproduct/masterproduct.component';
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from "./Components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,MasterproductComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularday2';
}
