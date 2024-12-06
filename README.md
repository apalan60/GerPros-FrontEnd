# GerPros-FrontEnd

## Demo

[Demo Page](https://main.d1hm4l1a6kz6r6.amplifyapp.com/)

## Tech stack

- Framework [Nuxt v3.13](https://nuxt.com/)
- Library
  - [Nuxt UI Community v2.18](https://ui.nuxt.com/)
  - [Tailwind v3.4.10](https://tailwindcss.com/docs/installation)

## 工項

- 根據首頁切版，挑一段作調整，目前會對應到一個component，可直接進入內部修改。 為了避免重工，挑選好後簡單告知一下再開工
- 調整整體主視覺 e.g. 統一字形、背景色、dark mode
- 既有component新增動畫等效果使網站變動態 ref: [動態特效網站規則 SOP](https://blockstudio.tw/blog/web-animation-sop/)

## 協作方式

- fork -> new branch -> pr(目前要pr才能進main，小改動想先上的話可以自己approve)
- 希望小改動有個段落就pr，不用要求做到很完美再推，小步推進持續修改就好
- 專案依賴項的安裝方式在app-gerpros/readme.md
- 目前dmeo page release的版本即為main最新版，進main就會自動佈署

## API fetch

- 使用 Nuxt3 的 useFetch, useAsyncData 與 $fetch來簡化開發，不須另外封裝 fetch 方法。 ref:[nuxt/ data fetching](https://nuxt.com/docs/getting-started/data-fetching)