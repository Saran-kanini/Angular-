import { Component } from '@angular/core';
import { Current } from '../Current';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-current-insert',
  templateUrl: './current-insert.component.html',
  styleUrls: ['./current-insert.component.css']
})
export class CurrentInsertComponent {
  Current : Current ={
    accountId: 0,
    balance: 0,
    interestRate: 0,
  };

  constructor(private apiser:BankService){ }

  ngOnInit():void{

  }
  CreateCurrent()
  {
    this.apiser.create(this.Current)
    .subscribe( current=> 
      {
        console.log('Inserted Current'),current
})
}

}
