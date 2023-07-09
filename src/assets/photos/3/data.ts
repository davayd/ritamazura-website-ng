
    import { PhotographySession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const sessionId: string = '3'
      const photos: PhotoItem[] = [{
        url: `/assets/photos/3/1-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 639 },
            desktop: { width: 1000, height: 1278 }
        },
        label: `1-${imageMode}.webp`
    },{
        url: `/assets/photos/3/2-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 639 },
            desktop: { width: 1000, height: 1278 }
        },
        label: `2-${imageMode}.webp`
    },
];

    return new PhotographySession(sessionId, photos);
  }
  