import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {
  updateForm: FormGroup;
  constructor(private usersService: UsersService, private router: Router,
     private route: ActivatedRoute, private snackBar: MatSnackBar, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.id = params.id;
    //   this.usersService.getUserById(this.id).subscribe(result => {
    //     this.user = result;
    //     this.updateForm.get('name').setValue(this.user.name);
    //     this.updateForm.get('email').setValue(this.user.email);
    //   });
    // });
  }


  // createForm() {
  //   this.updateForm = this.fb.group({
  //     name: ['', Validators.required ],
  //     email: ['', Validators.required ]
  //   });
  // }
  createForm() {
    this.updateForm = this.fb.group({
      nombre_usuario: ['', Validators.required],
      usuario_usuario: ['', Validators.required],
      clave_usuario: ['', Validators.required]
    });
  }

  // updateUser(id, name, email) {
  //   this.usersService.updateUser(id, name, email).subscribe(() => {
  //     this.snackBar.open('User updated successfully', 'OK', {
  //       duration: 3000,
  //     });
  //   });
  // }
  updateUser(id, nombre_usuario,usuario_usuario,clave_usuario) {
    this.usersService.updateUser(id, nombre_usuario,usuario_usuario,clave_usuario).subscribe(() => {
      this.snackBar.open('User updated successfully', 'OK', {
        duration: 3000,
      });
    });
  }
}
