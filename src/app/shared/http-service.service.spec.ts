import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { HttpService } from './http-service.service';

import { IShowInfo } from './show.interface';
import { ICharacter } from './character.interface';
import { IQuestions } from './questions.interface';

// export const mockQuestions: IQuestions[] = [
//   {
//     "id": 1,
//     "question": "In which fictional town does the show take place?",
//     "possibleAnswers": [
//       "Houston",
//       "Hanford",
//       "Hamilton",
//       "Hawkins"
//     ],
//     "correctAnswer": "Hawkins"
//   },
//   {
//     "id": 2,
//     "question": "What is the name of the four friends favourite fantasy tabletop game?",
//     "possibleAnswers": [
//       "The 13th Age",
//       "Quests Of Yore",
//       "Dungeons & Dragons",
//       "Shadowrun",
//       "Star Wars Roleplaying"
//     ],
//     "correctAnswer": "Dungeons & Dragons"
//   },
//   {
//     "id": 3,
//     "question": "Who were the creators of the hit TV show?",
//     "possibleAnswers": [
//       "The Samsung twins",
//       "The Duffer brothers",
//       "Bernard Manning",
//       "Quentin Tarantino",
//       "Steven Martin"
//     ],
//     "correctAnswer": "The Duffer brothers"
//   }]

