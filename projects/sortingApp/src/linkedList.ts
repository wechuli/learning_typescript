import { ISortable, Sorter } from "./sorter";

class LinkedListNode {
  next: LinkedListNode | null = null;
  data: number;
  constructor(data: number) {
    this.data = data;
  }
}

export class LinkedList extends Sorter implements ISortable {
  head: LinkedListNode | null = null;
  private count: number = 0;
  add(data: number): void { 
    const node = new LinkedListNode(data);
    if (!this.head) {
      this.head = node;
      this.count = 1;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
    this.count += 1;
  }
  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }
  get Length(): number {
    return this.count;
  }

  at(index: number): LinkedListNode {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }
    let counter = 0;
    let node: LinkedListNode | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    throw new Error("Index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }
    return this.at(leftIndex).data > this.at(rightIndex).data;
  }
  swap(leftIndex: number, rightIndex: number): void {
    [this.at(rightIndex).data, this.at(leftIndex).data] = [
      this.at(leftIndex).data,
      this.at(rightIndex).data
    ];
  }
  print(): void {
    if (!this.head) {
      return;
    }
    let node: LinkedListNode | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
