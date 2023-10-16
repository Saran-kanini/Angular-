import { Component } from '@angular/core';
import { Current } from '../Current';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.css']
})
export class GetallComponent {
  Currents?:Current[]
  constructor(private apiser:BankService ) { }
  GetAll()
{
  return this.apiser.getData().subscribe(data => this.Currents=data)
 }

}

