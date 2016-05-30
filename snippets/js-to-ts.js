Object.defineProperty(window, "myAppVersion", {
  value: 'v0.1.0',
  readOnly: true
});

let x = { a: 1 };
x.b = 2;
