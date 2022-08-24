import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';
import { map, Observable, Subject } from 'rxjs';
import { LocalStorageService } from 'src/app/core/storage/services/local-storage/local-storage.service';
import { environment } from 'src/environments/environment';
import { TokenUserModel } from '../../models/tokenUserModel';
import { UserForLogin } from '../../models/userForLogin';
import { UserLoginResponse } from '../../models/userLoginResponse';
import { setTokenUserModel } from '../../store/actions/auth.actions';
import { AuthStates } from '../../store/auth.reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenUserModel$: Observable<TokenUserModel | undefined> = this.store
  .select(state => state.appAuth)
  .pipe(map(state => state.tokenUserModel));

  apiControllerUrl:string = `${environment.apiUrl}/auth`


  constructor(private httpClient:HttpClient,
    private localStorageService:LocalStorageService,
    private jwtHelperService:JwtHelperService,
    private router:Router,private store: Store<AuthStates>) { }

  login(userForLoginModel:UserForLogin):Observable<UserLoginResponse>{
    const subject = new Subject<UserLoginResponse>();
    this.httpClient.post<UserLoginResponse>(this.apiControllerUrl + '/login',
    userForLoginModel).subscribe({next:response =>{
      if (!response.success) return;
      this.saveToken(response)
      subject.next(response);
    },error:(err) =>{
      subject.error(err);
    },complete:() =>{
      subject.complete();
    }});

    return subject.asObservable();
  }

  saveToken(userLoginResponse:UserLoginResponse){
    this.localStorageService.set('token',userLoginResponse.access_token);
    this.setTokenUserModel(this.jwtHelperService.decodeToken(this.jwtHelperService.tokenGetter()));
  }

  get isAuthenticated():boolean{
    if(this.jwtHelperService.isTokenExpired()) return false;

    return true;
  }

  logOut(){
    this.localStorageService.remove('token')
    this.router.navigateByUrl('/login')
  }

  setTokenUserModel(tokenUserModel: TokenUserModel) {
    this.store.dispatch(setTokenUserModel({ tokenUserModel })); // tokenUserModel -> tokenUserModel:tokenUserModel ile aynı
  }
}
