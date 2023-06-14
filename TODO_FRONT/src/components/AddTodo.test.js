import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddTodo from './AddTodo';

describe('AddTodo', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(<AddTodo />);
    expect(getByPlaceholderText('Add a todo')).toBeInTheDocument();
    expect(getByText('Add')).toBeInTheDocument();
  });

  it('updates input value on change', () => {
    const { getByPlaceholderText } = render(<AddTodo />);
    const input = getByPlaceholderText('Add a todo');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  it("don't add todo if input is empty", () => {
    const addTodo = jest.fn();

    render(<AddTodo addTodo={addTodo} />)

    const button = screen.getByText('Add');

    fireEvent.click(button);

    expect(addTodo).not.toHaveBeenCalled();
  })

});