import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DfoService } from 'src/app/services/dfo.service';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private dfoService: DfoService
  ) { }

  ngOnInit(): void {

    this.initializeForm();

    const routeParams = this.activatedRoute.snapshot.paramMap;
    const userId = Number(routeParams.get('userId'));

    this.dfoService.getUserByID(userId).subscribe(response => {
      this.form.setValue({
        ID: response.ID,
        name: response.Name,
        age: response.Age,
        address: response.Address
      })
    });
  }

  initializeForm() {
    this.form = this.fb.group({
      ID: [null],
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      age: [null, [Validators.required, Validators.min(1), Validators.max(120)]],
      address: [null, [Validators.maxLength(50)]]
    });
  }

  onSubmit() {
    const user = {
      ID: this.form.controls['ID'].value,
      name: this.form.controls['name'].value,
      age: this.form.controls['age'].value,
      address: this.form.controls['address'].value,
    };
    this.dfoService.updateUser(user).subscribe(response => {
      if (response == true) {
        this.toastr.success('User updated', 'Success');
        this.router.navigate(['/list']);
      }
    },
    error => {
      this.toastr.error('User not registered', 'Error');
    });
  }
}
