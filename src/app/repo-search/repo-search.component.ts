import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service';
@Component({
  selector: 'app-repo-search',
  templateUrl: './repo-search.component.html',
  styleUrls: ['./repo-search.component.css']
})
export class RepoSearchComponent implements OnInit {

  public buttonCheck = false;
  public error = false;
  public repoNo = 0 ;
   repoInfo: Object = {}
  constructor(public gitRef: GitService) { }

  ngOnInit() {
  }

  onClick(repoName) {
    this.gitRef.setRepoName(repoName);
    // this.gitRef.check();
    // console.log(this.gitRef.getName()==null);
    this.gitRef.getRepoInfo().subscribe(data => {
      this.repoInfo = data
      this.buttonCheck = true;
      this.error = false;
      // this.repoNo = this.repoInfo.length;
      if(data.total_count==0){
        this.error = true;
        this.buttonCheck = false;
        console.log("I am in search");
        alert(this.gitRef.getRepoName() + " is not found");
      }

      console.log(data);
    },
      err => {
        this.error = true;
        this.buttonCheck = false;
        console.log("I am in search");
        alert(this.gitRef.getRepoName() + " is not found");
      }

    );

  }
}
