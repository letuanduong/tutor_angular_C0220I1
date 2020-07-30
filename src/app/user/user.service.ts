import { Injectable } from '@angular/core';
import {IUser} from "./iuser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[] = [
    {
      id: 1,
      name: 'nam',
      email: 'nam@gamil.com',
      group_id: 1
    },
    {
      id: 2,
      name: 'vinh',
      email: 'vinh@gamil.com',
      group_id: 1
    },
    {
      id: 3,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    }
  ]

  getAllUser(){
    return this.users;
  }

  constructor() { }
}
