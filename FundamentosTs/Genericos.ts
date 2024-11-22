function identity<T>(arg: T): T {
    return arg;
  }
  
  const num = identity(5);
  console.log(num);
  const str = identity("Hello, TypeScript!");
  console.log(str);
  const arr = identity([1, 2, 3]);
  console.log(arr);
  const obj = identity({ name: "Dante", age: 25 });
  console.log(obj);
  