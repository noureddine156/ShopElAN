import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private commandeData: any[] = [];

  addProduct(product: any) {
    this.commandeData.push(product);
  }

  getCommandeData() {
    return this.commandeData;
  }
}
