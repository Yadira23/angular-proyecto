import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrawerService } from '../service/drawer.service';
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showLastUsers = false;
  lastUsers: any[] = [];
  showLastUsersTable = false;
  
totalUsers: number = 0;
//pageSize: number = 10;
pageSize = 6;
pageSizeOptions: number[] = [5, 10, 20]; // Opciones para elegir cuántos elementos mostrar por página
pageIndex: number = 0; // Página actual del paginador

  constructor(private drawerService: DrawerService,private httpClient: HttpClient, private router: Router) {}
  

  ngOnInit() {
    // Cargar los usuarios random solo si showLastUsersTable es true
    if (this.showLastUsersTable) {
      this.loadLastUsers();
    }
  }

  getRandomUsers() {
    this.httpClient.get('https://randomuser.me/api/?results=50').subscribe((data: any) => {
      const startIndex = this.pageIndex * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      this.lastUsers = data.results.slice(startIndex, endIndex);
      this.totalUsers = data.results.length; // Mantén el valor total de usuarios como 50
    });
  }
  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex; // Actualiza el índice de página actual
    this.pageSize = event.pageSize;
    this.getRandomUsers();
  }
  loadLastUsers() {
    this.showLastUsersTable = true;
    this.getRandomUsers();
  }
  toggleLastUsers() {
    this.showLastUsersTable = !this.showLastUsersTable;

    // Cargar los usuarios random solo si showLastUsersTable es true
    if (this.showLastUsersTable) {
      this.loadLastUsers();
    }
  }
  
  getDrawerState(): boolean {
    return this.drawerService.getDrawerState();
  }

  toggleDrawer(): void {
    this.drawerService.toggleDrawer();
  }
  
  openLogin() {
    this.router.navigate(['/login']);
  }
  logout() {
    this.router.navigate(['/login']);
  }

}

