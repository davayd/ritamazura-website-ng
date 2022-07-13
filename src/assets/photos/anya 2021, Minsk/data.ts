
    import { PhotographySession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const title: string = 'anya 2021, Minsk';
      const transliteratedUrl: string = 'anya-2021-Minsk'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/anya 2021, Minsk/DSC00917-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `DSC00917-${imageMode}.webp`
    },{
        url: `/assets/photos/anya 2021, Minsk/DSC01047-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 343 },
            desktop: { width: 1000, height: 687 }
        },
        label: `DSC01047-${imageMode}.webp`
    },{
        url: `/assets/photos/anya 2021, Minsk/DSC01101чб-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 375 },
            desktop: { width: 1000, height: 751 }
        },
        label: `DSC01101чб-${imageMode}.webp`
    },{
        url: `/assets/photos/anya 2021, Minsk/DSC01119-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 333 },
            desktop: { width: 1000, height: 667 }
        },
        label: `DSC01119-${imageMode}.webp`
    },{
        url: `/assets/photos/anya 2021, Minsk/DSC01152-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 333 },
            desktop: { width: 1000, height: 667 }
        },
        label: `DSC01152-${imageMode}.webp`
    },{
        url: `/assets/photos/anya 2021, Minsk/DSC01247-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `DSC01247-${imageMode}.webp`
    },
];


    return new PhotographySession(title, transliteratedUrl, photos);
  }
