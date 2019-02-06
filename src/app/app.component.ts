import { Component, OnInit  } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DatePipe]
})
export class AppComponent implements OnInit {
  title = 'task';
  accoutForm: FormGroup;
  private currentDate ;
  constructor(private datePipe: DatePipe) {}
  ngOnInit() {
    this.getCurrentDate();
    this.accoutForm = new FormGroup({
      accType: new FormControl('ADVERTISING & BUSINESS PROMOTIONS'),
      shrtName: new FormControl('ABP'),
      prntName: new FormControl('Advertising & Busineess Promotions'),
      remarks: new FormControl (''),
      createdBy: new FormControl('NIRANJAN'),
      createdOn: new FormControl(this.currentDate),
      modifiedBy: new FormControl('NIRANJAN'),
      modifiedOn: new FormControl(this.currentDate)
    });
  }
  getCurrentDate() {
    var date = new Date();
    this.currentDate = this.datePipe.transform(date,"dd/MM/yyyy hh:mm:ss")
  }
}
