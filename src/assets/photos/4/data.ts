
    import { PhotographySession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const sessionId: string = '4'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/4/1-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `1-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03288 1-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC03288 1-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03289-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC03289-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03308-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC03308-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03323-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC03323-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03335-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC03335-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03342-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC03342-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03386-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC03386-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03399 1-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `DSC03399 1-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03402-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC03402-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03406-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC03406-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03410-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC03410-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03418-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC03418-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03439-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC03439-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03496-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC03496-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03615-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC03615-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03620-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `DSC03620-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03631-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC03631-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03643-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `DSC03643-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03656-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `DSC03656-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03670-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 333 },
            desktop: { width: 1000, height: 667 }
        },
        label: `DSC03670-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03699-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 333 },
            desktop: { width: 1000, height: 667 }
        },
        label: `DSC03699-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03737-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `DSC03737-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03763-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC03763-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03766-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC03766-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03821-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC03821-${imageMode}.webp`
    },{
        url: `/assets/photos/4/DSC03822-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 625 },
            desktop: { width: 1000, height: 1250 }
        },
        label: `DSC03822-${imageMode}.webp`
    },
];

    return new PhotographySession(sessionId, photos);
  }
  