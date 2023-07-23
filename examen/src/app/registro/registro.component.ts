import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  // Variables para enlazar con los campos de registro en el formulario
  nombreCompleto: string='';
  email: string='';
  password: string='';
  confirmPassword: string='';
  isLoading: boolean = false;
  constructor(private snackBar: MatSnackBar) {}

  // Función para manejar la lógica de registro
  register() {
    // Ejemplo:
    console.log('Nombre completo:', this.nombreCompleto);
    console.log('Email:', this.email);
    console.log('Contraseña:', this.password);
    console.log('Confirmar contraseña:', this.confirmPassword);

    // Lógica adicional según tus necesidades
    setTimeout(() => {
      this.isLoading = false;
      this.snackBar.open('¡Registro exitoso!', 'Cerrar', { duration: 4000 });
    }, 500);
  }
  onRegisterButtonClick() {
    this.isLoading = true;
    this.register();

  }
}
