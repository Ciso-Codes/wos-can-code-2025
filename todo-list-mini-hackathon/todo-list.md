
# To-do List Mini Hack-a-thon

## Overview

In this mini-hackathon challenge, you will build a command-line to-do list application in Node.js using `readline/promises`. Users can add tasks, display the list, mark tasks as complete, delete tasks, and exit the program.

Each task should be assigned a unique ID when created. These IDs should remain stable and not change even when tasks are deleted. Avoid using the array index as the task ID to prevent confusion when the list changes. You may use a simple counter that increments with each new task.

## Requirements

### Functional Requirements

- Display a menu with options to:
  1. View the current to-do list
  2. Add a new task
  3. Mark a task as complete
  4. Delete a task
  5. Exit the program
- Allow the user to add multiple tasks in a row
- Allow tasks to be marked as complete and update their display state (`[ ]` → `[X]`)
- Allow tasks to be deleted after confirmation
- Persist unique task IDs for the duration of the program

### Technical Requirements

- Use `readline/promises` for user input
- Use in-memory storage (e.g., an array) for the task list
- Each task should be an object with `id`, `description`, and `isComplete` properties
- Do not rely on array index position for task identification

### Stretch Goals

- Add input validation for menu choices and task entry
- Allow editing a task’s description

**Example Output**
```plaintext
Welcome to the To-do List!

MENU
1: Display to-do list
2: Add new task
3: Mark task as complete
4: Delete task
5: Exit

Please choose an option (1-5): 1

You have no tasks.

MENU
1: Display to-do list
2: Add new task
3: Mark task as complete
4: Delete task
5: Exit

Please choose an option (1-5): 2

Enter new task: Clean room
Add another task? (Y/n): Y
Enter new task: Wash dishes
Add another task? (Y/n): Y
Enter new task: Pay internet bill
Add another task? (Y/n): n

MENU
1: Display to-do list
2: Add new task
3: Mark task as complete
4: Delete task
5: Exit

Please choose an option (1-5): 1

TO-DO
[1]: [ ] Clean room
[2]: [ ] Wash dishes
[3]: [ ] Pay internet bill

MENU
1: Display to-do list
2: Add new task
3: Mark task as complete
4: Delete task
5: Exit

Please choose an option (1-5): 3

Which task is complete? 2

TO-DO
[1]: [ ] Clean room
[2]: [X] Wash dishes
[3]: [ ] Pay internet bill

MENU
1: Display to-do list
2: Add new task
3: Mark task as complete
4: Delete task
5: Exit

Please choose an option (1-5): 4

Which task would you like to delete: 1
Delete "Clean room" task? (Y/n): Y

TO-DO
[2]: [X] Wash dishes
[3]: [ ] Pay internet bill

MENU
1: Display to-do list
2: Add new task
3: Mark task as complete
4: Delete task
5: Exit

Please choose an option (1-5): 5
Goodbye
```

