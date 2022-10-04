// import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { Router } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
// import { of } from 'rxjs';
// import { HttpService } from '../shared/http-service.service';

// import { CharactersComponent } from './characters.component';

// describe('CharactersComponent', () => {
//   let component: CharactersComponent;
//   let fixture: ComponentFixture<CharactersComponent>;
//   let router: Router;
//   let mockHttpService: any;
//   let CHARACTER: {
//     "name": {
//       "first": string,
//       "middle": string,
//       "last": string
//     },
//     "images": {
//       "head-shot": string,
//       "main": string
//     },
//     "gender": string,
//     "species": string,
//     "homePlanet": string,
//     "occupation": string,
//     "sayings": [
//       string,
//       string,

//     ],
//     "id": number,
//     "age": string
//   }[];

//   beforeEach(async () => {
//     CHARACTER = [
//       { name: { first: 'Philip', middle: 'Jay', last: 'Fry' }, images: { "head-shot": '', main: "https://upload.wikimedia.org/wikipedia/en/2/28/Philip_Fry.png" }, gender: 'Male', species: 'Human', homePlanet: 'Earth', occupation: 'Intergalactic Delivery Boy', sayings: ['Shut up and take my money!', 'I\'m walking on sunshine, woah oh oooh'], id: 1, age: '25' },
//       { name: { first: 'Joshua', middle: 'Jay', last: 'John' }, images: { "head-shot": '', main: "https://upload.wikimedia.org/wikipedia/en/2/28/Philip_Fry.png" }, gender: 'Male', species: 'Alien', homePlanet: 'Mars', occupation: 'Intergalactic Delivery Boy', sayings: ['Shut up and take my money!', 'I\'m walking on sunshine, woah oh oooh'], id: 2, age: '26' }
//     ]
//     mockHttpService = jasmine.createSpyObj(['getCharacters']);

//     await TestBed.configureTestingModule({
//       imports: [RouterTestingModule,
//         RouterTestingModule.withRoutes([]),],
//       declarations: [CharactersComponent],
//       providers: [
//         {
//           provide: HttpService,
//           useValue: mockHttpService
//         }
//       ],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
//     })
//       .compileComponents();

//   });

//   beforeEach(() => {
//     router = TestBed.inject(Router);
//     fixture = TestBed.createComponent(CharactersComponent);
//     component = fixture.componentInstance;
//     // return mocked characters
//     mockHttpService.getCharacters.and.returnValue(of(CHARACTER));
//     fixture.detectChanges();
//   });

//   it('should set characters correctly from service', () => {
//     // assert
//     expect(fixture.componentInstance.showCharacters$).toBeTruthy();
//   });

//   it('should render text heading content', () => {
//     // act
//     const fixture = TestBed.createComponent(CharactersComponent);
//     fixture.detectChanges();
//     const compiled = fixture.nativeElement as HTMLElement;
//     //assert
//     expect(compiled.querySelector('h2')?.textContent).toContain('Characters');
//   });


//   it('should render each character as list item in component', () => {
//     // arrange
//     mockHttpService.getCharacters.and.returnValue(of(CHARACTER));
//     // act
//     fixture.detectChanges();
//     // assert
//     const charaterItemDEs = fixture.debugElement.queryAll(By.css('.character'));
//     expect(charaterItemDEs.length).toEqual(2);
//   })

//   it('should navigate correctly when getCharacterDetails method called with id', () => {
//     // arrange
//     const navigateSpy = spyOn(router, 'navigate');
//     // assert
//     component.getCharacterDetails(1);
//     expect(navigateSpy).toHaveBeenCalledWith(['/character-details', 1]);
//   })

// });
