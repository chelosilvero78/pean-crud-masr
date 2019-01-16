import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user.module';
import { UsersService } from '../../users.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { CreateComponent } from '../create/create.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  createUserDialogRef: MatDialogRef<CreateComponent>;

  users: User[];

  constructor(private usersService: UsersService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.usersService
    .getUsers()
    .subscribe((data: User[]) => {
      this.users = data;
      console.log('Data requested ... ');
      console.log(this.users);
    });
  }
  editUser(id) {
    this.router.navigate([`/edit/${id}`]);
  }
  deleteUser(id) {
    this.usersService.deleteUser(id).subscribe(() => {
      this.fetchUsers();
    });
  }

  openAddUserDialog() {
    this.createUserDialogRef = this.dialog.open(CreateComponent);
  }
}
