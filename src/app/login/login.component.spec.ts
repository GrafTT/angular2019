import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';

import { LoginComponent } from './login.component';
import { AuthService } from '../services/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userServiceStub: Partial<AuthService>;
  userServiceStub = {
    login: (user) => {
      if (user.email === this.user.email) {
        localStorage.setItem("user", JSON.stringify(user));
        return true;
      } else {
        return false;
      }
    },
    user: {
      id: 0,
      firstName: 'Viacheslav',
      lastName: 'Lamash',
      email: 'test@test.ru',
      password: '123456'
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent],
      imports: [FormsModule],
      providers: [{provide: AuthService, useValue: userServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit submit', (done) => {
    // spyOn(component.onSubmitLogin, 'emit')
    // const nativeElement = fixture.nativeElement;
    // const button = nativeElement.querySelector('[type="submit"]');
    // button.dispatchEvent(new Event('click'));
    // fixture.detectChanges();
    // expect(component.onSubmitLogin.emit).toHaveBeenCalledWith();


    // component.onSubmitLogin.subscribe(foo => {
    //   expect(foo).toEqual('');
    //   done();
    // });
    // component.handleSubmit();
  });

  it('should emit submit', () => {
    component.email = userServiceStub.user.email
    component.handleSubmit();
    fixture.detectChanges();
    expect(component.error).toEqual('');
    component.email = ''
    component.handleSubmit();
    expect(component.error).toEqual('Wrong email!');
  });
});
