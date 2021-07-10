---
title: -TypeScript 数据类型
categories: 
- TypeScript
tags:
- TypeScript
---
`TypeScript` 数据类型, 一个简单`demo`图书添加查询
`TypeScript` 数据类型, 一个简单`demo`图书添加查询
`TypeScript` 数据类型, 一个简单`demo`图书添加查询

demo:

```typescript
interface BaseCRUD<T> {
    data: Array<T>;
    add: (t: T) => void;
    getBookId: (id: number) => T;
    getBookName: (name: String) => T;
}

class Book {
    id?: number; // todo:fei 在 constructor 没有使用id,所以这里用 ?:
    name: string;
    price: number;

    constructor(name: string, price: number) {
        // this.id = 1; // todo:fei这里不使用,注意定义地方
        this.name = name;
        this.price = price;
    }
}

class BookCRUD implements BaseCRUD<Book> {
    data: Book[] = [];

    add(book: Book): void {
        book = {...book, id: Date.now()};
        this.data.push(book);
        console.log("保存成功");
    };

    //  todo:fei  as 类型断言 ,  @ts-ignore 是忽略检查
    getBookId(id: number): Book {
        return (this.data.find(item => item.id === id)) as Book; //  todo:fei 这里使用下面这种方式也行
        // @ts-ignore
        // return this.data.find(item => item.id === id);
    };

    // @ts-ignore
    getBookName(name: string): Book {
        // @ts-ignore
        return this.data.find(item => item.name === name);
    }
}

const bookCurd = new BookCRUD();
bookCurd.add(new Book("论语", 100));
bookCurd.add(new Book('史记', 200));
console.log(bookCurd.data);

console.log(bookCurd.getBookName("论语"));
console.log(bookCurd.getBookId((bookCurd.data[0].id) as number));


```



[`TypeScript` 手册](https://typescript.bootcss.com/basic-types.html)
[`TypeScript` 备用手册1 ](https://24kcs.github.io/vue3_study/chapter1/03_HelloWorld.html)
[`TypeScript` 备用手册2 ](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)





























