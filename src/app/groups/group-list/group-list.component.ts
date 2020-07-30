import { Component, OnInit } from '@angular/core';
import {GroupService} from "../group.service";
import {IGroup} from "../igroup";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  groups: IGroup[] = [];

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.getAllGroup();
  }

  getAllGroup(){
    this.groups = this.groupService.getAllGroup();
  }

}
