import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public surveyForm:FormGroup;
  displayData:boolean=false;

  public name;
  public place;
  public gender;
  public reference;
  public referenceData=[];

  public placeOptions= [{optionText: "Denmark",optionCode: "DK"},
                        {optionText: "Norway",optionCode: "NO"},
                        {optionText: "USA",optionCode: "US"}];
  
  public genderOptions=[{optionText: "Male",optionCode: "MALE"},
                        {optionText: "Female",optionCode: "FEMALE"}];
  
  referencesList = [];
  selectedItems = [];
  dropdownSettings = {};
           
  constructor(private fb:FormBuilder ) { }

  ngOnInit() {
    this.surveyForm = this.fb.group({
      name:['', [Validators.required]],
      place:['', [Validators.required]],
      gender:['', [Validators.required]],
      references:['', [Validators.required]]

    });

    this.referencesList = [
      { item_id: 1, item_text: "Website" },
      { item_id: 2, item_text: "From friends"},
      { item_id: 3, item_text: "Other" },
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      // itemsShowLimit: 3,
      // allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
 
  onSubmit(data){
   console.log("form data is",data);
   this.name=data.name;
   this.place=data.place.optionText;
   this.gender=data.gender.optionText;
   this.referenceData=data.references
   this.displayData=true;
  }

  }
