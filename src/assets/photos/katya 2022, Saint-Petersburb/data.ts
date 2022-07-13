
    import { PhotographySession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const title: string = 'katya 2022, Saint-Petersburb';
      const transliteratedUrl: string = 'katya-2022-Saint-Petersburb'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/katya 2022, Saint-Petersburb/DSC04953-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `DSC04953-${imageMode}.webp`
    },{
        url: `/assets/photos/katya 2022, Saint-Petersburb/DSC05269-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `DSC05269-${imageMode}.webp`
    },{
        url: `/assets/photos/katya 2022, Saint-Petersburb/DSC05766-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 646 },
            desktop: { width: 1000, height: 1292 }
        },
        label: `DSC05766-${imageMode}.webp`
    },{
        url: `/assets/photos/katya 2022, Saint-Petersburb/DSC05978бч-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 630 },
            desktop: { width: 1000, height: 1260 }
        },
        label: `DSC05978бч-${imageMode}.webp`
    },{
        url: `/assets/photos/katya 2022, Saint-Petersburb/DSC06076-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC06076-${imageMode}.webp`
    },{
        url: `/assets/photos/katya 2022, Saint-Petersburb/DSC06090-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 712 },
            desktop: { width: 1000, height: 1423 }
        },
        label: `DSC06090-${imageMode}.webp`
    },{
        url: `/assets/photos/katya 2022, Saint-Petersburb/DSC06249-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 696 },
            desktop: { width: 1000, height: 1391 }
        },
        label: `DSC06249-${imageMode}.webp`
    },{
        url: `/assets/photos/katya 2022, Saint-Petersburb/DSC06446-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 330 },
            desktop: { width: 1000, height: 660 }
        },
        label: `DSC06446-${imageMode}.webp`
    },{
        url: `/assets/photos/katya 2022, Saint-Petersburb/DSC06595-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 705 },
            desktop: { width: 1000, height: 1411 }
        },
        label: `DSC06595-${imageMode}.webp`
    },
];


    return new PhotographySession(title, transliteratedUrl, photos);
  }
