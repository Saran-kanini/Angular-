import { Component } from '@angular/core';
import { Current } from '../Current';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-current-delete',
  templateUrl: './current-delete.component.html',
  styleUrls: ['./current-delete.component.css']
})
export class CurrentDeleteComponent {
  public accountId!: number;
  Current?:Current;

  constructor(private apiser:BankService){}
  ngOnInit(): void{

  }
  deletebyid()
  {
    return this.apiser.deleteById(Number(this.accountId))
     .subscribe((data: Current | undefined) => this.Current =data)
    
  }
}
