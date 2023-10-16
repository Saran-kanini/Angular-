import { Component } from '@angular/core';
import { BankService } from '../bank.service';
import { Current } from '../Current';

@Component({
  selector: 'app-current-getby-id',
  templateUrl: './current-getby-id.component.html',
  styleUrls: ['./current-getby-id.component.css']
})
export class CurrentGetbyIdComponent {
  public accountId!: number;
  Currents?:Current
  constructor(private apiser:BankService ) { }
 
  Getbyid()
  {
    return this.apiser.getById(Number(this.accountId))
     .subscribe((data: Current | undefined) => this.Currents =data)
   
  }
}
