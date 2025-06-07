// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://studiozebra-1st.com',
  // コンパイル時の最適化
  build: {
    // スクリプト最適化
    inlineStylesheets: 'auto',
  },
  // 画像最適化
  image: {
    // 画像の最適化設定
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    // レスポンシブ画像の設定
    domains: [],
    remotePatterns: []
  },
  compressHTML: true,
  // 静的サイト生成
  output: 'static',
  // パフォーマンス対策
  vite: {
    build: {
      cssCodeSplit: true,
      cssMinify: true,
      minify: 'terser',
      // Terser オプション
      terserOptions: {
        compress: {
          drop_console: true,
        }
      },
    }
  }
});
