import { RetouchSession } from '../models/session';
import { ImageMode } from '../pages/photography/photography.component';

export function generateRetouchSessions(
  imageMode: ImageMode
): RetouchSession[] {
  const s1 = new RetouchSession('Session 1', 'session-1', [
    // [
    //   {
    //     url: `/assets/photos/masha-2021-minsk/DSC00573-${imageMode}.jpg`,
    //     width: 1000,
    //     height: 1250,
    //   },
    //   {
    //     url: `/assets/photos/masha-2021-minsk/DSC00641-${imageMode}.jpg`,
    //     width: 1000,
    //     height: 1262,
    //   },
    // ],
    // [
    //   {
    //     url: `/assets/photos/masha-2021-minsk/DSC00573-${imageMode}.jpg`,
    //     width: 1000,
    //     height: 1250,
    //   },
    //   {
    //     url: `/assets/photos/masha-2021-minsk/DSC00641-${imageMode}.jpg`,
    //     width: 1000,
    //     height: 1262,
    //   },
    // ],
    // [
    //   {
    //     url: `/assets/photos/nastya-2021-grodno/DSC02880-${imageMode}.jpg`,
    //     width: 1000,
    //     height: 732,
    //   },
    //   {
    //     url: `/assets/photos/nastya-2021-grodno/DSC02880-${imageMode}.jpg`,
    //     width: 1000,
    //     height: 732,
    //   },
    // ]
  ]);

  const s2 = new RetouchSession('Session 2', 'session-2', [
    // [
    //   {
    //     url: `/assets/photos/nastya-2021-grodno/DSC02844-${imageMode}.jpg`,
    //     width: 1000,
    //     height: 1440,
    //   },
    //   {
    //     url: `/assets/photos/nastya-2021-grodno/DSC02654-${imageMode}.jpg`,
    //     width: 1000,
    //     height: 1438,
    //   },
    // ],
  ]);

  const s3 = new RetouchSession('Session 3', 'session-3', [
    // [
    //   {
    //     url: `/assets/photos/masha-2021-minsk/DSC00573-${imageMode}.jpg`,
    //     width: 1000,
    //     height: 1250,
    //   },
    //   {
    //     url: `/assets/photos/masha-2021-minsk/DSC00641-${imageMode}.jpg`,
    //     width: 1000,
    //     height: 1262,
    //   },
    // ],
  ]);

  s1.linkNext(s2);

  s2.linkPrevious(s1);
  s2.linkNext(s3);

  s3.linkPrevious(s2);

  return [s1, s2, s3];
}
