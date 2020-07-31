import { Component, OnInit } from '@angular/core';
import {IUser} from "../../interfaces/iuser";
import {UserService} from "../../services/user.service";
import {GroupService} from "../../services/group.service";
import {IGroup} from "../../interfaces/igroup";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: IUser[] = [];
  groups: IGroup[] = [];

  totalRec: number;
  page: number = 1;


  constructor(private userService: UserService,
              private groupService: GroupService) { }

  ngOnInit(): void {
    this.users = this.userService.getAllUser();
    this.groups = this.groupService.getAllGroup();
  }

  search(event) {
    let keyword = event;
    this.users = (keyword) ? this.filterByKeyword(keyword) : this.userService.getAllUser();
    this.totalRec = 20;
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
