import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent implements OnInit {
  searchOption: string = 'byname';
  userList: User[];
  dataSource:any;

  user: User = new User();
  displayedColumns: string[] = ['id', 'name', 'surname', 'email','phone'];

  constructor(private userService: UserService) {}
  isChecked: boolean = false;

  ngOnInit(): void {}

  onSearchOptionChange() {}

  formSubmit() {
    if (this.searchOption == 'all') {
      this.userService.getAllUsers().subscribe((data) => {
        this.userList = data;

        this.dataSource = new MatTableDataSource<User>(this.userList);
      });
    }
  }
}