describe('HttpService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let httpService: HttpService;

  beforeEach(() => {
    //Configures testing app module
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpService
      ]
    });

    //Instantaites HttpClient, HttpTestingController and HttpService
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpService = TestBed.inject(HttpService);
  });

  afterEach(() => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });


  describe('getQuestions', () => {
    let mockExpectedQuestions: IQuestions[];
    let questonUrl: string;

    beforeEach(() => {
      questonUrl = './assets/data/st-questions.json';
      mockExpectedQuestions = [
        {
          "id": 1,
          "question": "In which fictional town does the show take place?",
          "possibleAnswers": [
            "Houston",
            "Hanford",
            "Hamilton",
            "Hawkins"
          ],
          "correctAnswer": "Hawkins"
        },
        {
          "id": 2,
          "question": "What is the name of the four friends favourite fantasy tabletop game?",
          "possibleAnswers": [
            "The 13th Age",
            "Quests Of Yore",
            "Dungeons & Dragons",
            "Shadowrun",
            "Star Wars Roleplaying"
          ],
          "correctAnswer": "Dungeons & Dragons"
        },
        {
          "id": 3,
          "question": "Who were the creators of the hit TV show?",
          "possibleAnswers": [
            "The Samsung twins",
            "The Duffer brothers",
            "Bernard Manning",
            "Quentin Tarantino",
            "Steven Martin"
          ],
          "correctAnswer": "The Duffer brothers"
        }
      ] as IQuestions[];
    });

    it('should return expected Quesion by calling once', () => {
      httpService.getQuestions().subscribe(
        questions => {
          expect(questions).toEqual(mockExpectedQuestions),
            fail
        }
      );

      const req = httpTestingController.expectOne(questonUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(mockExpectedQuestions); //Return mockExpectedQuestions
    });

    it('should be OK returning no question', () => {
      httpService.getQuestions().subscribe(
        questions => expect(questions.length).toEqual(0),
        fail
      );

      const req = httpTestingController.expectOne(questonUrl);
      req.flush([]); //Return empty data
    });

    it('should turn 404 error', () => {
      httpService.getQuestions().subscribe(
        questons => {
          expect(questons.length).toEqual(0),
            fail
        }
      );
      ;
      const req = httpTestingController.expectOne(questonUrl);

      const msg = '404 error occurred';
      req.flush(msg, { status: 404, statusText: 'No questons Found' }); //Return error
    });

    it('should return expected questions when called multiple times', () => {
      httpService.getQuestions().subscribe();
      httpService.getQuestions().subscribe(
        questions => expect(questions).toEqual(mockExpectedQuestions),
        fail
      );

      const requests = httpTestingController.match(questonUrl);
      expect(requests.length).toEqual(2);

      requests[0].flush([]); //Return Empty body for first call
      requests[1].flush(mockExpectedQuestions); //Return mockExpectedQuestions in second call
    });

  });

  describe('getShowInfo', () => {
    let mockExpectedShowInfo: IShowInfo[];
    let showUrl: string;

    beforeEach(() => {
      showUrl = './assets/data/st-info.json';
      mockExpectedShowInfo = [
        {
          "synopsis": "Philip J. Fry is a 25 year old delivery boy living in New York City who is cryogenically frozen on New Year's 1999 for 1000 years, where he wakes up in New New York City on December 31, 2999. There, he meets Turanga Leela, a tough but loving, beautiful one-eyed alien; and Bender, an alcohol-powered bending robot who is addicted to liquor, cigars, stealing, amongst other things. Eventually, they all meet up with Fry's Great, Great, Great, etc... Nephew, Hubert J. Farnsworth. Farnsworth is a very old man who is a genius but is very senile and forgetful. Fry, Leela, and Bender wind up working for Farnsworth's Planet Express Delivery Service. They then meet their co-workers; Amy Wong, who is a Martian intern who comes from a rich family, but is still a human who is very hip. Also, there is Hermes Conrad, who manages the delivery service and is pretty strict. Hermes seems Jamaican in voice and look. And finally, there's Dr. John Zoidberg, a lobster-like alien who is the crew's doctor. Unfortunately, he knows nothing about humans. Fry, Leela, Bender, and sometimes Amy and Dr. Zoidberg travel around the universe risking life and limb delivering packages and performing charitable tasks for tax deductions.",
          "yearsAired": "1999–2013",
          "creators": [
            {
              "name": "David X. Cohen",
              "url": "http://www.imdb.com/name/nm0169326"
            },
            {
              "name": "Matt Groening",
              "url": "http://www.imdb.com/name/nm0004981"
            }
          ],
          "id": 1
        }
      ] as IShowInfo[];
    });

    it('should return expected Show info by calling once', () => {
      httpService.getShowInfo().subscribe(
        show => {
          expect(show).toEqual(mockExpectedShowInfo),
            fail
        }
      );

      const req = httpTestingController.expectOne(showUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(mockExpectedShowInfo); //Return mockExpectedShowInfo
    });

    it('should be OK returning no show info', () => {
      httpService.getShowInfo().subscribe(
        questions => expect(questions.length).toEqual(0),
        fail
      );

      const req = httpTestingController.expectOne(showUrl);
      req.flush([]); //Return empty data
    });

    it('should turn 404 error', () => {
      httpService.getShowInfo().subscribe(
        questons => {
          expect(questons.length).toEqual(0),
            fail
        }
      );
      ;
      const req = httpTestingController.expectOne(showUrl);

      const msg = '404 error occurred';
      req.flush(msg, { status: 404, statusText: 'No questons Found' }); //Return error
    });

    it('should return expected questions when called multiple times', () => {
      httpService.getShowInfo().subscribe();
      httpService.getShowInfo().subscribe(
        questions => expect(questions).toEqual(mockExpectedShowInfo),
        fail
      );

      const requests = httpTestingController.match(showUrl);
      expect(requests.length).toEqual(2);

      requests[0].flush([]); //Return Empty body for first call
      requests[1].flush(mockExpectedShowInfo); //Return mockExpectedShowInfo in second call
    });

  });

  describe('getCharacters', () => {
    let mockExpectedCharacters: ICharacter[];
    let characterUrl: string;

    beforeEach(() => {
      characterUrl = './assets/data/st-characters.json';
      mockExpectedCharacters = [
        {
          "name": {
            "show": "Philip",
            "real": "Jay"
          },
          "images": {
            "details": "",
            "main": "https://upload.wikimedia.org/wikipedia/en/2/28/Philip_Fry.png"
          },
          "gender": "Male",
          "lowdown": "something",
          "occupation": "Intergalactic Delivery Boy",
          "nicknames": "string",
          "sayings": [
            "Shut up and take my money!",
            "I'm walking on sunshine, woah oh oooh",
          ],
          "id": 1,
          "idString": "",
          "age": "25"
        },
      ] as ICharacter[];
    });

    it('should return expected Character by calling once', () => {
      httpService.getCharacters().subscribe(
        character => {
          expect(character).toEqual(mockExpectedCharacters),
            fail
        }
      );

      const req = httpTestingController.expectOne(characterUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(mockExpectedCharacters); //Return mockExpectedCharacters
    });

    it('should be OK returning no show info', () => {
      httpService.getCharacters().subscribe(
        questions => expect(questions.length).toEqual(0),
        fail
      );

      const req = httpTestingController.expectOne(characterUrl);
      req.flush([]); //Return empty data
    });

    it('should turn 404 error', () => {
      httpService.getCharacters().subscribe(
        questons => {
          expect(questons.length).toEqual(0),
            fail
        }
      );
      ;
      const req = httpTestingController.expectOne(characterUrl);

      const msg = '404 error occurred';
      req.flush(msg, { status: 404, statusText: 'No characters Found' }); //Return error
    });

    it('should return expected questions when called multiple times', () => {
      httpService.getCharacters().subscribe();
      httpService.getCharacters().subscribe(
        questions => expect(questions).toEqual(mockExpectedCharacters),
        fail
      );

      const requests = httpTestingController.match(characterUrl);
      expect(requests.length).toEqual(2);

      requests[0].flush([]); //Return Empty body for first call
      requests[1].flush(mockExpectedCharacters); //Return mockExpectedCharacters in second call
    });

  });

});

