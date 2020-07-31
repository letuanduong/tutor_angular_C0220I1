import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {IGroup} from "../../interfaces/igroup";
import {UserService} from "../../services/user.service";
import {GroupService} from "../../services/group.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  addUserForm: FormGroup;
  groups:IGroup[];

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private groupService: GroupService,
              private router: Router) { }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      group_id: ['']
    })
    this.groups = this.groupService.getAllGroup();
  }

  get name() {
    return this.addUserForm.get('name');
  }

  get email() {
    return this.addUserForm.get('email');
  }

  submit() {
    let data = this.addUserForm.value;
    data.group_id = Number(data.group_id);
    this.userService.add(data);
    this.router.navigate(['users']);
    console.log(this.userService.getAllUser());
  }
}
