import { vi } from 'vitest';
import L from 'leaflet';
vi.mock('leaflet', async () => {
  const actual = await vi.importActual('leaflet');
  return {
    ...actual,
    markerClusterGroup: () => ({
      addLayer: vi.fn(),
      removeLayer: vi.fn(),
      clearLayers: vi.fn(),
    }),
  };
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FortsMap from '@/components/FortsMap';

vi.mock('@/data/forts', () => ({
  forts: [
    {
      id: 'test-fort',
      name: 'Test Fort',
      district: 'Test District',
      type: 'Hill',
      altitude: 100,
      lat: 19,
      lng: 73,
      image: '/images/forts/test.jpg',
      shortDescription: 'A test fort',
      history: 'History',
      significance: 'Significance',
    },
  ],
}));

test('renders map container', async () => {
  render(
    <BrowserRouter>
      <FortsMap />
    </BrowserRouter>
  );

  const mapContainer = await screen.findByRole('region');
  expect(mapContainer).toBeInTheDocument();
});
