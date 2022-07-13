import { RetouchSession, ImageMode } from 'models/session';

import { generateSession as genS1 } from 'assets/beauty/data';
import { generateSession as genS2 } from 'assets/commercial/data';
import { generateSession as genS3 } from 'assets/course/data';

export function generateRetouchSessions(
  imageMode: ImageMode
): RetouchSession[] {
  const s1 = genS1(imageMode);
  const s2 = genS2(imageMode);
  const s3 = genS3(imageMode);

  s1.linkNext(s2);

  s2.linkPrevious(s1);
  s2.linkNext(s3);

  s3.linkPrevious(s2);

  return [s1, s2, s3];
}
