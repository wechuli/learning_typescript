class HoldAnything<T> {
  data: T;
}

const holdString = new HoldAnything<string>();
const holdNumber = new HoldAnything<number>();

holdNumber.data = 34;

holdString.data = "dsds";
