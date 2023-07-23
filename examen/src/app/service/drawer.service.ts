import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrawerService {
  private isDrawerOpen = true; // Estado inicial: abierto

  constructor() {}

  toggleDrawer(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  getDrawerState(): boolean {
    return this.isDrawerOpen;
  }
}
