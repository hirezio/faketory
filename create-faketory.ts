export function createFaketory<T>(
  createOneFake: (...args: unknown[]) => T
) {

  return { fakeOne, fakeMany };

  function fakeOne(propsToOverride: Partial<T> = {}): T{
    const fakeItem = createOneFake();
    
    return {
      ...fakeItem,
      ...propsToOverride
    }
  }

  function fakeMany(amount: number, itemsToOverride?: Partial<T[]>): T[]{
    const list: T[] = [];
    for (let i = 0; i < amount; i++) {
      let itemOverride: T | undefined = undefined;
      if (itemsToOverride?.[i]) {
        itemOverride = itemsToOverride[i];
      }
      list.push(fakeOne(itemOverride));
    }
    return list;
  }
}