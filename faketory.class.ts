export class Faketory<T>{

  constructor(private fakeOneFn: ()=>T) {}

  fakeOne(propsToOverride: Partial<T> = {}): T{
    const fakeItem = this.fakeOneFn();
    return {
      ...fakeItem,
      ...propsToOverride
    }
  }

  fakeMany(amount: number, itemsToOverride?: Partial<T[]>): T[]{
    const list: T[] = [];
    for (let i = 0; i < amount; i++) {
      let itemOverride: T | undefined = undefined;
      if (itemsToOverride && itemsToOverride[i]) {
        itemOverride = itemsToOverride[i];
      }
      list.push(this.fakeOne(itemOverride));
    }
    return list;
  }
}
