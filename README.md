# Dojo 19-24
Mocking dojo (not only) with Jest

# Theory
See the [docs](./docs/mocking.md) for some basic infos about why mocking is useful and what possibilities you have.

# Task
You've been handed an implementation of a movie storage service.
You were told to insure the correctness of the code by providing unit tests.

Your colleague started the basic setup and cobbled together some wonky and slow tests.

Stabilize the existing tests and enhance them as you see fit.

_Note:_ As your nice boss told you, you are allowed to change the **constructor** of the [MovieService](src/MovieService.ts).
But only, if you see any benefit in it.

# Kata focus
We'll practice to use Jest in our unit tests for more than assertions.
Specifically, try to control your test contexts with the mock functionality, Jest provides.
Don't forget to assert your mocks, if you use them.

You can use fakes, stubs as well as mocks as you see fit.