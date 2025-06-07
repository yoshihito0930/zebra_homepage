// フォントの最適化設定
export const fontOptimization = {
  display: 'swap',
  preload: true,
  prefetch: true,
  preconnect: true,
  formats: ['woff2', 'woff']
};

// Webフォントのプリロード設定
export function createFontLinks() {
  return [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
      crossorigin: true
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: true
    },
    {
      rel: 'preload',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap',
      as: 'style'
    }
  ];
}

// フォントの表示設定
export const fontDisplay = `
  @font-face {
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notosansjp/v52/-F6jfjtqLzI2JPCgQBnw7HFyzSD-AsregP8VFBEj75s.woff2) format('woff2');
  }
  
  @font-face {
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notosansjp/v52/-F6pfjtqLzI2JPCgQBnw7HFQMisq1H1hj-sNFQ.woff2) format('woff2');
  }
  
  @font-face {
    font-family: 'Noto Sans JP';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/notosansjp/v52/-F6pfjtqLzI2JPCgQBnw7HFQei0q1H1hj-sNFQ.woff2) format('woff2');
  }
`;
