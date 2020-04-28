import { Component, OnInit } from '@angular/core'
import { FormGroup, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NSnackbarService } from 'neutrinos-seed-services';
import { Router } from '@angular/router';
import { proceduresService } from '../../services/procedures/procedures.service';
@Component({
  selector: 'bh-procedure',
  templateUrl: './procedure.template.html'
})

export class procedureComponent implements OnInit {
  myFiles: string[] = [];
  form: FormGroup;
  verticalForm: FormGroup;
  procedure: FormArray;
  submitted = false;



  constructor(private fb: FormBuilder, private router: Router, private service: proceduresService) {



  }

  ngOnInit() {
    this.verticalForm = this.fb.group({
      mens: ['', [Validators.required, Validators.maxLength(4), Validators.pattern(/^[0-9]\d*$/)]],
      department: [''],
      building: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[ A-Za-z0-9_@./#&+-]*$/)]],
      floor: ['', [Validators.required, Validators.pattern(/^[ A-Za-z0-9_@./#&+-]*$/), Validators.maxLength(50)]],
      nooflocks: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[0-9]*$/)]],
      notes: ['', [Validators.required, Validators.pattern(/^[ A-Za-z0-9_@./#&+-]*$/), Validators.maxLength(2000)]],
      uploadimage: ['', Validators.required],
    }),
      this.form = this.fb.group(
        {
          //mens: ['', Validators.required,Validators.pattern('[0-9]')],
          procedure: this.fb.array([this.addProcedure()]),

        });



  }




  get f() {
    return this.verticalForm.controls;
  }
  addProcedure(): FormGroup {
    return this.fb.group({
        id:['',[Validators.required,Validators.pattern(/^LOTO[0-9]{2}$/)]],
      men: ['', [Validators.required, Validators.maxLength(4), Validators.pattern(/^[0-9]\d*$/)]],
      title: ['', [Validators.required, Validators.pattern(/^[ A-Za-z0-9_@./#&+-]*$/), Validators.maxLength(500)]],
      hazard: ['', [Validators.required]],
      lockoutstate: ['', [Validators.required]],
      locks: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(4)]],
      normalstate: ['', [Validators.required]],
      text: ['', [Validators.required, Validators.pattern(/^[ A-Za-z0-9_@./#&+-]*$/), Validators.maxLength(2000)]],
      image: ['']

    });

  }

  add(): void {

    this.service.procedureDetails = this.form.get('procedure').value;
    this.procedure = this.form.get('procedure') as FormArray;
    this.procedure.push(this.addProcedure());

  }

  addProce() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.verticalForm.invalid && this.form.invalid) {

      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.verticalForm.value, null, 4));
    console.log(this.verticalForm);
    console.log(this.form.value);
    let a = this.form.get('procedure').value

    for (let i of a) {
      this.service.procedureDetails.push(i);

    }
    this.service.procedureDetails.push(this.form.get('procedure').value)
    let b = this.verticalForm.value
    for (let i of b) {
      this.service.procedureDetails.push(i);
    }
    this.service.procedureDetails.push(this.verticalForm.value)

    console.log(this.service.procedureDetails)
    this.router.navigate(['home/dashboard']);
    console.log(this.service.procedureDetails)
    console.log(this.service.procedureDetails[0].id);
    this.storeObj();

  }
 
  
  
 
  storeObj() {
    var obj = this.service.procedureDetails;
    var id = this.service.procedureDetails[0].id;
    // Put the object into storage
    sessionStorage.setItem(id, JSON.stringify(obj));

    // Retrieve the object from storage
    var retrievedObject = sessionStorage.getItem(id);

    console.log('retrievedObject: ', JSON.parse(retrievedObject));
}
  

 
 
  
  
  



  handleFileInput(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          
          this.myFiles.push(event.target.result);
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }



  

}
