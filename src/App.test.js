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

test("first link is correct", () => {
  const selectedImage = "any string will do.com";
  const setSelectedImage = () => { };
  render(<PhotoViewer setSelectedImage={setSelectedImage} selectedImage={selectedImage} />);
  const elements = screen.getAllByTestId('image');
  expect(elements[0]).toBeInTheDocument();
  expect(elements[0].src).toBe("https://picsum.photos/id/600/1600/900.jpg");
});

test("URL array doesn't include broken images", () => {
  const brokenImages = [
    1, 24, 32, 36, 44, 47
  ];
  const selectedImage = "any string will do.com";
  const setSelectedImage = () => { };
 
  render(<PhotoViewer setSelectedImage={setSelectedImage} selectedImage={selectedImage} />);
  const elements = screen.getAllByTestId('image');
  
  const imageIds = elements.map(el => parseInt(el.src.substr(26, 2)))
  const checkArrays = brokenImages.some(brokenImageId => imageIds.indexOf(brokenImageId) >= 0);
  expect(checkArrays).toBe(false);
});

describe("Photoviewer", () => {
  it("Should match snapshot if image is not selected", async () => {
    const selectedImage = "";
    const setSelectedImage = () => { };
    const tree = renderer.create(<PhotoViewer setSelectedImage={setSelectedImage} selectedImage={selectedImage} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Should match snapshot if image is selected", async () => {
    const selectedImage = "any string will do.com";
    const setSelectedImage = () => { };
    const tree = renderer.create(<PhotoViewer setSelectedImage={setSelectedImage} selectedImage={selectedImage} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

});

