import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foo } from './foo.model';

@Component({
 selector: 'foo',
 templateUrl: './foo.component.html',
 styleUrls: ['./foo.component.css']
})
export class FooComponent{
  //definizione degli attributi 
   data!: Object;  //Il ‘!’ serve a creare variabili non inizializzate
   loading: boolean=false;
   o! :Observable<Object>;
   constructor(public http: HttpClient) {}
   //crea una richiesta http
   makeRequest(): void {
     console.log("here");
     this.loading = true; //dichiara che stiamo aspettando dei dati
     this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1');
     this.o.subscribe(this.getData);
   }
    //Il metodo che notifica la risposta (nota che usiamo una "arrow function")
   getData = (d : Object) =>
   {
     this.data = new Object(d);
     this.loading = false;
   }
    makeCompactPost(): void {
      this.loading = true;
      this.http
      .post('https://jsonplaceholder.typicode.com/posts',
        JSON.stringify({
          body: 'bar',
          title: 'foo',
          userId: 1
        })
      )
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
    }   
    fooData! : Foo[]; //punto esclamativo perche non è ancora stato inizializzato
    oFoo! : Observable<Foo[]>;
    makeTypedRequest() : void{
      //metodo che faccia una get ma che ritorni un observable
      //oFoo : Observable<Foo[]>; va dichiarato tra gli attributi della classe
      this.oFoo = this.http.get<Foo[]>('https://jsonplaceholder.typicode.com/posts');
      this.oFoo.subscribe(data => {this.fooData = data;});
    }

}
