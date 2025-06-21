# スタジオゼブラ デザインガイドライン

このガイドラインは、スタジオゼブラのウェブサイトにおける一貫性のあるデザイン体験を提供するために作成されました。Appleのヒューマンインターフェイスガイドラインの原則を取り入れながらも、写真スタジオとしての専門性と洗練さを表現するデザインシステムです。

## 目次
1. [デザイン哲学](#デザイン哲学)
2. [カラーシステム](#カラーシステム)
3. [タイポグラフィ](#タイポグラフィ)
4. [間隔と余白](#間隔と余白)
5. [角丸](#角丸)
6. [影の効果](#影の効果)
7. [コンポーネント設計](#コンポーネント設計)
8. [アクセシビリティ配慮](#アクセシビリティ配慮)
9. [実装ガイド](#実装ガイド)

## デザイン哲学

スタジオゼブラのデザインは以下の原則に基づいています：

- **シンプルさ** - 余分な装飾よりも本質的な機能とコンテンツを優先します
- **明快さ** - ユーザーがすぐに理解できる明確なビジュアル階層と情報構造を提供します
- **一貫性** - サイト全体で一貫したデザイン要素と操作方法を維持します
- **フィードバック** - インタラクションに対する明確な視覚的フィードバックを提供します
- **フォーカス** - 重要なコンテンツや機能に視線を集める設計を心がけます
- **ホワイトスペース** - 余白を効果的に活用し、コンテンツの可読性とエレガンスを高めます

## カラーシステム

### 基本カラー

| 名前 | 色値 | Tailwind | 用途 |
|------|------|----------|------|
| メイン | #000000 | text-main | 見出し、主要テキスト、ロゴ背景 |
| サブ1 | #82C2A9 | text-sub1 | アクセント背景、補助UI要素 |
| サブ2 | #8C8C8C | text-sub2 | 補助テキスト、アイコン、境界線 |
| 白 | #FFFFFF | white | 背景、コンテンツ領域 |

### アクセントカラー

| 名前 | 色値 | Tailwind | 用途 |
|------|------|----------|------|
| 強調色（ベース） | #FF463C | text-accent | プライマリボタン、重要アクション |
| 強調色（ホバー） | #E53935 | text-accent-hover | ホバー状態 |
| 強調色（アクティブ） | #C62828 | text-accent-active | アクティブ状態 |

### 補助カラー

| 名前 | 色値 | Tailwind | 用途 |
|------|------|----------|------|
| グレー（明） | #E5E5E5 | text-gray-light | 背景区切り、入力フォーム背景 |
| グレー（中） | #AEAEB2 | text-gray-mid | 区切り線、非アクティブ状態 |
| グレー（暗） | #3D3D3D | text-gray-dark | 強調テキスト |

### カラーコントラスト

- テキストとその背景の間に十分なコントラストを確保する（WCAG 2.1 AAレベル以上）
- 装飾的でない要素では少なくとも4.5:1のコントラスト比を維持

### Tailwind実装

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        main: '#000000',
        sub1: '#82C2A9',
        sub2: '#8C8C8C',
        accent: {
          DEFAULT: '#FF463C',
          hover: '#E53935',
          active: '#C62828',
        },
        gray: {
          light: '#E5E5E5',
          mid: '#AEAEB2',
          dark: '#3D3D3D',
        }
      }
    }
  }
}
```

## タイポグラフィ

### フォントファミリー

- Primary: 'Noto Sans JP' - すべてのUIテキストに使用
- ウェイト: Regular (400), Medium (500), Bold (700)

### テキストスタイル

| スタイル名 | サイズ | 行間 | ウェイト | Tailwind クラス |
|-----------|-------|------|---------|---------------|
| 見出し1 | 36px | 1.2 | 700 | text-4xl font-bold leading-tight |
| 見出し2 | 30px | 1.2 | 700 | text-3xl font-bold leading-tight |
| 見出し3 | 24px | 1.3 | 700 | text-2xl font-bold leading-snug |
| 見出し4 | 20px | 1.4 | 700 | text-xl font-bold leading-snug |
| 見出し5 | 18px | 1.4 | 700 | text-lg font-bold leading-snug |
| 本文（大） | 18px | 1.6 | 400 | text-lg font-normal leading-relaxed |
| 本文 | 16px | 1.6 | 400 | text-base font-normal leading-relaxed |
| 本文（小） | 14px | 1.6 | 400 | text-sm font-normal leading-relaxed |
| キャプション | 12px | 1.5 | 400 | text-xs font-normal leading-normal |
| ボタンラベル | 16px | 1.4 | 500 | text-base font-medium leading-snug |
| ナビゲーション | 16px | 1.4 | 500 | text-base font-medium leading-snug |

### フォントスケール

```js
// tailwind.config.js
module.exports = {
  theme: {
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1.5' }],      // 12px
      'sm': ['0.875rem', { lineHeight: '1.6' }],     // 14px
      'base': ['1rem', { lineHeight: '1.6' }],       // 16px
      'lg': ['1.125rem', { lineHeight: '1.6' }],     // 18px
      'xl': ['1.25rem', { lineHeight: '1.4' }],      // 20px
      '2xl': ['1.5rem', { lineHeight: '1.3' }],      // 24px
      '3xl': ['1.875rem', { lineHeight: '1.2' }],    // 30px
      '4xl': ['2.25rem', { lineHeight: '1.2' }],     // 36px
    }
  }
}
```

## 間隔と余白

### スペーシングスケール

| 名前 | サイズ | Tailwind クラス | 用途 |
|------|-------|--------------|------|
| 3xs | 4px | p-1, m-1 | 最小間隔、アイコン内余白 |
| 2xs | 8px | p-2, m-2 | 小さい要素間の間隔 |
| xs | 12px | p-3, m-3 | テキスト間の間隔 |
| sm | 16px | p-4, m-4 | コンポーネント内の間隔 |
| md | 24px | p-6, m-6 | セクション内の要素間隔 |
| lg | 32px | p-8, m-8 | コンポーネント間の間隔 |
| xl | 48px | p-12, m-12 | セクション間の間隔 |
| 2xl | 64px | p-16, m-16 | 大きなセクション間の間隔 |
| 3xl | 96px | p-24, m-24 | ページレベルのセクション間 |

### グリッドシステム

- 基本は12カラムグリッド
- コンテナの最大幅: 1200px
- カラム間のガター: 24px（md）

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        // 必要に応じてカスタム値を追加
      }
    }
  }
}
```

## 角丸

### 丸みの階層

| 名前 | サイズ | Tailwind クラス | 用途 |
|------|-------|--------------|------|
| なし | 0 | rounded-none | シャープな境界が必要な場合 |
| XS | 2px | rounded-sm | 小さなUI要素 |
| S | 4px | rounded | バッジ、タグ |
| M | 8px | rounded-md | ボタン、カード、入力フィールド |
| L | 12px | rounded-lg | 大きなカード、モーダル |
| XL | 16px | rounded-xl | 強調されたコンテナ |
| フル | 9999px | rounded-full | アバター、丸ボタン |

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      borderRadius: {
        'sm': '2px',
        DEFAULT: '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      }
    }
  }
}
```

## 影の効果

### シャドウレベル

| 名前 | 効果 | Tailwind クラス | 用途 |
|------|------|--------------|------|
| なし | なし | shadow-none | フラットデザイン要素 |
| XS | 0 1px 2px rgba(0,0,0,0.05) | shadow-sm | 微妙な区別、セパレータ |
| S | 0 2px 4px rgba(0,0,0,0.1) | shadow | 標準エレベーション、カード |
| M | 0 4px 8px rgba(0,0,0,0.12) | shadow-md | 強調表示されたカード、ドロップダウン |
| L | 0 8px 16px rgba(0,0,0,0.15) | shadow-lg | フローティング要素、モーダル |
| XL | 0 12px 24px rgba(0,0,0,0.2) | shadow-xl | ダイアログ、最前面要素 |
| XXL | 0 24px 48px rgba(0,0,0,0.25) | shadow-2xl | 特別強調、展開表示 |

### インタラクティブシャドウ

- 通常状態: S (shadow)
- ホバー状態: M (shadow-md)
- アクティブ状態: XS (shadow-sm)
- フォーカス状態: 特別なフォーカスリング

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        DEFAULT: '0 2px 4px rgba(0,0,0,0.1)',
        'md': '0 4px 8px rgba(0,0,0,0.12)',
        'lg': '0 8px 16px rgba(0,0,0,0.15)',
        'xl': '0 12px 24px rgba(0,0,0,0.2)',
        '2xl': '0 24px 48px rgba(0,0,0,0.25)',
      }
    }
  }
}
```

## コンポーネント設計

### ボタン

#### プライマリボタン

```html
<button class="bg-accent hover:bg-accent-hover active:bg-accent-active text-white rounded-md px-4 py-2 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
  ボタンラベル
</button>
```

#### セカンダリボタン

```html
<button class="bg-white hover:bg-gray-light active:bg-gray-mid border border-gray-light text-main rounded-md px-4 py-2 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
  ボタンラベル
</button>
```

#### テキストボタン

```html
<button class="text-accent hover:text-accent-hover active:text-accent-active font-medium transition-colors focus:outline-none">
  ボタンラベル
</button>
```

#### アイコンボタン

```html
<button class="rounded-full p-2 bg-white hover:bg-gray-light active:bg-gray-mid text-main transition-all focus:outline-none focus:ring-2 focus:ring-accent">
  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><!-- アイコンのパス --></svg>
</button>
```

### カード

#### 標準カード

```html
<div class="bg-white rounded-md shadow p-6 hover:shadow-md transition-shadow">
  <h3 class="text-lg font-bold leading-snug text-main mb-2">カードタイトル</h3>
  <p class="text-sub2 mb-4">カードの内容をここに記述します。必要に応じてテキストを調整してください。</p>
  <a href="#" class="text-accent hover:text-accent-hover font-medium">詳細を見る</a>
</div>
```

#### 特集カード

```html
<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
  <div class="aspect-w-16 aspect-h-9 mb-4 rounded-md overflow-hidden">
    <img src="image.jpg" alt="カード画像" class="w-full h-full object-cover">
  </div>
  <h3 class="text-xl font-bold leading-snug text-main mb-2">特集タイトル</h3>
  <p class="text-sub2 mb-4">特集内容の概要をここに記述します。簡潔かつ魅力的な説明を心がけてください。</p>
  <a href="#" class="inline-flex items-center text-accent hover:text-accent-hover font-medium">
    詳細を見る
    <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
    </svg>
  </a>
</div>
```

### フォーム要素

#### テキスト入力

```html
<div class="mb-4">
  <label for="name" class="block text-sm font-medium text-main mb-1">お名前</label>
  <input
    type="text"
    id="name"
    name="name"
    class="w-full px-3 py-2 bg-white border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
    placeholder="山田 太郎"
  >
</div>
```

#### セレクトボックス

```html
<div class="mb-4">
  <label for="category" class="block text-sm font-medium text-main mb-1">カテゴリー</label>
  <div class="relative">
    <select
      id="category"
      name="category"
      class="appearance-none w-full px-3 py-2 bg-white border border-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all"
    >
      <option value="">選択してください</option>
      <option value="1">オプション 1</option>
      <option value="2">オプション 2</option>
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-sub2">
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path>
      </svg>
    </div>
  </div>
</div>
```

#### チェックボックス

```html
<div class="mb-4">
  <div class="flex items-center">
    <input
      id="agree"
      name="agree"
      type="checkbox"
      class="h-4 w-4 text-accent focus:ring-accent border-gray-light rounded"
    >
    <label for="agree" class="ml-2 block text-sm text-sub2">
      利用規約に同意します
    </label>
  </div>
</div>
```

### ナビゲーション

#### メインナビゲーション

```html
<nav class="bg-white shadow">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16">
      <div class="flex">
        <div class="flex-shrink-0 flex items-center">
          <img class="h-8 w-auto" src="/logo.svg" alt="ロゴ">
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          <a href="#" class="border-sub1 text-main inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            ホーム
          </a>
          <a href="#" class="border-transparent text-sub2 hover:text-main hover:border-gray-mid inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
            スタジオ案内
          </a>
          <!-- 他のナビゲーションリンク -->
        </div>
      </div>
      <div class="hidden sm:ml-6 sm:flex sm:items-center">
        <button class="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-md text-sm font-medium">
          お問い合わせ
        </button>
      </div>
    </div>
  </div>
</nav>
```

## アクセシビリティ配慮

### コントラスト比

- 通常テキスト (14px未満): 最低4.5:1
- 大きいテキスト (14px以上の太字または18px以上): 最低3:1
- UIコンポーネントや情報を伝えるグラフィック要素: 最低3:1

### フォーカス表示

すべてのインタラクティブ要素は、キーボードフォーカス時に明確に視覚的に識別できるようにします：

```css
/* フォーカススタイル */
.focus-visible:focus {
  outline: 2px solid #FF463C;
  outline-offset: 2px;
}
```

Tailwindクラス：`focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`

### スクリーンリーダーサポート

- すべての画像には適切な`alt`テキストを提供
- アイコンボタンには`aria-label`を設定
- 複雑なコンポーネントには適切なARIA属性を使用

```html
<!-- アイコンボタンの例 -->
<button aria-label="お気に入りに追加" class="...">
  <svg><!-- アイコン --></svg>
</button>
```

### キーボードナビゲーション

- すべてのインタラクティブ要素はキーボードでアクセス可能に
- 論理的なタブオーダーを維持
- フォーカストラップが必要な場合（モーダルなど）は適切に実装

### 動的コンテンツ

- 動的に変化するコンテンツは`aria-live`リージョンを使用
- ページ内容の更新をユーザーに通知

```html
<div aria-live="polite" class="sr-only">
  <!-- 動的に更新される通知テキスト -->
</div>
```

## 実装ガイド

### Tailwind CSSの設定

tailwind.config.jsファイルを以下のように設定します：

```js
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#000000',
        sub1: '#82C2A9',
        sub2: '#8C8C8C',
        accent: {
          DEFAULT: '#FF463C',
          hover: '#E53935',
          active: '#C62828',
        },
        gray: {
          light: '#E5E5E5',
          mid: '#AEAEB2',
          dark: '#3D3D3D',
        }
      },
      borderRadius: {
        'sm': '2px',
        DEFAULT: '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        DEFAULT: '0 2px 4px rgba(0,0,0,0.1)',
        'md': '0 4px 8px rgba(0,0,0,0.12)',
        'lg': '0 8px 16px rgba(0,0,0,0.15)',
        'xl': '0 12px 24px rgba(0,0,0,0.2)',
        '2xl': '0 24px 48px rgba(0,0,0,0.25)',
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.6' }],     // 14px
        'base': ['1rem', { lineHeight: '1.6' }],       // 16px
        'lg': ['1.125rem', { lineHeight: '1.6' }],     // 18px
        'xl': ['1.25rem', { lineHeight: '1.4' }],      // 20px
        '2xl': ['1.5rem', { lineHeight: '1.3' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '1.2' }],    // 30px
        '4xl': ['2.25rem', { lineHeight: '1.2' }],     // 36px
      },
      spacing: {
        '3xs': '4px',  // 3xs
        '2xs': '8px',  // 2xs
        'xs': '12px',  // xs
        'sm': '16px',  // sm
        'md': '24px',  // md
        'lg': '32px',  // lg
        'xl': '48px',  // xl
        '2xl': '64px', // 2xl
        '3xl': '96px', // 3xl
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
```

### 共通コンポーネントライブラリの構築

コンポーネントライブラリを構築して、再利用可能なUI要素を提供します：

1. `/src/components/ui/` ディレクトリを作成
2. 共通コンポーネントを追加
   - Button.astro
   - Card.astro
   - Input.astro
   - Select.astro
   - Checkbox.astro
   - など

### デザイントークンの実装

ベースとなるデザイントークンをCSSカスタムプロパティとして実装し、TailwindCSSと併用します：

```css
:root {
  /* カラー */
  --color-main: #000000;
  --color-sub1: #82C2A9;
  --color-sub2: #8C8C8C;
  --color-accent: #FF463C;
  --color-accent-hover: #E53935;
  --color-accent-active: #C62828;
  
  --color-gray-light: #E5E5E5;
  --color-gray-mid: #AEAEB2;
  --color-gray-dark: #3D3D3D;
  
  /* 間隔 */
  --spacing-3xs: 4px;
  --spacing-2xs: 8px;
  --spacing-xs: 12px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 48px;
  --spacing-2xl: 64px;
  --spacing-3xl: 96px;
  
  /* 丸み */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-xl: 12px;
  --radius-2xl: 16px;
  
  /* アニメーション */
  --transition-fast: 150ms;
  --transition-base: 250ms;
  --transition-slow: 350ms;
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
}
```

### ダークモードサポート（オプション）

Tailwind CSSのダークモード機能を活用して、ダークモードをサポートします：

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media'
  // ...
}
```

ダークモードのカラースキーム：

```css
:root {
  /* ライトモード（デフォルト） */
  --color-background: #FFFFFF;
  --color-surface: #F5F5F7;
  --color-text: #000000;
  --color-text-secondary: #8C8C8C;
}

.dark {
  /* ダークモード */
  --color-background: #121212;
  --color-surface: #1E1E1E;
  --color-text: #FFFFFF;
  --color-text-secondary: #AEAEB2;
}
```

### アニメーションとトランジション

ユーザー体験を向上させるための滑らかなアニメーションとトランジションを定義します：

```css
/* 共通トランジション */
.transition-standard {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter
