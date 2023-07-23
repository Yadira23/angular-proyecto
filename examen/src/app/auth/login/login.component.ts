import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string =''; // Asegúrate de declarar la propiedad 'email' y su tipo
  password: string ='';
  isLoading: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  onLoginButtonClick() {

    this.isLoading = true;

    // Simulación del proceso de inicio de sesión
    setTimeout(() => {
      this.router.navigate(['/dashboard']);

      this.isLoading = false;
    }, 2000); 

  }
  login() {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
  }
}
