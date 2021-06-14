import { render, screen } from '@testing-library/react';
import App from './App';
import { PhotoViewer } from './PhotoViewer/PhotoViewer';
import renderer from 'react-test-renderer';

test('should display header', () => {
  render(<App />);
  const header = screen.getByText(/React Photo Viewer/i);
  expect(header).toBeInTheDocument();
});

test('should show images', () => {
  const selectedImage = "any string will do.com";
  const setSelectedImage = () => { };
  render(<PhotoViewer setSelectedImage={setSelectedImage} selectedImage={selectedImage} />);
  const element = screen.getByTestId('selected_image');
  expect(element).toBeInTheDocument();
});

test("doesn't include broken images", () => {
  const selectedImage = "any string will do.com";
  const setSelectedImage = () => { };
  render(<PhotoViewer setSelectedImage={setSelectedImage} selectedImage={selectedImage} />);
  const element = screen.getByTestId('selected_image');
  expect(element).toBeInTheDocument();
});

describe("Photoviewer", () => {
  it("Should match snapshot if image is not selected", async () => {
    const selectedImage = "";
    const setSelectedImage = () => { };
    const tree = renderer.create(<PhotoViewer setSelectedImage={setSelectedImage} selectedImage={selectedImage}/>).toJSON();

    expect(tree).toMatchSnapshot();
  }); 

  it("Should match snapshot if image is selected", async () => {
    const selectedImage = "any string will do.com";
    const setSelectedImage = () => { };
    const tree = renderer.create(<PhotoViewer setSelectedImage={setSelectedImage} selectedImage={selectedImage}/>).toJSON();

    expect(tree).toMatchSnapshot();
  }); 
  
});

