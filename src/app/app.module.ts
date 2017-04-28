import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GitRepoComponent } from './git-repo/git-repo.component';
import { HomeComponent } from './home/home.component';
import {Routes,RouterModule} from '@angular/router';
import { GitService } from './git.service';
const routes:Routes =[
  {
    path: "home", component: HomeComponent
  },
  {
    path : "repo-info" , component: GitRepoComponent
  },
  {
    path: "**" , component: HomeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    GitRepoComponent,
    HomeComponent
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
