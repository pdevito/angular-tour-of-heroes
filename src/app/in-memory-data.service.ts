import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Hero } from "./hero";

@Injectable({
  providedIn: "root",
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      {
        id: 1,
        name: "DMertz",
        alignment: "lawful neutral",
        age: 20,
        occupation: "Instructor of Machine Speak",
        trait: "Wise",
      },
      {
        id: 2,
        name: "Dana",
        alignment: "neutral good",
        age: 20,
        occupation: "Bearer of the Red Ring and Berserker",
        trait: "Berserker",
      },
      {
        id: 3,
        name: "Cabbit",
        alignment: "neutral neutral",
        age: 17,
        occupation: "Eater of carrots",
        trait: "Short Attention Span",
      },
      {
        id: 4,
        name: "GMan",
        alignment: "neutral good",
        age: 20,
        occupation: "Night Sky Watcher",
        trait: "Wise",
      },
      {
        id: 5,
        name: "Dr Horrible",
        alignment: "lawful evil",
        age: 25,
        occupation: "Mad Inventor",
        trait: "Awkward",
      },
      {
        id: 6,
        name: "Captain Hammer",
        alignment: "chaotic good",
        age: 25,
        occupation: "Selfish Hero",
        trait: "Narcissism",
      },
      {
        id: 7,
        name: "Thundarr",
        alignment: "chaotic good",
        age: 35,
        occupation: "Hero",
        trait: "Barbarian",
      },
      {
        id: 8,
        name: "Tenchi",
        alignment: "lawful good",
        age: 20,
        occupation: "Monk",
        trait: "Mysterious",
      },
      {
        id: 9,
        name: "Thing",
        alignment: "unknown",
        age: 35,
        occupation: "Hand Servant",
        trait: "Mysterious",
      },
      {
        id: 10,
        name: "Ashe",
        alignment: "chaotic neutral",
        age: 35,
        occupation: "Servant of the Book and the One With the Gun",
        trait: "Rough",
      },
    ];
    return { heroes };
  }
}
