import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public buttonCheck = false;
  public error = false;
  public userData: Object = {}
  constructor(public gitRef: GitService) { }

  ngOnInit() {
  }

  onClick(name) {
    this.gitRef.setName(name);
    // this.gitRef.check();
    // console.log(this.gitRef.getName()==null);
    this.gitRef.getUserDetails().subscribe(data => {
      this.userData = data
      this.buttonCheck = true;
      this.error = false;
    },
      err => {
        this.error = true;
        this.buttonCheck = false;

        alert(this.gitRef.getName() + " is not found");
      }

    );

  }

}
