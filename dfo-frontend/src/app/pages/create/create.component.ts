import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { DfoService } from 'src/app/services/dfo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private dfoService: DfoService
  ) {
  }

  ngOnInit(): void {
    this.initializrForm();
  }

  initializrForm() {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      age: [null, [Validators.required, Validators.min(1), Validators.max(120)]],
      address: [null, [Validators.maxLength(50)]]
    });
  }

  async onSubmit() {
    const user = {
      name: this.form.controls['name'].value,
      age: this.form.controls['age'].value,
      address: this.form.controls['address'].value,
    };
    this.dfoService.createUser(user).subscribe(response => {
      if(response === true) {
        this.toastr.success('User registered', 'Success');
        this.initializrForm();
      }
    },
    error => {
      this.toastr.error('User not registered', 'Error');
    });
  }

}
