import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
// Inyectar el HttpClient en el constructor de tu componente
constructor(private http: HttpClient) { }

// Método para enviar los datos al backend
enviarDatos(email: string, password: string) {
  const url = 'http://tu_servidor_php.com/backend.php'; // Reemplaza con la URL de tu backend PHP
  
  const data = {
    email: email,
    password: password
  };

  this.http.post(url, data).subscribe(
    response => {
      console.log('Registro exitoso');
    },
    error => {
      console.error('Error al registrar:', error);
    }
  );
}


}
