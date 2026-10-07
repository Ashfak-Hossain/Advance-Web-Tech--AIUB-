# Lab 02: TypeScript and Asynchronous Programming

This lab introduces TypeScript fundamentals and the core ideas behind asynchronous JavaScript.

## Learning Objectives

By completing the examples, I can:

- declare typed variables, interfaces, and functions;
- distinguish a value from a `Promise` that will produce that value later;
- explain why JavaScript continues while an asynchronous operation is pending;
- consume Promises with `.then()` and `async`/`await`; and
- handle rejected Promises with `try`, `catch`, and `finally`.

## Files

| File | Description |
| --- | --- |
| [`type.ts`](type.ts) | TypeScript variables, primitive types, functions, interfaces, and typed objects |
| [`promise.ts`](promise.ts) | Promise creation, execution order, `async`/`await`, and error handling |

## Run the Examples

From the repository root:

```bash
node midterm/code/02_lab/type.ts
node midterm/code/02_lab/promise.ts
```

In the Promise example, change `showStudent(true)` to `showStudent(false)` to observe the rejected Promise and error-handling path.

## Key Mechanism

```text
Start operation -> Promise pending -> fulfilled with data
                                  -> rejected with an error
```

`await` pauses only the current `async` function. Other JavaScript can continue running while the Promise is pending.
