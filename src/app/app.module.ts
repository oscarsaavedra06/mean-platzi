import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MomentModule } from 'ngx-moment';
import { AnswerComponent } from './answer/answer.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MomentModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
