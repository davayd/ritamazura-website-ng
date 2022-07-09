import { RetouchSession } from '../models/session';
import { ImageMode } from '../pages/photography/photography.component';

export function generateRetouchSessions(
  imageMode: ImageMode
): RetouchSession[] {
  const s1 = new RetouchSession('beauty', 'beauty', [
    [
      {
        url: `/assets/photos/beauty/10 Евгения Рязанова-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 667 },
          desktop: { width: 1000, height: 1333 },
        },
        label: `10 Евгения Рязанова-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/beauty/10.1 Евгения Рязанова-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 667 },
          desktop: { width: 1000, height: 1333 },
        },
        label: `10.1 Евгения Рязанова-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/beauty/11 Tawny Horton-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 601 },
          desktop: { width: 1000, height: 1202 },
        },
        label: `11 Tawny Horton-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/beauty/11.1 Tawny Horton-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 601 },
          desktop: { width: 1000, height: 1202 },
        },
        label: `11.1 Tawny Horton-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/beauty/12 Domo Jenkins-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `12 Domo Jenkins-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/beauty/12.1 Domo Jenkins-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `12.1 Domo Jenkins-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/beauty/17 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 695 },
          desktop: { width: 1000, height: 1390 },
        },
        label: `17 Aleksander Kroft-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/beauty/17.1 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 695 },
          desktop: { width: 1000, height: 1390 },
        },
        label: `17.1 Aleksander Kroft-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/beauty/18 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 749 },
          desktop: { width: 1000, height: 1499 },
        },
        label: `18 Aleksander Kroft-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/beauty/18.1 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 749 },
          desktop: { width: 1000, height: 1499 },
        },
        label: `18.1 Aleksander Kroft-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/beauty/21 Julia David-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `21 Julia David-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/beauty/21.1 Julia David-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `21.1 Julia David-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/beauty/31 Polina Solovyeva-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 740 },
          desktop: { width: 1000, height: 1479 },
        },
        label: `31 Polina Solovyeva-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/beauty/31.1 Polina Solovyeva-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 740 },
          desktop: { width: 1000, height: 1479 },
        },
        label: `31.1 Polina Solovyeva-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/beauty/32 Polina Solovyeva-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `32 Polina Solovyeva-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/beauty/32.1 Polina Solovyeva-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `32.1 Polina Solovyeva-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/beauty/33 Jenifer Klupfe-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `33 Jenifer Klupfe-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/beauty/33.1 Jenifer Klupfel-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `33.1 Jenifer Klupfel-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/beauty/34 Jenifer Klupfe-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 718 },
          desktop: { width: 1000, height: 1435 },
        },
        label: `34 Jenifer Klupfe-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/beauty/34.1 Jenifer Klupfe-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 718 },
          desktop: { width: 1000, height: 1435 },
        },
        label: `34.1 Jenifer Klupfe-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/beauty/9 rina_zima_ph-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 643 },
          desktop: { width: 1000, height: 1286 },
        },
        label: `9 rina_zima_ph-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/beauty/9.1 irina_zima_ph-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 643 },
          desktop: { width: 1000, height: 1286 },
        },
        label: `9.1 irina_zima_ph-${imageMode}.webp`,
      },
    ],
  ]);

  const s2 = new RetouchSession('commercial', 'commercial', [
    [
      {
        url: `/assets/photos/commercial/15 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 667 },
          desktop: { width: 1000, height: 1333 },
        },
        label: `15 Aleksander Kroft-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/commercial/15.1 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 667 },
          desktop: { width: 1000, height: 1333 },
        },
        label: `15.1 Aleksander Kroft-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/commercial/16 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 655 },
          desktop: { width: 1000, height: 1310 },
        },
        label: `16 Aleksander Kroft-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/commercial/16.1 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 655 },
          desktop: { width: 1000, height: 1310 },
        },
        label: `16.1 Aleksander Kroft-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/commercial/22 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 749 },
          desktop: { width: 1000, height: 1499 },
        },
        label: `22 Aleksander Kroft-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/commercial/22.1 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 749 },
          desktop: { width: 1000, height: 1499 },
        },
        label: `22.1 Aleksander Kroft-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/commercial/24 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `24 Aleksander Kroft-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/commercial/24.1 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `24.1 Aleksander Kroft-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/commercial/25 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `25 Aleksander Kroft-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/commercial/25.1 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `25.1 Aleksander Kroft-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/commercial/27 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 706 },
          desktop: { width: 1000, height: 1412 },
        },
        label: `27 Aleksander Kroft-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/commercial/27.1 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 706 },
          desktop: { width: 1000, height: 1412 },
        },
        label: `27.1 Aleksander Kroft-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/commercial/28 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 652 },
          desktop: { width: 1000, height: 1304 },
        },
        label: `28 Aleksander Kroft-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/commercial/28.1 Aleksander Kroft-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 652 },
          desktop: { width: 1000, height: 1304 },
        },
        label: `28.1 Aleksander Kroft-${imageMode}.webp`,
      },
    ],
  ]);

  const s3 = new RetouchSession('course', 'course', [
    [
      {
        url: `/assets/photos/course/1 course-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 732 },
          desktop: { width: 1000, height: 1465 },
        },
        label: `1 course-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/course/1.1 course-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `1.1 course-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/course/2 course-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `2 course-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/course/2.1 course-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `2.1 course-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/course/3 course-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `3 course-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/course/3.1 course-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `3.1 course-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/course/5 course-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `5 course-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/course/5.1 course-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `5.1 course-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/course/6 course-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `6 course-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/course/6.1 course-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 750 },
          desktop: { width: 1000, height: 1500 },
        },
        label: `6.1 course-${imageMode}.webp`,
      },
    ],
    [
      {
        url: `/assets/photos/course/7 course-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 605 },
          desktop: { width: 1000, height: 1209 },
        },
        label: `7 course-${imageMode}.webp`,
      },
      {
        url: `/assets/photos/course/7.1 course-${imageMode}.webp`,
        sizes: {
          mobile: { width: 500, height: 605 },
          desktop: { width: 1000, height: 1209 },
        },
        label: `7.1 course-${imageMode}.webp`,
      },
    ],
  ]);

  s1.linkNext(s2);

  s2.linkPrevious(s1);
  s2.linkNext(s3);

  s3.linkPrevious(s2);

  return [s1, s2, s3];
}
