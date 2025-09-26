import { Montserrat_Alternates } from 'next/font/google';
import { Albert_Sans } from 'next/font/google';

export const montserrat = Montserrat_Alternates({ weight: '700', subsets: ['latin'], display: 'swap', variable: '--font-montserrat' });
export const albert = Albert_Sans({ weight: ['400', '500'], subsets: ['latin'], display: 'swap' });