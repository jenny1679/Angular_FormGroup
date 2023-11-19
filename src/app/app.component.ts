import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 【FormControl】
  // email = new FormControl('');
  // updateEmail(){
  //   this.email.setValue('123@123.com')
  // }

  // 【FormGroup + FormControl】
  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
          address: new FormGroup({
            address1: new FormControl('', Validators.required),
            address2: new FormControl(''),
            city: new FormControl(''),
            zip: new FormControl('')
    })
  });
  onSubmit() {
    console.warn(this.userForm.value);
    // console.warn(this.userForm.controls['firstName'].value);
    // console.warn(this.userForm.controls['address','address1'].value);
  }

  updatePartially(){
    this.userForm.patchValue({
      firstName: 'Jimmy',
      address: { address1: 'test address'}
    })
  }

}
