import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { Input } from './components/Input';
import userEvent from '@testing-library/user-event';


describe('test_weather-app', () => {
  test('render input', () => {
    render(<Input />);
    const btn = screen.getByText(/add/i);
    const btnElement = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/city/i)
  
    expect(btn).toBeInTheDocument();
    expect(btnElement).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(input).toContainHTML('')

    fireEvent.input(input, {
      target: { value: '' }
    })
    
  });

  test('add-event', () => {
    render(<App />);
    const btn = screen.getByText(/add/i)
    const input = screen.getByPlaceholderText(/city/i)

    fireEvent.click(btn)
    expect(screen.queryByTestId('card')).toBeNull()

    fireEvent.input(input, {
      target: { value: 'Moscow' }
    })
    fireEvent.click(btn)
    expect(screen.queryByTestId('city-name')).toContainHTML('')

  })

  test('router-test', () => {
    render(<App />);
    const link: any = screen.queryByTestId("city-name")
    userEvent.click(link)
    expect(screen.queryByTestId("single-city")).toBeInTheDocument()
  })
})

