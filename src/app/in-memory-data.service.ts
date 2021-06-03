export class InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'DMertz' },
      { id: 12, name: 'Dana' },
      { id: 13, name: 'Cabbit' },
      { id: 14, name: 'GMan' },
      { id: 15, name: 'Dr Evil' },
      { id: 16, name: 'Hammerman' },
      { id: 17, name: 'Kyle' },
      { id: 18, name: 'Tenchi' },
      { id: 19, name: 'Thing' },
      { id: 20, name: 'Ashe' }
    ];
    return { heroes };
  }
}
