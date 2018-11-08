import { FieldType, FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup, FormArray } from '@angular/forms';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';


export interface StepType {
  label: string;
  fields: FormlyFieldConfig[];  
}

@Component({
  selector: 'formly-tabtype',
  template: `
<ngb-tabset  #tabs="ngbTabset" type="pills" [justify]="'justified'" (tabChange)="onTabChange($event)">
      <div *ngFor="let f of field.fieldGroup; let index = index;">  
        <ngb-tab id="tab-{{index}}" [disabled]="index>0 && !isValid(index-1)" >
            <ng-template ngbTabTitle >                
             <button class="btn btn-circle mr-2" >
                <span *ngIf="!isActive(index)" class="oi oi-pencil iconic" title="reload"       aria-hidden="true"></span>
                <span *ngIf="isActive(index)"><b>{{ index }}</b></span>
                </button>
                <span class="h6">{{ getStepTitle(index) }}</span>                 
            </ng-template>
            <ng-template ngbTabContent>             
               <formly-form       
                  [model]="model"
                  [fields]="f.fieldGroup"
                  [options]="options"
                  [form]="form">                        
              </formly-form>               
            </ng-template>
        </ngb-tab>
    </div>
</ngb-tabset>
<div>
    <button *ngIf="selectedTab !== 'tab-0'" class="btn btn-primary mr-2" type="button" (click)="prevStep(activedStep)">Indietro</button>
    <button *ngIf="!last" class="btn btn-primary" type="button" [disabled]="nextState" [disabled]="!isValid(activedStep)" (click)="nextStep(activedStep)">Avanti</button>     
</div>
  `,
  styleUrls: ['./app.component.css']
})


export class TabTypeComponent extends FieldType implements OnInit {
  
  activedStep = 0;  

  @ViewChild('tabs') tabs:NgbTabset;    

  last = false;
  
  _selectedTab = 'tab-0';

  steps: StepType[] = [];

  ngOnInit() {                   
    this.steps = (this.to.steps);       
 
  }
  
  //is never called???
  //onPopulate(field: FormlyFieldConfig) {             
  //  this.field.fieldGroup = ([]).concat(this.to.steps.map((val)=>{ return {fieldGroup: val.fields} }));
  //}


  isActive(index): boolean{
    return ('tab-'+index) == this.tabs.activeId
  }

  isValid(index): boolean {      
      let tab = this.steps[index];
      for(let subfield of tab.fields){               
        const contrl =this.form.get( subfield.key );  
        if (contrl && !contrl.valid)
         return false;
      }      
      return true;
  }


  prevStep(step) {
    if (step==0)
        return;
    this.activedStep = step - 1;
    this.selectActiveStep();
  }

  nextStep(step) {
    if (step == this.steps.length-1){
        return true;
    }        
    this.activedStep = step + 1;
    this.selectActiveStep();
  }

  selectActiveStep(){
    this.tabs.select('tab-'+ this.activedStep);
  }

  
  public get lastIndex() : string {
    return 'tab-'+ (this.steps.length-1);
  }

  public get selectedTab() : string {
    return this._selectedTab;
  }

  
  public set selectedTab(value : string) {
      this._selectedTab = value;
      this.activedStep = +value.replace('tab-','');
  }
  

  getStepTitle(index){
      let step = this.steps[index];
      if (step && step.label){
          return step.label
      }
      return "Passo "+index;
  }

  onTabChange($event){
    this.selectedTab = $event.nextId        
    if (this.lastIndex == $event.nextId as string){
        this.last=true;
    }else{
        this.last=false;
    }
 }


}