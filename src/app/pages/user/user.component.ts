import { Component, OnInit } from '@angular/core';
import { UserService } from '../../controllers/user.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userRes;
  errorMessage: string;
  id;

  constructor(private userService: UserService, private rutaActiva: ActivatedRoute) { 
  }

  ngOnInit() {
    this.userService.getUser(this.rutaActiva.snapshot.params.name).subscribe(
      data => {
        this.userRes = JSON.parse(data);

      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }

}
