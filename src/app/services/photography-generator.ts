import { ImageMode, PhotographySession } from 'models/session';

import { generateSession as genS1 } from 'assets/Ayna 08.2022, St.Petersburg/data';
import { generateSession as genS2 } from 'assets/Olya 08.22, St.Petersburg/data';
import { generateSession as genS3 } from 'assets/Polina 1 08.2022, St.Petersburg/data';
import { generateSession as genS4 } from 'assets/Polina 2 08.2022, St.Petersburg/data';

export function generatePhotographySessions(
  imageMode: ImageMode
): PhotographySession[] {
  const s1 = genS1(imageMode);
  const s2 = genS2(imageMode);
  const s3 = genS3(imageMode);
  const s4 = genS4(imageMode);

  s1.linkNext(s2);

  s2.linkPrevious(s1);
  s2.linkNext(s3);

  s3.linkPrevious(s2);
  s3.linkNext(s4);

  s4.linkPrevious(s3);

  return [s1, s2, s3, s4];
}
