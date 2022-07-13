
    import { PhotographySession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const title: string = 'alyona 2021, Minsk';
      const transliteratedUrl: string = 'alyona-2021-Minsk'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/alyona 2021, Minsk/269789330_595719721524589_2611358905846332208_n-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 631 },
            desktop: { width: 1000, height: 1263 }
        },
        label: `269789330_595719721524589_2611358905846332208_n-${imageMode}.webp`
    },{
        url: `/assets/photos/alyona 2021, Minsk/269825067_633031087732788_7276206692202493202_n-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 631 },
            desktop: { width: 1000, height: 1263 }
        },
        label: `269825067_633031087732788_7276206692202493202_n-${imageMode}.webp`
    },{
        url: `/assets/photos/alyona 2021, Minsk/DSC01610-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `DSC01610-${imageMode}.webp`
    },{
        url: `/assets/photos/alyona 2021, Minsk/DSC01621-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `DSC01621-${imageMode}.webp`
    },{
        url: `/assets/photos/alyona 2021, Minsk/DSC01836-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `DSC01836-${imageMode}.webp`
    },{
        url: `/assets/photos/alyona 2021, Minsk/DSC01876-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `DSC01876-${imageMode}.webp`
    },{
        url: `/assets/photos/alyona 2021, Minsk/DSC02197-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 724 },
            desktop: { width: 1000, height: 1448 }
        },
        label: `DSC02197-${imageMode}.webp`
    },{
        url: `/assets/photos/alyona 2021, Minsk/DSC02215-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 383 },
            desktop: { width: 1000, height: 766 }
        },
        label: `DSC02215-${imageMode}.webp`
    },{
        url: `/assets/photos/alyona 2021, Minsk/DSC02368чб-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 670 },
            desktop: { width: 1000, height: 1340 }
        },
        label: `DSC02368чб-${imageMode}.webp`
    },{
        url: `/assets/photos/alyona 2021, Minsk/DSC02424-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 686 },
            desktop: { width: 1000, height: 1372 }
        },
        label: `DSC02424-${imageMode}.webp`
    },{
        url: `/assets/photos/alyona 2021, Minsk/DSC02481-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `DSC02481-${imageMode}.webp`
    },
];


    return new PhotographySession(title, transliteratedUrl, photos);
  }
