import { Component, OnInit } from '@angular/core';
import {IUser} from "../iuser";
import {UserService} from "../user.service";
import {GroupService} from "../../groups/group.service";
import {IGroup} from "../../groups/igroup";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: IUser[] = [];
  groups: IGroup[] = [];
  constructor(private userService: UserService,
              private groupService: GroupService) { }

  ngOnInit(): void {
    this.users = this.userService.getAllUser();
    this.groups = this.groupService.getAllGroup();
  }




}
