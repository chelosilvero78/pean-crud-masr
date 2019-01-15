import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  constructor(private usersService: UsersService, private formBuilder: FormBuilder, private router: Router) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ''
    });
  }

  addUser(name, email) {
    this.usersService.createUser(name, email).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
  }

}
