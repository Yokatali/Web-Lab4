# Web-Lab4

# Dynamic Task Dashboard

A task management dashboard built with pure JavaScript. Tasks are loaded asynchronously from a simulated server, dynamically rendered to the DOM, and can be modified or deleted using DOM events.

## File Organization

- `index.html`: Page structure (header, load button, status message, task list container).

- `styles.css`: Minimal styling, including the `completed` class.

- `taskManager.js`: `Task` and `TaskManager` classes with immutable updates.

- `api.js`: `fetchTasks()` simulates a server request with a 1500ms delay.

- `main.js`: Connects everything: event listeners, asynchronous loading, JSON processing, rendering.

## Challenges

My problem was minor typos. In the `taskManager.js` file, the code didn't work because I wrote `definedProperty` instead of `defineProperty` and `congigurable` instead of `configurable`. In the `index.html` file, there were extra quotes in the `lang` and `charset` attributes, and I wrote the button ID as `loadTaskBtn` instead of `loadTasksBtn`. Therefore, `getElementById` couldn't find the button. It took me a while to notice these because the code seemed almost correct.

In the `main.js` file, I accidentally placed the `loadTasks` and button event listener inside the `render` function, so the button did nothing. I also wrote `taskDiv.appendChild(taskDiv)` instead of `taskList.appendChild(taskDiv)`. I corrected these by checking where each curly brace closed.