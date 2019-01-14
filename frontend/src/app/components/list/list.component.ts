import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { User } from '../../user.module';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  users: User[];
  displayedColumns = ['name', 'email'];
  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() {
    this.fetchIssues();
  }

  fetchIssues() {
    this.usersService
    .getUsers()
    .subscribe((data: User[]) => {
      this.users = data;
      console.log('Data requested ... ');
      console.log(this.users);
    });
  }
  editIssue(id) {
    this.router.navigate([`/edit/${id}`]);
  }
  deleteIssue(id) {
    this.usersService.deleteUser(id).subscribe(() => {
      this.fetchIssues();
    });
  }

}
