import { ImageMode, PhotographySession } from 'models/session';

import { generateSession as genS1 } from 'assets/alyona 2021, Minsk/data';
import { generateSession as genS2 } from 'assets/anya 2021, Minsk/data';
import { generateSession as genS3 } from 'assets/katya 2022, Saint-Petersburb/data';
import { generateSession as genS4 } from 'assets/masha 2021, Minsk/data';
import { generateSession as genS5 } from 'assets/nastya 2021, Grodno/data';

export function generatePhotographySessions(
  imageMode: ImageMode
): PhotographySession[] {
  const s1 = genS1(imageMode);
  const s2 = genS2(imageMode);
  const s3 = genS3(imageMode);
  const s4 = genS4(imageMode);
  const s5 = genS5(imageMode);

  s1.linkNext(s2);

  s2.linkPrevious(s1);
  s2.linkNext(s3);

  s3.linkPrevious(s2);
  s3.linkNext(s4);

  s4.linkPrevious(s3);
  s4.linkNext(s5);

  s5.linkPrevious(s4);

  return [s1, s2, s3, s4, s5];
}
