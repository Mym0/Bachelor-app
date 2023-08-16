import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Question from './Question';

test('renders question text', () => {
    const questionText = "Sample question text?";
    const { getByText } = render(<Question text={questionText} />);
  
    // Assert that the question text is rendered
    expect(getByText(questionText)).toBeInTheDocument();
  });
  
  test('handles "I don\'t know" button click', () => {
    const questionText = "Sample question text?";
    const handleIdkClick = jest.fn(); // Mock function to handle the "I don't know" click
    const { getByText } = render(<Question text={questionText} onIdkClick={handleIdkClick} />);
  
    // Simulate clicking the "I don't know" button
    fireEvent.click(getByText("I don't know"));
  
    // Assert that the click handler was called
    expect(handleIdkClick).toHaveBeenCalledTimes(1);
  });