interface IQueue<T> {
  enqueue: (value: T) => void;
  dequeue: () => T | undefined;
  printQueue: () => void;
  size: () => number;
  isEmpty: () => boolean;
}

function Queue<T>(): IQueue<T> {
  const items: T[] = [];

  const enqueue = (value: T) => {
    items.push(value);
  };

  const dequeue = (): T | undefined => {
    return items.shift();
  };

  const printQueue = () => {
    console.log(items);
  };

  const size = (): number => {
    return items.length;
  };

  const isEmpty = (): boolean => {
    return items.length === 0;
  };

  return {
    enqueue,
    dequeue,
    printQueue,
    size,
    isEmpty,
  };
}

const queue: IQueue<number> = Queue();
const items = queue.printQueue();
queue.enqueue(8);
