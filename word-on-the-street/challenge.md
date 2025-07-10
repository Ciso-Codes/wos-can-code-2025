# Word on the Street - Your First Mini-Hackathon Challenge

## Objective

Create a simple word guessing game (similar to Hangman) that runs in the Node.js console using `readline/promises`.

## Requirements

### Functional Requirements

- The game must randomly select a secret word from a predefined list.
- The secret word must not be displayed to the user.
- Prompt the user to guess one letter at a time.
- Provide feedback for each guess:
  - Inform the user if the guess is correct or incorrect.
  - Show the number of incorrect guesses remaining.
  - Display a list of all incorrect guesses made so far.
- End the game with a congratulatory message when the word is completely guessed.
- End the game with a failure message if the guess limit is reached.

### Technical Requirements

- Use the async version of Node’s `readline` module: `readline/promises`.
- Store the secret words in an array.
- Use `Math.random()` to select the secret word.
- The guess limit should be configurable (default to 5).
- Input should be case-insensitive and only accept single alphabetical characters.
- Repeated guesses (correct or incorrect) should not count against the player and should notify them.

### Stretch Goals

- Display the current progress of the guessed word with underscores (`_`) for unguessed letters.
- Allow the player to choose the difficulty level (e.g., Easy = 7 incorrect guesses, Hard = 3 incorrect guesses).
- Add categories to the word list (e.g., tech, animals, food).
- Add an option to play again after the game ends.
- Display ASCII art or color feedback using [libraries like `colors`](https://www.npmjs.com/package/colors) (if you are initializing an `npm` project).

## Example Output Without Current Progress Display

```plaintext
Welcome to Word on the Street!

Incorrect guesses: 0/5
Incorrect Letters: []

Guess a letter: e
Correct guess!

Incorrect guesses: 0/5
Incorrect Letters: []

Guess a letter: b
Incorrect guess!

Incorrect guesses: 1/5
Incorrect Letters: [b]

...
```

## Example Output With Current Progress Display

```plaintext
Welcome to Word on the Street!

Incorrect guesses: 0/5
Incorrect Letters: []

Guess a letter: b
Correct guess!

b _ _ _ _ _
Incorrect guesses: 0/5
Incorrect Letters: []

Guess a letter: c
Incorrect guess!

b _ _ _ _ _
Incorrect guesses: 1/5
Incorrect Letters: [c]

...
```

## Submission Guidelines

- Submit your completed `word-on-the-street.js` file.
- Make sure your code runs without errors using Node.js.
- Include inline comments for clarity where helpful.

Happy coding!