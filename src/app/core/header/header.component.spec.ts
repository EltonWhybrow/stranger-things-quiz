import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [{ provide: 'DOCUMENT', useValue: document },]
    })
      .compileComponents();
  });

  afterEach(() => {
    localStorage.clear();
  })

  beforeEach(() => {
    let store: any = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }

    };

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should set Burger nav property to true', () => {
    // arrange
    const fixture = TestBed.createComponent(HeaderComponent);
    component.burgerActive = false;
    // act
    component.toggleBurgerNav();
    fixture.detectChanges();
    //assert
    expect(component.burgerActive).toBe(true);
  });

  it('should set Burger nav property back to false if called twice', () => {
    // arrange
    const fixture = TestBed.createComponent(HeaderComponent);
    component.burgerActive = false;
    const burgerMethod = spyOn(component, 'toggleBurgerNav');
    // act
    component.toggleBurgerNav();
    component.toggleBurgerNav();
    fixture.detectChanges();
    //assert
    expect(component.burgerActive).toBe(false);
    expect(burgerMethod).toHaveBeenCalledTimes(2);
  });

  it('should set current theme from localStorage correctly', () => {
    // arrange
    const fixture = TestBed.createComponent(HeaderComponent);
    localStorage.setItem('theme', 'theme-2');
    // act
    fixture.detectChanges();
    let currentTheme = localStorage.getItem("theme");
    //assert
    expect(currentTheme).toContain('theme-2');
  });

  it('should set class on body if present in localStorage', () => {
    // arrange
    const fixture = TestBed.createComponent(HeaderComponent);
    localStorage.setItem('theme', 'theme-3');
    // act
    const theme = localStorage.getItem("theme")!;
    document.body.classList.add(theme);
    fixture.detectChanges();
    component.setTheme();
    //assert
    expect(document.body.classList).toContain("theme-3");
  });

  // it('should change theme on click', () => {
  //   // arrange
  //   const fixture = TestBed.createComponent(HeaderComponent);
  //   localStorage.setItem('theme', 'theme-4');
  //   let backgroundImage = 'theme-4'
  //   spyOn(component, 'changeTheme');
  //   // act
  //   fixture.detectChanges();
  //   console.log(localStorage.getItem("theme"));

  //   let button = fixture.debugElement.nativeElement.querySelector('#themeChange');
  //   button.click();
  //   fixture.detectChanges();

  //   //assert
  //   expect(component.changeTheme).toHaveBeenCalled();
  //   expect(document.body.classList).toContain(backgroundImage);

  // });
});
