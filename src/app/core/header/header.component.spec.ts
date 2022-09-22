import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render heading title', () => {
    // arrange
    const fixture = TestBed.createComponent(HeaderComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    // act
    fixture.componentInstance.title = 'Stranger Things Quiz';
    fixture.detectChanges();
    //assert
    expect(compiled.querySelector('h1')?.textContent).toContain('Stranger Things Quiz API');
  });
});
