// import React from 'react';
// import { getByTestId, render } from '@testing-library/react';
// import App from './App'; // Remplacez "YourComponent" par le nom de votre composant

// describe('YourComponent', () => {
//   it('should render the TODO LIST APP with AddTodo and TodoList components', () => {
//     // Rendu du composant
//     const { getByText } = render(<App />);

//     // Vérification que le titre "TODO LIST APP" est affiché
//     const titleElement = getByText('TODO LIST APP');
//     expect(titleElement).toBeInTheDocument();

//     // Vérification que les composants AddTodo et TodoList sont présents
//     const addTodoComponent = getByTestId('add-todo-component');
//     expect(addTodoComponent).toBeInTheDocument();

//     const todoListComponent = getByTestId('todo-list-component');
//     expect(todoListComponent).toBeInTheDocument();
//   });
// });

import React from 'react';
import { render } from '@testing-library/react';
import App from './App'; // Assurez-vous d'avoir le bon chemin d'importation vers votre composant

describe('YourComponent', () => {
  it('should render the TODO LIST APP with AddTodo and TodoList components', () => {
    // Rendu du composant
    const { getByText, getByTestId } = render(<App />); // Utilisez le composant directement sans les guillemets

    // Vérification que le titre "TODO LIST APP" est affiché
    const titleElement = getByText('TODO LIST APP');
    expect(titleElement).toBeInTheDocument();

    // Vérification que les composants AddTodo
    const addTodoComponent = getByTestId('add-todo-component');
    expect(addTodoComponent).toBeInTheDocument();
  });
});
