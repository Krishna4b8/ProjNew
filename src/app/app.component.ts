import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang7';
  showFiller = false;
  showFiller1 = false;
  showFiller2 = false;
  showFiller3 = false;
  showFiller4 = false;
  
    states: string[] = [
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
      'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
      'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
      'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
      'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
      'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
      'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];


    toppings = new FormControl();

    toppingList: string[] = ['104 TZP PHOS (AST-NT18)', '104-B216L2(AST-N01A)', '104-C235L2(AST-NT23)', 
    '104-D26L2(AST-N01A)', '104-E16L2(AST-N01A)', '104-F106L2(AST-N01A)'];

    toppings1 = new FormControl();

    toppingList1: string[] = ['417-Initial Tests', '635-Initial Tests'];
  
}
