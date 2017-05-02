import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
@Component({
  selector: 'app-git-repo',
  templateUrl: './git-repo.component.html',
  styleUrls: ['./git-repo.component.css']
})
export class GitRepoComponent implements OnInit {
  public buttonCheck = false;
  public error = false;
  public userRepo: Object = {}
  constructor(public gitRef: GitService) { }

  ngOnInit() {
  }

  onClick(name) {
    this.gitRef.setName(name);

    this.gitRef.getUserRepoInfo().subscribe(data => {
      this.userRepo = data;
      this.buttonCheck = true;
      this.error = false;
      //  console.log(this.userRepo);
    },
      err => {
        this.error = true;
        this.buttonCheck = false;
        // console.log(this.gitRef.getName() + " is not found");
        // console.log("My ckjdsbj")
        alert(this.gitRef.getName() + " is not found");
        // alert("hello");
      }

    );

  }

}
