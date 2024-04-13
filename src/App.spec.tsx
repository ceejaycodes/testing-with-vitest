import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import App from './App';

describe("App", () => {
  it("should allow the user to enter their wish", async () => {
    render(<App />);
    expect(screen.findByPlaceholderText("enter your wish")).toBeTruthy()
    expect((await screen.findByPlaceholderText("enter your wish")).textContent).toBe("")
    
  });

  it("should enable button after a wish is entered", async () => {
    render(<App />);
    const input = document.querySelector(
      'input'
    ) as HTMLInputElement;

    const button = document.querySelector(
      'button'
    ) as HTMLButtonElement
    
    fireEvent.change(input, {
      target: {
        value: '*'
      }
    })

    expect(button.disabled).toBeFalsy()


      
  });

  it("should replace the wish entry area with the wish after submission", async () => {    
    render(<App />);

    const input = document.querySelector(
      'input'
    ) as HTMLInputElement

    const button = document.querySelector(
      'button'
    ) as HTMLButtonElement

  

    fireEvent.change(input, {
      target: {
        value: '*'
      }
    })
    fireEvent.click(button)
    



    const wish = document.querySelector(
      'p'
    ) as HTMLElement

    expect(input).not.toBeNull()
    expect(button).not.toBeNull()

    expect(wish?.innerHTML).toBe('*')




  });
})
