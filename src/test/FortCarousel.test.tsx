import React from 'react';
import { render, screen } from '@testing-library/react';
import FortCarousel from '@/components/FortCarousel';

test('renders carousel with provided images', () => {
  const images = ['/images/forts/a.jpg', '/images/forts/b.jpg'];
  render(<FortCarousel images={images} alt="Test Fort" />);
  const imgElements = screen.getAllByRole('img');
  const srcs = imgElements.map(img => img.getAttribute('src'));
  expect(srcs).toEqual(expect.arrayContaining(images));
});
