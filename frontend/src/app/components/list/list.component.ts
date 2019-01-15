import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user.module';
import { UsersService } from '../../users.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  name: string;
  email: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  users: User[];
  constructor(private usersService: UsersService, private router: Router, public dialog: MatDialog) { }

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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.html',
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
