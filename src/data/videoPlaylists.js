export const videoPlaylists = {
  2025: [
    { id: "Wls0ljMj1AQ", views: 100 },
    { id: "SMCzlfpvXlE", views: 100 },
    { id: "higXqxgfp08", views: 100 },
    { id: "_3JvZqwKdj0", views: 100 },
    { id: "7b4snNYYc9M", views: 200 },
    { id: "HgZElCdOn3c", views: 200 },
  ],

  2024: [
    { id: "D2s5BHPtHxw", views: 1000 },
    { id: "Ud8cBetiqN8", views: 700 },
    { id: "yeMUaUuGP-k", views: 500 },
    { id: "jd48N_wr6WI", views: 470 },
    { id: "QipiKkArACQ", views: 414 },
    { id: "tqshJ0sGjI8", views: 392 },
    { id: "kFAbAV1geMk", views: 369 },
  ],

  2023: [
    { id: "qLkU_eV95kw", views: 17000 },
    { id: "hqR1f_hztbE", views: 11000 },
    { id: "ZofRShdanww", views: 1835 },
    { id: "mTISgo54Kek", views: 1173 },
    { id: "cFDOFm-TNqA", views: 1114 },
    { id: "o3fmj9K-sJk", views: 925 },
    { id: "9rbgmVCbPpk", views: 869 },
  ],

  2022: [
    { id: "UxLsjxk33kc", views: 7010 },
    { id: "1OCdkbXmOao", views: 2148 },
    { id: "-EZW7lw39uE", views: 1384 },
    { id: "RioDGM6zqqs", views: 1107 },
    { id: "Oxj2VnXDGyQ", views: 1097 },
    { id: "DQa92PkzEFA", views: 1012 },
    { id: "9M2TTyyB18o", views: 906 },
  ],

  2021: [
    { id: "01wEIc2UQ8g", views: 3850 },
    { id: "isSve4ucsNU", views: 2433 },
    { id: "U7dl3oNoL2c", views: 1595 },
    { id: "tjEQyY_La8M", views: 1281 },
    { id: "nnJMaE53WYw", views: 1026 },
    { id: "o1T6M7UovCk", views: 876 },
    { id: "S8WHyvxfwV8", views: 732 },
  ],
}
// data/videoPlaylists.js

const ytThumb = (url) => {
  const id = url.match(/v=([^&]+)/)?.[1];
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};

