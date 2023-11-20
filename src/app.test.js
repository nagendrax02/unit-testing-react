import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("Heading and button element presence test in DOM", () => {
  render(<App />);

  const heading = screen.getByRole("heading", { level: 1 });

  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent("UNIT TESTING LEARNING");

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
  // console.log()
  expect(button.textContent).toBe("red");
});

test("Test for color button click", () => {
  render(<App />);

  const buttonElement = screen.getByRole("button");
  fireEvent.click(buttonElement);

  expect(buttonElement.textContent).toBe("blue");
});

test("renders a component correctly", () => {
  const component = render(<App />);
  expect(component).toMatchSnapshot();
});
