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

  search(event) {
    let keyword = event;
    this.users = (keyword) ? this.filterByKeyword(keyword) : this.userService.getAllUser();
  }

  filterByKeyword(keyword) {
    return this.users.filter(user => {
      return user.name.indexOf(keyword) != -1;
    });
  }

  delete(id: number) {
    let userDelete = [];
    this.users.map(
      user => {
        if(user.id != id) {
          userDelete.push(user);
        }
      }
    );
    return this.users = userDelete;
  }

}
