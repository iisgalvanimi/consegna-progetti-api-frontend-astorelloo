import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

   /*makeCompactRequest(): void {
     this.loading = true;
     this.http
       .get('https://jsonplaceholder.typicode.com/posts/1')
       .subscribe(newData => {
       this.data = newData;
       this.loading = false;
       });
      }
      */
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
}
