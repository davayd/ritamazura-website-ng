import { PhotographySession } from '../models/session';
import { ImageMode } from '../pages/photography/photography.component';

export function generatePhotographySessions(
  imageMode: ImageMode
): PhotographySession[] {
  const s1 = new PhotographySession('Session 1', 'session-1', [
    {
      url: `/assets/photos/masha-2021-minsk/DSC00573-${imageMode}.jpg`,
      width: 1000,
      height: 1250,
    },
    {
      url: `/assets/photos/masha-2021-minsk/DSC00641-${imageMode}.jpg`,
      width: 1000,
      height: 1262,
    },
    {
      url: `/assets/photos/masha-2021-minsk/DSC00577-${imageMode}.jpg`,
      width: 1000,
      height: 1500,
    },
    {
      url: `/assets/photos/masha-2021-minsk/DSC00647-${imageMode}.jpg`,
      width: 1000,
      height: 1250,
    },
    {
      url: `/assets/photos/masha-2021-minsk/DSC00746-${imageMode}.jpg`,
      width: 1000,
      height: 1295,
    },
    {
      url: `/assets/photos/masha-2021-minsk/DSC00779-${imageMode}.jpg`,
      width: 1000,
      height: 1225,
    },
    {
      url: `/assets/photos/masha-2021-minsk/DSC00750-${imageMode}.jpg`,
      width: 1000,
      height: 1421,
    },
    {
      url: `/assets/photos/masha-2021-minsk/DSC00800-${imageMode}.jpg`,
      width: 1000,
      height: 1254,
    },
  ]);
  const s2 = new PhotographySession('Session 2', 'session-2', [
    {
      url: `/assets/photos/nastya-2021-grodno/DSC02844-${imageMode}.jpg`,
      width: 1000,
      height: 1440,
    },
    {
      url: `/assets/photos/nastya-2021-grodno/DSC02654-${imageMode}.jpg`,
      width: 1000,
      height: 1438,
    },
    {
      url: `/assets/photos/nastya-2021-grodno/DSC02889-${imageMode}.jpg`,
      width: 1000,
      height: 1500,
    },
    {
      url: `/assets/photos/nastya-2021-grodno/DSC02880-${imageMode}.jpg`,
      width: 1000,
      height: 732,
    },
    {
      url: `/assets/photos/nastya-2021-grodno/DSC02936-${imageMode}.jpg`,
      width: 1000,
      height: 1500,
    },
    {
      url: `/assets/photos/nastya-2021-grodno/DSC03009-${imageMode}.jpg`,
      width: 1000,
      height: 1451,
    },
    {
      url: `/assets/photos/nastya-2021-grodno/DSC03189-${imageMode}.jpg`,
      width: 1000,
      height: 1359,
    },
  ]);

  const s3 = new PhotographySession('Session 3', 'session-3', [
    {
      url: 'https://images.squarespace-cdn.com/content/v1/6201d5c4d2965872151b76c3/c5930746-ce02-415b-b076-dbb6e89eb76a/220322-Vogue_TK_OLD-layoutV6-5.jpg?format=1000w',
      width: 1000,
      height: 1359,
    },
    // {
    //   url: 'https://images.squarespace-cdn.com/content/v1/6201d5c4d2965872151b76c3/632bfdd9-8732-4d26-8bce-9dbc59c0d7e1/220322-Vogue_TK_OLD-layoutV6-16.jpg?format=1000w',
    // },
  ]);

  s1.linkNext(s2);

  s2.linkPrevious(s1);
  s2.linkNext(s3);

  s3.linkPrevious(s2);

  return [s1, s2, s3];
}
