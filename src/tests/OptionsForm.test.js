import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import OptionsForm from '../components/OptionsForm';
import {test , expect , jest} from '@jest/globals';

test('renders without crashing', () => {
  render(<OptionsForm onNext={() => {}} />);
});

test('form submits correctly when conditions are met', async () => {
  const onNext = jest.fn();
  render(<OptionsForm onNext={onNext} />);

  // Add your logic to simulate form submission when conditions are met

  await waitFor(() => expect(onNext).toHaveBeenCalled());
});

test('form does not submit when conditions are not met', async () => {
  const onNext = jest.fn();
  render(<OptionsForm onNext={onNext} />);

  // Add your logic to simulate form submission when conditions are not met

  await waitFor(() => expect(onNext).not.toHaveBeenCalled());
});

test('form fields update correctly when changed', () => {
  render(<OptionsForm onNext={() => {}} />);

  // Add your logic to simulate form fields update
});

test('add, remove, and reset buttons work as expected', () => {
  render(<OptionsForm onNext={() => {}} />);

  // Add your logic to simulate clicking on add, remove, and reset buttons
});
