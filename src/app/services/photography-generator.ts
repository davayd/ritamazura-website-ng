import { PhotographySession } from '../models/session';
import { ImageMode } from '../pages/photography/photography.component';

export function generatePhotographySessions(
  imageMode: ImageMode
): PhotographySession[] {
  const s1 = new PhotographySession('alyona 2021, Minsk', 'alyona-2021-Minsk', [
    {
      url: `/assets/photos/alyona 2021, Minsk/269789330_595719721524589_2611358905846332208_n-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 631 },
        desktop: { width: 1000, height: 1263 },
      },
      label: `269789330_595719721524589_2611358905846332208_n-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/alyona 2021, Minsk/269825067_633031087732788_7276206692202493202_n-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 631 },
        desktop: { width: 1000, height: 1263 },
      },
      label: `269825067_633031087732788_7276206692202493202_n-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/alyona 2021, Minsk/DSC01610-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 625 },
        desktop: { width: 1000, height: 1250 },
      },
      label: `DSC01610-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/alyona 2021, Minsk/DSC01621-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 625 },
        desktop: { width: 1000, height: 1250 },
      },
      label: `DSC01621-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/alyona 2021, Minsk/DSC01836-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 625 },
        desktop: { width: 1000, height: 1250 },
      },
      label: `DSC01836-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/alyona 2021, Minsk/DSC01876-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 625 },
        desktop: { width: 1000, height: 1250 },
      },
      label: `DSC01876-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/alyona 2021, Minsk/DSC02197-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 724 },
        desktop: { width: 1000, height: 1448 },
      },
      label: `DSC02197-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/alyona 2021, Minsk/DSC02215-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 383 },
        desktop: { width: 1000, height: 766 },
      },
      label: `DSC02215-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/alyona 2021, Minsk/DSC02368чб-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 670 },
        desktop: { width: 1000, height: 1340 },
      },
      label: `DSC02368чб-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/alyona 2021, Minsk/DSC02424-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 686 },
        desktop: { width: 1000, height: 1372 },
      },
      label: `DSC02424-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/alyona 2021, Minsk/DSC02481-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 625 },
        desktop: { width: 1000, height: 1250 },
      },
      label: `DSC02481-${imageMode}.jpg`,
    },
  ]);
  const s2 = new PhotographySession('anya 2021, Minsk', 'anya-2021-Minsk', [
    {
      url: `/assets/photos/anya 2021, Minsk/DSC00917-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 625 },
        desktop: { width: 1000, height: 1250 },
      },
      label: `DSC00917-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/anya 2021, Minsk/DSC01047-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 343 },
        desktop: { width: 1000, height: 687 },
      },
      label: `DSC01047-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/anya 2021, Minsk/DSC01101чб-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 375 },
        desktop: { width: 1000, height: 751 },
      },
      label: `DSC01101чб-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/anya 2021, Minsk/DSC01119-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 333 },
        desktop: { width: 1000, height: 667 },
      },
      label: `DSC01119-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/anya 2021, Minsk/DSC01152-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 333 },
        desktop: { width: 1000, height: 667 },
      },
      label: `DSC01152-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/anya 2021, Minsk/DSC01247-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 625 },
        desktop: { width: 1000, height: 1250 },
      },
      label: `DSC01247-${imageMode}.jpg`,
    },
  ]);

  const s3 = new PhotographySession(
    'katya 2022, Saint-Petersburb',
    'katya-2022-Saint-Petersburb',
    [
      {
        url: `/assets/photos/katya 2022, Saint-Petersburb/DSC04953-${imageMode}.jpg`,
        sizes: {
          mobile: { width: 500, height: 625 },
          desktop: { width: 1000, height: 1250 },
        },
        label: `DSC04953-${imageMode}.jpg`,
      },
      {
        url: `/assets/photos/katya 2022, Saint-Petersburb/DSC05269-${imageMode}.jpg`,
        sizes: {
          mobile: { width: 500, height: 625 },
          desktop: { width: 1000, height: 1250 },
        },
        label: `DSC05269-${imageMode}.jpg`,
      },
      {
        url: `/assets/photos/katya 2022, Saint-Petersburb/DSC05766-${imageMode}.jpg`,
        sizes: {
          mobile: { width: 500, height: 646 },
          desktop: { width: 1000, height: 1292 },
        },
        label: `DSC05766-${imageMode}.jpg`,
      },
      {
        url: `/assets/photos/katya 2022, Saint-Petersburb/DSC05978бч-${imageMode}.jpg`,
        sizes: {
          mobile: { width: 500, height: 630 },
          desktop: { width: 1000, height: 1260 },
        },
        label: `DSC05978бч-${imageMode}.jpg`,
      },
      {
        url: `/assets/photos/katya 2022, Saint-Petersburb/DSC06076-${imageMode}.jpg`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `DSC06076-${imageMode}.jpg`,
      },
      {
        url: `/assets/photos/katya 2022, Saint-Petersburb/DSC06090-${imageMode}.jpg`,
        sizes: {
          mobile: { width: 500, height: 712 },
          desktop: { width: 1000, height: 1423 },
        },
        label: `DSC06090-${imageMode}.jpg`,
      },
      {
        url: `/assets/photos/katya 2022, Saint-Petersburb/DSC06249-${imageMode}.jpg`,
        sizes: {
          mobile: { width: 500, height: 696 },
          desktop: { width: 1000, height: 1391 },
        },
        label: `DSC06249-${imageMode}.jpg`,
      },
      {
        url: `/assets/photos/katya 2022, Saint-Petersburb/DSC06446-${imageMode}.jpg`,
        sizes: {
          mobile: { width: 500, height: 330 },
          desktop: { width: 1000, height: 660 },
        },
        label: `DSC06446-${imageMode}.jpg`,
      },
      {
        url: `/assets/photos/katya 2022, Saint-Petersburb/DSC06595-${imageMode}.jpg`,
        sizes: {
          mobile: { width: 500, height: 705 },
          desktop: { width: 1000, height: 1411 },
        },
        label: `DSC06595-${imageMode}.jpg`,
      },
    ]
  );

  const s4 = new PhotographySession('masha 2021, Minsk', 'masha-2021-Minsk', [
    {
      url: `/assets/photos/masha 2021, Minsk/DSC00573-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 625 },
        desktop: { width: 1000, height: 1250 },
      },
      label: `DSC00573-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/masha 2021, Minsk/DSC00641-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 631 },
        desktop: { width: 1000, height: 1262 },
      },
      label: `DSC00641-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/masha 2021, Minsk/DSC00647-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 625 },
        desktop: { width: 1000, height: 1250 },
      },
      label: `DSC00647-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/masha 2021, Minsk/DSC00746-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 648 },
        desktop: { width: 1000, height: 1295 },
      },
      label: `DSC00746-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/masha 2021, Minsk/DSC00750-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 710 },
        desktop: { width: 1000, height: 1421 },
      },
      label: `DSC00750-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/masha 2021, Minsk/DSC00779-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 612 },
        desktop: { width: 1000, height: 1225 },
      },
      label: `DSC00779-${imageMode}.jpg`,
    },
    {
      url: `/assets/photos/masha 2021, Minsk/DSC00800-${imageMode}.jpg`,
      sizes: {
        mobile: { width: 500, height: 627 },
        desktop: { width: 1000, height: 1254 },
      },
      label: `DSC00800-${imageMode}.jpg`,
    },
  ]);

  const s5 = new PhotographySession(
    'nastya 2021, Grodno',
    'nastya-2021-Grodno',
    [
      {
        url: `/assets/photos/nastya 2021, Grodno/DSC02654-${imageMode}.jpg`,
        sizes: {
          mobile: { width: 500, height: 719 },
          desktop: { width: 1000, height: 1438 },
        },
        label: `DSC02654-${imageMode}.jpg`,
      },
      {
        url: `/assets/photos/nastya 2021, Grodno/DSC02844-${imageMode}.jpg`,
        sizes: {
          mobile: { width: 500, height: 720 },
          desktop: { width: 1000, height: 1440 },
        },
        label: `DSC02844-${imageMode}.jpg`,
      },
      {
        url: `/assets/photos/nastya 2021, Grodno/DSC02880-${imageMode}.jpg`,
        sizes: {
          mobile: { width: 500, height: 366 },
          desktop: { width: 1000, height: 732 },
        },
        label: `DSC02880-${imageMode}.jpg`,
      },
      {
        url: `/assets/photos/nastya 2021, Grodno/DSC02889-${imageMode}.jpg`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `DSC02889-${imageMode}.jpg`,
      },
      {
        url: `/assets/photos/nastya 2021, Grodno/DSC03009-${imageMode}.jpg`,
        sizes: {
          mobile: { width: 500, height: 726 },
          desktop: { width: 1000, height: 1451 },
        },
        label: `DSC03009-${imageMode}.jpg`,
      },
      {
        url: `/assets/photos/nastya 2021, Grodno/DSC03189-${imageMode}.jpg`,
        sizes: {
          mobile: { width: 500, height: 680 },
          desktop: { width: 1000, height: 1359 },
        },
        label: `DSC03189-${imageMode}.jpg`,
      },
    ]
  );
  s1.linkNext(s2);

  s2.linkPrevious(s1);
  s2.linkNext(s3);

  s3.linkPrevious(s2);
  s3.linkNext(s4);

  s4.linkPrevious(s3);
  s4.linkNext(s5);

  s5.linkPrevious(s4);

  return [s1, s2, s3, s4, s5];
}
