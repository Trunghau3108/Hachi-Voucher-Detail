import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { User,Task } from '../DTO/product.dto';

@Component({
  selector: 'app-todo-angular',
  templateUrl: './todo-angular.component.html',
  styleUrls: ['./todo-angular.component.scss']
})
export class TodoAngularComponent implements OnInit{
  users!: User;
  tasks: Task[] = [];
  selectedUserId!: number;
  completed: boolean = true;

    constructor(private productService:ProductsService){}

    onUserIdChange(userId: number) {
      this.selectedUserId = userId;
      this.getTask();
    }
    
    getTask() {
      if (this.selectedUserId) {
        this.productService.getTaskList(this.selectedUserId).subscribe((tasks: Task[]) => {
          console.log(tasks);
          this.tasks = tasks; 
        });
      }
    }
  ngOnInit() {
    this.productService.getListUser().subscribe(users => {
      this.users = users;
      console.log(users);
    });
  }

}
