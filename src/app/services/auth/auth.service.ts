import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from 'src/assets/config/interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // define the subjects
  user: User = null;
  userSubject: BehaviorSubject<User> = new BehaviorSubject(this.user);
  readonly userObservable = this.userSubject.asObservable();

 constructor(
   private http: HttpClient,
   private snack: MatSnackBar,
 ) { }

 // initialize the authentication subscription
 initialize() {
   if (localStorage.getItem('@embassyWebLS') !== null){
     
     const headers = new HttpHeaders({
       'Content-Type': 'application/json; charset=UTF-8'
     });

     const options = { headers };

     const body = {
       email : localStorage.getItem('@embassyWebLS')
     };

     this.http.post(environment.url + 'user/getAdmin',
     JSON.stringify(body),
     options)
     .toPromise().then((res: any) => {
       if (res.status === false) {
         this.user = null;
         this.userSubject.next(this.user);
         
       } else {

         if (Number(res.data.state) === (0 || 2) ){
           this.user = null;
           this.userSubject.next(this.user);
         }
         else{
             this.user = res.data;
             this.userSubject.next(this.user);
         }
       }
     })
     .catch(err => {
       this.user = null;
       this.userSubject.next(this.user);
     });
   } else {
     this.user = null;
     this.userSubject.next(this.user);
   }
 }
 
 async getUser(email): Promise<any[]>{
   const headers = new HttpHeaders({
     'Content-Type': 'application/json; charset=UTF-8'
   });

   const options = { headers };

   const body = {
     email : email
   };

   const result: any = await this.http.post(environment.url + 'user/getAdmin',
   JSON.stringify(body),
   options)
   .toPromise()
   return result.data;
 }

 // login with email and password
 register (user): Promise<boolean> {
   const headers = new HttpHeaders({
     'Content-Type': 'application/json; charset=UTF-8'
   });

   const options = { headers };

   const body = user;

   return this.http.post(environment.url + 'user/register', 
   JSON.stringify(body), options)
   .toPromise()
   .then(async (res: any) => {
     
     if (res.status) {
      this.errorMessage ("Inscription réussie !");
      return true;
       
     }
     else {
       this.errorMessage ("Une erreur est survenue, veuillez réessayer.");
       return false;
     }
   }).catch(err => {
     this.errorMessage ("Une erreur est survenue, veuillez réessayer.");
     return false;
   });
 }


 // login with email and password
 login(user): Promise<boolean> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8'
  });

  const options = { headers };

  const body = {
    email : user.email,
    password : user.password
  };

  return this.http.post(environment.url + 'user/login', 
  JSON.stringify(body), options)
  .toPromise()
  .then(async (res: any) => {
    
    if (res.status) {
       this.user = res.data;
       this.userSubject.next(this.user);
       localStorage.setItem('@embassyWebLS', res.data.email)
       return true;
      
    }
    else {
      this.errorMessage ("Utiisateur non reconnu.");
      return false;
    }
  }).catch(err => {
    this.errorMessage ("Utiisateur non reconnu.");
    return false;
  });
}

 // logout
 logout = () => {
   localStorage.clear();
   window.location.href = '/';
 }


 //ALERTS

 errorMessage(a): void {
   this.snack.open(a, '',
 
   {
     duration: 5000,
     verticalPosition: 'bottom',
     panelClass: 'danger-alert'
   }
 
   ) ;
 }
 
 successMessage(a): void{
   this.snack.open(a, '',
 
   {
     duration: 3000,
     verticalPosition: 'top',
     panelClass: 'success-alert'
   }
 
   );
 }
}

