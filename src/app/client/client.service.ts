import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }
  
  myNewMethod(){
    return 'valor de retorno do meu primeiro método';    
  }
}
