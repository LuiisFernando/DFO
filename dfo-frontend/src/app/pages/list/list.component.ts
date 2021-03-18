import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DfoService } from 'src/app/services/dfo.service';
import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  users: User[];

  constructor(
    private dfoService: DfoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.dfoService.listUsers().subscribe(response => {
      this.users = response;
    })
  }

  goToUpdate(id) {
    this.router.navigate([`/update/${id}`]);
  }

  goToView(id) {
    this.router.navigate([`/get/${id}`]);
  }

  loadUsers() {

  }

}
