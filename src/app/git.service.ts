import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GitService {
  public urlForRepo = "https://api.github.com/search/repositories?q=";
  public repoName= "";
  public urlparam = "&sort=stars&order=asc";
  public url = "https://api.github.com/users/";
  public userName: string = "";
  constructor(private _http: Http) { }

  setRepoName(name) {
    this.repoName = name;
  }

  getRepoName() {
    return this.repoName;
  }

  getRepoInfo(): Observable<any> {
    return this._http.get(this.urlForRepo + this.repoName + this.urlparam).map(
      res => res.json()
    )
  }

  getUserRepoInfo(): Observable<any> {
    return this._http.get(this.url + this.userName + "/repos").map(
      res => res.json()
    )
  }

  getUserDetails(): Observable<any> {
    return this._http.get(this.url + this.userName).map(
      data => data.json()
    );
  }

  getName() {
    return this.userName;
  }

  setName(name) {
    this.userName = name;
  }

  check() {
    // console.log(this.userName);
  }
}
