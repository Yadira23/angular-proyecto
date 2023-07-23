import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-last-users',
  templateUrl: './last-users.component.html',
  styleUrls: ['./last-users.component.css']
})
export class LastUsersComponent implements OnInit {

  lastUsers: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getRandomUsers();
  }

  getRandomUsers() {
    this.httpClient.get('https://randomuser.me/api/?results=50').subscribe((data: any) => {
      this.lastUsers = data.results;
    });
  }

}
