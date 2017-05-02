import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GitRepoComponent } from './git-repo/git-repo.component';
import { HomeComponent } from './home/home.component';
import {Routes,RouterModule} from '@angular/router';
import { GitService } from './git.service';
import { RepoSearchComponent } from './repo-search/repo-search.component';
const routes:Routes =[
  {
    path: "home", component: HomeComponent
  },
  {
    path : "user-repo-info" , component: GitRepoComponent
  },
  {
    path : "repo-info" , component: RepoSearchComponent
  },
  {
    path: "**" , component: HomeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    GitRepoComponent,
    HomeComponent,
    RepoSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