export const playlistData = [
  {
    id: "playlist-1",
    parent: {
      image: ytThumb("https://www.youtube.com/watch?v=_3b5pbdE0n0"),
      playlistUrl: "https://www.youtube.com/playlist?list=PLQnBvheMJRzoNJ79SCvx-m93acoAK0MJS",
      title: "ポケモンZ-A",
      videoCount: 10,
    },
    children: [
      {
        image: ytThumb("https://www.youtube.com/watch?v=_3b5pbdE0n0"),
        title: "【Z-A DLC】　メガメガメガメガ　＃１【#なまウキ] ",
        description: "寿海 浮🧼",
      },
      {
        image: ytThumb("https://www.youtube.com/watch?v=vHUNzKt-yN4"),
        title: "【ポケモンZ-A】イノチ、バクハツ！！！　＃７【#なまウキ] ",
         description: "寿海 浮🧼",
      },
      {
        image: ytThumb("https://www.youtube.com/watch?v=7ws1dGkrtag"),
        title: "【ポケモンZ-A】イノチ、バクハツ！！！　＃６【#なまウキ] ",
         description: "寿海 浮🧼",
      },
      {
        image: ytThumb("https://www.youtube.com/watch?v=ZPeLI3ELJng"),
        title: "【ポケモンZ-A】イノチ、バクハツ！！！　＃５【#なまウキ] ",
         description: "寿海 浮🧼",
      },
      {
        image: ytThumb("https://www.youtube.com/watch?v=DwRn0rgrOig"),
        title: "ポケモンZ-A】イノチ、バクハツ！！！　＃４【#なまウキ] ",
         description: "寿海 浮🧼",
      },
    ],
  },

  {
    id: "playlist-2",
    parent: {
      image: ytThumb("https://www.youtube.com/watch?v=NZx9dS1wmDc"),
      playlistUrl: "https://www.youtube.com/playlist?list=PLQnBvheMJRzqxSEi6vjvsDVTRWMQbF6nJ",
      title: "同時視聴",
      videoCount: 41,
    },
    children: [
      { image: ytThumb("https://www.youtube.com/watch?v=NZx9dS1wmDc"), title: "【同時視聴】アニポケみようや【＃なまウキ】#1", description: "寿海 浮🧼", },
      { image: ytThumb("https://www.youtube.com/watch?v=FBFZMg4IybE"), title: "【同時視聴】アニポケみようや【＃なまウキ】#2", description: "寿海 浮🧼", },
      { image: ytThumb("https://www.youtube.com/watch?v=prrFddHcaNA"), title: "【同時視聴】寝起きにアニポケ【＃なまウキ】#3", description: "寿海 浮🧼", },
      { image: ytThumb("https://www.youtube.com/watch?v=pQ0mtB1_CBc"), title: "【同時視聴】アニポケみようや【＃なまウキ】#4", description: "寿海 浮🧼", },
      { image: ytThumb("https://www.youtube.com/watch?v=vp9NT5odLC4"), title: "【同時視聴】アニポケみようや【＃なまウキ】#5", description: "寿海 浮🧼", },
    ],
  },

  {
    id: "playlist-3",
    parent: {
      image: ytThumb("https://www.youtube.com/watch?v=LnT-zClgwIs"),
      playlistUrl: "https://www.youtube.com/playlist?list=PLQnBvheMJRzow_a0qvDHEFiaC2TyMNoar",
      title: "ポケモンLA",
      videoCount: 15,
    },
    children: [
      { image: ytThumb("https://www.youtube.com/watch?v=LnT-zClgwIs"), title: "【ポケモンLA】新作だ～！　#１【＃なまウキ】", description: "寿海 浮🧼", },
      { image: ytThumb("https://www.youtube.com/watch?v=iRgprFZdSPM"), title: "【ポケモンLA】記憶を消してゆく、ヒスイ地方　#２【＃なまウキ】", description: "寿海 浮🧼", },
      { image: ytThumb("https://www.youtube.com/watch?v=JIjcWRH5qfc"), title: "【ポケモンLA】記憶を消してゆく、ヒスイ地方　#３【＃なまウキ】", description: "寿海 浮🧼", },
      { image: ytThumb("https://www.youtube.com/watch?v=O8o7Ey3L0OA"), title: "【ポケモンLA】記憶を消してゆく、ヒスイ地方　#４【＃なまウキ】", description: "寿海 浮🧼", },
      { image: ytThumb("https://www.youtube.com/watch?v=srp2pjCzmL8"), title: "【ポケモンLA】記憶を消してゆく、ヒスイ地方　#５【＃なまウキ】", description: "寿海 浮🧼", },
    ],
  },

  {
    id: "playlist-4",
    parent: {
      image: ytThumb("https://www.youtube.com/watch?v=2PECqfmpKRM"),
      playlistUrl: "https://www.youtube.com/playlist?list=PLQnBvheMJRzpAfw8XvLbUEaQIJiHkJpCK",
      title: "ポケモンV",
      videoCount: 29,
    },
    children: [
      { image: ytThumb("https://www.youtube.com/watch?v=2PECqfmpKRM"), title: "【ポケモンV】誰が何と言おうと今日が発売日 ＃1【寿海 浮】", description: "寿海 浮🧼", },
      { image: ytThumb("https://www.youtube.com/watch?v=vXHL8_FrwR0"), title: "【ポケモンV】 まずはジム巡りっしょ　＃２【寿海 浮】", description: "寿海 浮🧼", },
      { image: ytThumb("https://www.youtube.com/watch?v=MG98AG4ctgA"), title: "【ポケモンV】 目標：道に迷わない　#3【寿海 浮】", description: "寿海 浮🧼", },
      { image: ytThumb("https://www.youtube.com/watch?v=Hvob71Tf8EY"), title: "【ポケモンV】 進め進め～！　#４【寿海 浮】", description: "寿海 浮🧼", },
      { image: ytThumb("https://www.youtube.com/watch?v=3AaaSsydGpM"), title: "【ポケモンV】 登山より下山の方が危ない　#５【寿海 浮】", description: "寿海 浮🧼", },
    ],
  },

  {
    id: "playlist-5",
    parent: {
      image: ytThumb("https://www.youtube.com/watch?v=uu5LMPUQXE4"),
      playlistUrl: "https://www.youtube.com/playlist?list=PLQnBvheMJRzqKavawrSvcgd4FexLb8teA",
      title: "単発",
      videoCount: 14,
    },
    children: [
      { image: ytThumb("https://www.youtube.com/watch?v=uu5LMPUQXE4"), title: "Live2Dお披露目！！！【寿海 浮】", description: "寿海 浮🧼", },
      { image: ytThumb("https://www.youtube.com/watch?v=x8BqEJ9CLPQ"), title: "【ポケモンSV】スコヴィランとゆく！ #令和相棒自慢杯2023【＃なまウキ】", description: "寿海 浮🧼", },
      { image: ytThumb("https://www.youtube.com/watch?v=0G7BBs8SSNI"), title: "【スイカゲーム】スイカ、食べたくないか？【＃なまウキ】", description: "寿海 浮🧼", },
      { image: ytThumb("https://www.youtube.com/watch?v=JRPu9Ju5x0E"), title: "【あけおめ】毎日投稿振り返りしようや【＃なまウキ】", description: "寿海 浮🧼", },
      { image: ytThumb("https://www.youtube.com/watch?v=TPHIQN79Hl8"), title: "【おしらせ】Tシャツ出るぞ！！！【＃なまウキ】", description: "寿海 浮🧼", },
    ],
  },

  {
    id: "playlist-6",
    parent: {
      image: ytThumb("https://www.youtube.com/watch?v=Xds38lPdh80&list=PLQnBvheMJRzptMSjuSGRlpWp2AdJLABpt&index=2"),
      playlistUrl: "https://www.youtube.com/playlist?list=PLQnBvheMJRzptMSjuSGRlpWp2AdJLABpt",
      title: "SVランクマ-レギュJ",
      videoCount: 5,
    },
    children: [
      { image: ytThumb("https://www.youtube.com/watch?v=SAtQZziz3Bk"), title: "【SVランクマ】草統一　＃１７４【＃なまウキ】", description: "寿海 浮🧼", },
      { image: ytThumb("https://www.youtube.com/watch?v=Xds38lPdh80"), title: "【SVランクマ】草統一　＃１７５【＃なまウキ】", description: "寿海 浮🧼", },
      { image: ytThumb("https://www.youtube.com/watch?v=Vto9aED-K8g"), title: "【SVランクマ】草統一　＃１７６【＃なまウキ】", description: "寿海 浮🧼", },
      { image: ytThumb("https://www.youtube.com/watch?v=QIPMJcPq_Jo"), title: "【SVランクマ】草統一　＃１７７【＃なまウキ】", description: "寿海 浮🧼", },
      { image: ytThumb("https://www.youtube.com/watch?v=f7CtsTRpQZ8"), title: "【SVランクマ】草統一　＃１７８【＃なまウキ】", description: "寿海 浮🧼", },
    ],
  },
];

