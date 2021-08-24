import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { State } from 'src/assets/config/interfaces';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth/auth.service';
import { BannerService } from './banner/banner.service';
import { EmbassyService } from './embassy/embassy.service';
import { NewsService } from './news/news.service';

@Injectable({
  providedIn: 'root'
})
export class CentralService {

  // define the subjects
  state: State = {
    loading: true,
    user: null,
    banners: [],
    embassies: [],
    news: [],
  };
  stateSubject: BehaviorSubject<State> = new BehaviorSubject(this.state);
  readonly stateObservable = this.stateSubject.asObservable();

  constructor(
    private authService: AuthService,
    private embassyService: EmbassyService,
    private bannerService: BannerService,
    private newService: NewsService,
    private http: HttpClient,
    private snack: MatSnackBar,
  ) { }

  

  // login with email and password
 askVisa (visa): Promise<boolean> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8'
  });

  const options = { headers };

  const body = visa;

  return this.http.post(environment.url + 'visa/register', 
  JSON.stringify(body), options)
  .toPromise()
  .then(async (res: any) => {
    
    if (res.status) {
     this.errorMessage ("Votre demande a été envoyée, nous vous contacterons.");
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


sendMessage (message): Promise<boolean> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8'
  });

  const options = { headers };

  const body = message;

  return this.http.post(environment.url + 'tool/sendmessage', 
  JSON.stringify(body), options)
  .toPromise()
  .then(async (res: any) => {
    
    if (res.status) {
     this.errorMessage ("Votre message a été envoyé !");
     return true;
      
    }
    else {
      this.errorMessage ("Votre message a été envoyé !");
     return true;
    }
  }).catch(err => {
    this.errorMessage ("Votre message a été envoyé !");
     return true;
  });
}


  private authInit() {
    this.authService.initialize();
    this.authService.userObservable.subscribe(user => this.state = {...this.state, user});
    setTimeout(() => {
      this.setLoading(false);
    }, 2000)
  }

  private embassyInit() {
    this.embassyService.init();
    this.embassyService.stateObservable.subscribe(embassy => this.state = {...this.state, embassies: embassy.embassies});
  }


  private bannerInit() {
    this.bannerService.init();
    this.bannerService.stateObservable.subscribe(banner => this.state = {...this.state, banners: banner.banners});
  }

  private newInit() {
    this.newService.init();
    this.newService.stateObservable.subscribe(news => this.state = {...this.state, news: news.news});
  }

  init() {
    this.authInit();
    this.embassyInit();
    this.bannerInit();
    this.newInit();
  }

  // functions related to the service
  public setLoading(status: Boolean) {
    this.state.loading = status;
    this.stateSubject.next(this.state);
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
    duration: 8000,
    verticalPosition: 'top',
    panelClass: 'success-alert'
  }

  );
}
}
