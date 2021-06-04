export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: "DMertz", alignment: "lawful neutral" },
      { id: 12, name: "Dana", alignment: "neutral good" },
      { id: 13, name: "Cabbit", alignment: "neutral neutral" },
      { id: 14, name: "GMan", alignment: "neutral good" },
      { id: 15, name: "Dr Horrible", alignment: "lawful evil" },
      { id: 16, name: "Captain Hammer", alignment: "chaotic good" },
      { id: 17, name: "Thundarr", alignment: "chaotic good" },
      { id: 18, name: "Tenchi", alignment: "lawful good" },
      { id: 19, name: "Thing", alignment: "unknown" },
      { id: 20, name: "Ashe", alignment: "chaotic neutral" },
    ];
    return { heroes };
  }
}
