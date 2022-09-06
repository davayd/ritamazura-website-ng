import { ImageMode, PhotographySession } from 'models/session';

import { generateSession as genS1 } from 'assets/Ayna 08.2022, St.Petersburg/data';
import { generateSession as genS2 } from 'assets/Olya 08.22, St.Petersburg/data';
import { generateSession as genS3 } from 'assets/Polina 1 08.2022, St.Petersburg/data';
import { generateSession as genS4 } from 'assets/Polina 2 08.2022, St.Petersburg/data';
import { generateSession as genS5 } from 'assets/Polina.Studio, part. 1/data';
import { generateSession as genS6 } from 'assets/Polina.Studio, part. 2/data';

export function generatePhotographySessions(
  imageMode: ImageMode
): PhotographySession[] {
  const s1 = genS5(imageMode);
  const s2 = genS6(imageMode);
  const s3 = genS1(imageMode);
  const s4 = genS2(imageMode);
  const s5 = genS3(imageMode);
  const s6 = genS4(imageMode);

  s1.linkNext(s2);

  s2.linkPrevious(s1);
  s2.linkNext(s3);

  s3.linkPrevious(s2);
  s3.linkNext(s4);

  s4.linkPrevious(s3);
  s4.linkNext(s5);

  s5.linkPrevious(s4);
  s5.linkNext(s6);

  s6.linkPrevious(s6);

  return [s1, s2, s3, s4, s5, s6];
}
