import { PhotographySession, PhotoItem, ImageMode } from 'models/session';

export function generateSession(imageMode: ImageMode) {
  const title: string = 'nastya 2021, Grodno';
  const transliteratedUrl: string = 'nastya-2021-Grodno';
  const photos: PhotoItem[] = [
    {
      url: `/assets/photos/nastya 2021, Grodno/DSC02654-${imageMode}.webp`,
      sizes: {
        mobile: { width: 500, height: 719 },
        desktop: { width: 1000, height: 1438 },
      },
      label: `DSC02654-${imageMode}.webp`,
    },
    {
      url: `/assets/photos/nastya 2021, Grodno/DSC02844-${imageMode}.webp`,
      sizes: {
        mobile: { width: 500, height: 720 },
        desktop: { width: 1000, height: 1440 },
      },
      label: `DSC02844-${imageMode}.webp`,
    },
    {
      url: `/assets/photos/nastya 2021, Grodno/DSC02880-${imageMode}.webp`,
      sizes: {
        mobile: { width: 500, height: 366 },
        desktop: { width: 1000, height: 732 },
      },
      label: `DSC02880-${imageMode}.webp`,
    },
    {
      url: `/assets/photos/nastya 2021, Grodno/DSC02889-${imageMode}.webp`,
      sizes: {
        mobile: { width: 500, height: 750 },
        desktop: { width: 1000, height: 1500 },
      },
      label: `DSC02889-${imageMode}.webp`,
    },
    {
      url: `/assets/photos/nastya 2021, Grodno/DSC03009-${imageMode}.webp`,
      sizes: {
        mobile: { width: 500, height: 726 },
        desktop: { width: 1000, height: 1451 },
      },
      label: `DSC03009-${imageMode}.webp`,
    },
    {
      url: `/assets/photos/nastya 2021, Grodno/DSC03189-${imageMode}.webp`,
      sizes: {
        mobile: { width: 500, height: 680 },
        desktop: { width: 1000, height: 1359 },
      },
      label: `DSC03189-${imageMode}.webp`,
    },
  ];

  return new PhotographySession(title, transliteratedUrl, photos);
}
