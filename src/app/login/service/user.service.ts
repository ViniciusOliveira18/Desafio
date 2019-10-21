import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
@Injectable()
export class UserService {
  user: Usuario [] = [
    {nome: 'Rato', senha:'vini' },
    {nome: 'Lucas', senha:'rolaum'}
  ]

  private usuarioAutenticado = false
  constructor(private router: Router ) { }

  fazerLogin(user : Usuario){
    if( user.nome !=null && user.senha != null){
      this.usuarioAutenticado == true;
      localStorage['token'] = 'xptoh26410x5=50';
      this.router.navigate(['dashboard'])
    }
    else{
      this.usuarioAutenticado = false;
      this.router.navigate(['login'])
      console.log("teste")
      
    }
  }

}
