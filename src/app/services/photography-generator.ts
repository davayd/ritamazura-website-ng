import { ImageMode, PhotographySession, PhotoItem } from 'models/session';

import { generateSession as genS1 } from 'assets/1/data';
import { generateSession as genS2 } from 'assets/2/data';
import { generateSession as genS3 } from 'assets/3/data';
import { generateSession as genS4 } from 'assets/4/data';
import { generateSession as genS5 } from 'assets/5/data';

export function generatePhotographySessions(
  imageMode: ImageMode
): PhotographySession[] {
  const s1 = genS1(imageMode);
  const s2 = genS2(imageMode);
  const s3 = genS3(imageMode);
  const s4 = genS4(imageMode);
  const s5 = genS5(imageMode);
  return [s1, s2, s3, s4, s5]; // Change it!
}

