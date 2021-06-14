import { render, screen } from '@testing-library/react';
import App from './App';
import {PhotoViewer} from './PhotoViewer/PhotoViewer';
import renderer from 'react-test-renderer';

test('should display header', () => {
  render(<App />);
  const header = screen.getByText(/React Photo Viewer/i);
  expect(header).toBeInTheDocument();
});

test('should show images', () => {
  const selectedImage = "any string will do.com";
  const setSelectedImage = () => {};
  render(<PhotoViewer setSelectedImage={setSelectedImage} selectedImage={selectedImage}/>);
  const element = screen.getByTestId('selected_image');
  expect(element).toBeInTheDocument();
});


