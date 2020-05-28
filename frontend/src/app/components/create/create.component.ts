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

    // this.form = this.formBuilder.group({
    // name: ['', Validators.required],
    // email: ['', Validators.required ]
    this.form = this.formBuilder.group({

    });
  }

  addUser(nombre_usuario,usuario_usuario,clave_usuario) {
    console.log("form-->",this.form);
    this.usersService.createUser(nombre_usuario,usuario_usuario,clave_usuario).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  ngOnInit() {
  }

}
