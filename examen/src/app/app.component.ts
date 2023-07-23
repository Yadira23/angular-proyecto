import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMatCourse';
  constructor(private router: Router) {}

  openLogin() {
    // Redirige a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

  logout() {
    // Realiza el proceso de cierre de sesión si es necesario
    // Luego, redirige nuevamente a la página de inicio de sesión
    // Por ejemplo, puedes eliminar las credenciales de autenticación del usuario en el frontend.
    this.router.navigate(['/']);
  }
}
