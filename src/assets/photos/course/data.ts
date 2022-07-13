
    import { PhotographySession, RetouchSession, PhotoItem, ImageMode } from "models/session";

    export function generateSession(imageMode: ImageMode) {
      const title: string = 'course';
      const transliteratedUrl: string = 'course'
      const photos: [PhotoItem, PhotoItem][] = [[{
        url: `/assets/photos/course/1 course-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 732 },
            desktop: { width: 1000, height: 1465 }
        },
        label: `1 course-${imageMode}.webp`
    },{
        url: `/assets/photos/course/1.1 course-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `1.1 course-${imageMode}.webp`
    },],[{
        url: `/assets/photos/course/2 course-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `2 course-${imageMode}.webp`
    },{
        url: `/assets/photos/course/2.1 course-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `2.1 course-${imageMode}.webp`
    },],[{
        url: `/assets/photos/course/3 course-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `3 course-${imageMode}.webp`
    },{
        url: `/assets/photos/course/3.1 course-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `3.1 course-${imageMode}.webp`
    },],[{
        url: `/assets/photos/course/5 course-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `5 course-${imageMode}.webp`
    },{
        url: `/assets/photos/course/5.1 course-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `5.1 course-${imageMode}.webp`
    },],[{
        url: `/assets/photos/course/6 course-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `6 course-${imageMode}.webp`
    },{
        url: `/assets/photos/course/6.1 course-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 750 },
            desktop: { width: 1000, height: 1500 }
        },
        label: `6.1 course-${imageMode}.webp`
    },],[{
        url: `/assets/photos/course/7 course-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 605 },
            desktop: { width: 1000, height: 1209 }
        },
        label: `7 course-${imageMode}.webp`
    },{
        url: `/assets/photos/course/7.1 course-${imageMode}.webp`,
        sizes: {
            mobile: { width: 500, height: 605 },
            desktop: { width: 1000, height: 1209 }
        },
        label: `7.1 course-${imageMode}.webp`
    },],
];


    return new RetouchSession(title, transliteratedUrl, photos);
  }
