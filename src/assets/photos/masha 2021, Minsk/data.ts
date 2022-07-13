
    import { PhotographySession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const title: string = 'masha 2021, Minsk';
      const transliteratedUrl: string = 'masha-2021-Minsk'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/masha 2021, Minsk/DSC00573-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `DSC00573-${imageMode}.webp`
    },{
        url: `/assets/photos/masha 2021, Minsk/DSC00641-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 631 },
            desktop: { width: 1000, height: 1262 }
        },
        label: `DSC00641-${imageMode}.webp`
    },{
        url: `/assets/photos/masha 2021, Minsk/DSC00647-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `DSC00647-${imageMode}.webp`
    },{
        url: `/assets/photos/masha 2021, Minsk/DSC00746-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 648 },
            desktop: { width: 1000, height: 1295 }
        },
        label: `DSC00746-${imageMode}.webp`
    },{
        url: `/assets/photos/masha 2021, Minsk/DSC00750-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 710 },
            desktop: { width: 1000, height: 1421 }
        },
        label: `DSC00750-${imageMode}.webp`
    },{
        url: `/assets/photos/masha 2021, Minsk/DSC00779-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 612 },
            desktop: { width: 1000, height: 1225 }
        },
        label: `DSC00779-${imageMode}.webp`
    },{
        url: `/assets/photos/masha 2021, Minsk/DSC00800-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 627 },
            desktop: { width: 1000, height: 1254 }
        },
        label: `DSC00800-${imageMode}.webp`
    },
];


    return new PhotographySession(title, transliteratedUrl, photos);
  }
