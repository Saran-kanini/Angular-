import { Component } from '@angular/core';
import { Current } from '../Current';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-current-put',
  templateUrl: './current-put.component.html',
  styleUrls: ['./current-put.component.css']
})
export class CurrentPutComponent {
  Current : Current ={
    accountId: 0,
    balance: 0,
    interestRate: 0,
    
  };
  accountId !: number
  constructor(private apiser:BankService){}
  ngOnInit(): void{
  }
  UpdateCurrent()
  {
    this.apiser.update(this.accountId,this.Current).subscribe(update => {
       console.log('update', update)
    });
}
}
