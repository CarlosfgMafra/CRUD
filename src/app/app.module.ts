import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CadastrarComponent } from './modules/cadastrar/cadastrar.component';
import { ListarComponent } from './modules/listar/listar.component';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { HeaderComponent } from './shared/header/header/header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from "@angular/material/divider";
import {MatInput, MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    ListarComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
