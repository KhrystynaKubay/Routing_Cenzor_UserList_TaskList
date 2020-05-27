import { Component, OnInit } from '@angular/core';
import { IUserList } from './userList.interface';
import { User } from './userList.model';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userLogin: string;
  userPassword: string;
  userEmail: string;
  editStatus: boolean;
  userIndex: number;
  status: boolean;
  noInfo: boolean;
  users: Array<IUserList> = [];
  constructor() { }

  ngOnInit(): void {
  }
  addUser() {
    if (this.userLogin, this.userPassword, this.userEmail) {
      const newUser: IUserList = new User(this.userLogin, this.userPassword, this.userEmail);
      this.users.push(newUser);
      this.resetForm();
      this.noInfo = false;
    }
  }
  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
  editUser(index: number) {
    this.status = true;
    this.userLogin = this.users[index].login;
    this.userPassword = this.users[index].password;
    this.userEmail = this.users[index].email;
    this.userIndex = index;
    this.editStatus = true;
  }
  saveEditUser() {
    this.status = false;
    const editUser: IUserList = new User(this.userLogin, this.userPassword, this.userEmail);
    this.users.splice(this.userIndex, 1, editUser);
    this.resetForm();
    this.editStatus = false;
  }

  private resetForm() {
    this.userLogin = '';
    this.userPassword = '';
    this.userEmail = '';
  }

}
