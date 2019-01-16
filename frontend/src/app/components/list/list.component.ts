import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user.module';
import { UsersService } from '../../users.service';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';
import { CreateComponent } from '../create/create.component';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  createUserDialogRef: MatDialogRef<CreateComponent>;
  editUserDialogRef: MatDialogRef<EditComponent>;

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
    this.createUserDialogRef
        .afterClosed()
        .subscribe(name => this.fetchUsers());
  }
  openEditUserDialog(user) {
    const dialogConfig = new MatDialogConfig();
    console.log(user);
    dialogConfig.data = {
      id: user.id,
      name: user.name,
      email: user.email
    };
    this.editUserDialogRef = this.dialog.open(EditComponent, dialogConfig);
    this.editUserDialogRef
        .afterClosed()
        .subscribe(name => this.fetchUsers());
  }
}
