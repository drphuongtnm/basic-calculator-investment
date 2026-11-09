# Basic Calculator Investment

This repository is for learning TypeScript only. It is a small practice project, not intended for production use or financial advice.

The program calculates how an investment grows each year, based on an initial amount, an annual contribution, an expected return, and a duration. It prints the results to the console.

## Prerequisites

- [Node.js](https://nodejs.org/)
- The TypeScript compiler:

  ```bash
  npm install -g typescript
  ```

## Compile

From the project root, run:

```bash
tsc
```

This compiles `calculator.ts` to `calculator.js` using the settings in `tsconfig.json`.

## Run

After compiling, run:

```bash
node calculator.js
```

To try different numbers, edit `investmentData` in `calculator.ts`, then compile and run again.
