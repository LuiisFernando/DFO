import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DfoService } from 'src/app/services/dfo.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.scss']
})
export class GetComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute,
    private location: Location,
    private dfoService: DfoService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      ID: [null],
      name: [{value: null, disabled: true}, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      age: [{value: null, disabled: true}, [Validators.required]],
      address: [{value: null, disabled: true}]
    });

    const routeParams = this.activateRoute.snapshot.paramMap;
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

  goBack(): void {
    this.location.back();
  }

}
