import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FiscalYear } from '../model/fiscalyear-data';
import { DataService } from '../data.service';

import { GrowlService } from 'ngx-growl';

@Component({
  selector: 'app-create-fiscalyear',
  templateUrl: './create-fiscalyear.component.html'
})
export class CreateFiscalyearComponent implements OnInit {
  fiscalYearForm: FormGroup;
  fiscalYears: FiscalYear[];
  fiscalYear: FiscalYear;

  constructor(private dataservice: DataService,
     private formBuilder : FormBuilder,
     private growlService : GrowlService){}
  getFiscalYears(){
    this.dataservice.getFiscalYears().subscribe(data => {
      this.fiscalYears = data;
    });
  }
  ngOnInit() {

    this.fiscalYearForm = this.formBuilder.group({
      id: ['',[Validators.required, Validators.max(127)]],
      yearDescription: ['', [Validators.required, Validators.max(9999),Validators.min(1000)]],
      startDate: [''],
      endDate: [''],
      isCurrent : 'false',
      isOpen : 'false'
    });
    this.getFiscalYears();
}


addFiscalYear() {
  this.dataservice.addFiscalYear(this.fiscalYearForm.value).subscribe(data => {
    this.fiscalYear = data;
    
    this.growlService.addInfo('New Fiscal Year Added');
    console.log(this.fiscalYear);
  });
  this.getFiscalYears();
}

deleteYear(id) {

  console.log(`Getting Deleted :  ${id}`);
  this.dataservice.deleteFiscalYear(id).subscribe(data => {
    this.growlService.addWarn('Fiscal Year Deleted');
    this.getFiscalYears();
  });
}
}
