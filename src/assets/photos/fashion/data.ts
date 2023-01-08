
    import { PhotographySession, RetouchSession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const title: string = 'fashion';
      const transliteratedUrl: string = 'fashion'
      const photos: [PhotoItem, PhotoItem][] = [[{
        url: `/assets/photos/fashion/15 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 667 },
            desktop: { width: 1000, height: 1333 }
        },
        label: `15 Aleksander Kroft-${imageMode}.webp`
    },{
        url: `/assets/photos/fashion/15.1 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 667 },
            desktop: { width: 1000, height: 1333 }
        },
        label: `15.1 Aleksander Kroft-${imageMode}.webp`
    },],[{
        url: `/assets/photos/fashion/16 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 655 },
            desktop: { width: 1000, height: 1310 }
        },
        label: `16 Aleksander Kroft-${imageMode}.webp`
    },{
        url: `/assets/photos/fashion/16.1 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 655 },
            desktop: { width: 1000, height: 1310 }
        },
        label: `16.1 Aleksander Kroft-${imageMode}.webp`
    },],[{
        url: `/assets/photos/fashion/22 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 749 },
            desktop: { width: 1000, height: 1499 }
        },
        label: `22 Aleksander Kroft-${imageMode}.webp`
    },{
        url: `/assets/photos/fashion/22.1 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 749 },
            desktop: { width: 1000, height: 1499 }
        },
        label: `22.1 Aleksander Kroft-${imageMode}.webp`
    },],[{
        url: `/assets/photos/fashion/24 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `24 Aleksander Kroft-${imageMode}.webp`
    },{
        url: `/assets/photos/fashion/24.1 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `24.1 Aleksander Kroft-${imageMode}.webp`
    },],[{
        url: `/assets/photos/fashion/25 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `25 Aleksander Kroft-${imageMode}.webp`
    },{
        url: `/assets/photos/fashion/25.1 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `25.1 Aleksander Kroft-${imageMode}.webp`
    },],[{
        url: `/assets/photos/fashion/27 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 706 },
            desktop: { width: 1000, height: 1412 }
        },
        label: `27 Aleksander Kroft-${imageMode}.webp`
    },{
        url: `/assets/photos/fashion/27.1 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 706 },
            desktop: { width: 1000, height: 1412 }
        },
        label: `27.1 Aleksander Kroft-${imageMode}.webp`
    },],[{
        url: `/assets/photos/fashion/28 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 652 },
            desktop: { width: 1000, height: 1304 }
        },
        label: `28 Aleksander Kroft-${imageMode}.webp`
    },{
        url: `/assets/photos/fashion/28.1 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 652 },
            desktop: { width: 1000, height: 1304 }
        },
        label: `28.1 Aleksander Kroft-${imageMode}.webp`
    },],
];


    return new RetouchSession(title, transliteratedUrl, photos);
  }
