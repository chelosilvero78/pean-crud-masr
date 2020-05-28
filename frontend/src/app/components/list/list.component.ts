import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../user.module';
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

  usuario: Usuario[];

  constructor(private usersService: UsersService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.usersService
    .getUsers()
    .subscribe((data: Usuario[]) => {
      this.usuario = data;
      console.log('Data requested-->',this.usuario);
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
  openEditUserDialog(usuario) {
    const dialogConfig = new MatDialogConfig();
    console.log(usuario);
    dialogConfig.data = {
      id_usuario: usuario.id_usuario,
      nombre_usuario: usuario.nombre_usuario,
      usuario_usuario:usuario.usuario_usuario,
      clave_usuario:usuario.clave_usuario,
    };
    this.editUserDialogRef = this.dialog.open(EditComponent, dialogConfig);
    this.editUserDialogRef
        .afterClosed()
        .subscribe(name => this.fetchUsers());
  }
}
