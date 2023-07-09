
    import { PhotographySession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const sessionId: string = '5'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/5/1-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `1-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04004-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04004-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04022-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04022-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04036-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04036-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04048-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04048-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04108-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04108-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04112-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04112-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04138-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04138-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04224-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04224-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04248-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04248-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04299-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04299-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04317-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04317-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04412-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04412-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04458-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04458-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04598-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04598-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04643-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04643-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04658-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04658-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04694-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04694-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04712-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04712-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04739-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04739-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04753-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04753-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04761-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04761-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04813-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04813-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04851-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04851-${imageMode}.webp`
    },{
        url: `/assets/photos/5/DSC04998-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `DSC04998-${imageMode}.webp`
    },
];

    return new PhotographySession(sessionId, photos);
  }
  