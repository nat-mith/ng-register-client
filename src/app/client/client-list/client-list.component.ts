import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {

  }
  
  myNewMethod() {
    return this.clientService.myNewMethod();
  }
}
