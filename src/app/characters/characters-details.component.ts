import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ICharacter } from '../shared/character.interface';
import { HttpService } from '../shared/http-service.service';

@Component({
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {

  characterId: any;
  characterDetails: ICharacter | undefined;

  constructor(
    private http: HttpService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    /*
    Get param id from url and use to detemine who details to show
    */
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = this.route.snapshot.paramMap.get('id');
      this.characterId = id;
      // console.log('characterID', this.characterId);
    })

    /*
    Get the character details passing n the idString which is the cast character name
    */
    this.http.getCharacterDetails(this.characterId).subscribe((data: ICharacter | any) => {
      this.characterDetails = data[0]
    });


  }

}
