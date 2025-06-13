import { Inter, Noto_Sans_JP, Roboto_Mono } from 'next/font/google';

// Interフォント（既存）
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // フォント読み込み中のテキスト表示を最適化
  variable: '--font-inter', // CSS変数として利用する場合
});

// Noto Sans JPフォント（日本語対応）
export const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'], // '400'は通常、'700'は太字
  style: ['normal'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

// Roboto Monoフォント（等幅フォント）
export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500'], // 複数のウェイトを指定
  style: ['normal', 'italic'], // 通常とイタリック体を指定
  display: 'swap',
  variable: '--font-roboto-mono',
});