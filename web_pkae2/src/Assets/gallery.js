import {importAll} from "../Utils/utils";
import dayjs from "dayjs";

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg|gif)$/));

const gallery = {
  'chara_sheet_mona':
{img: images['chara_sheet_mona.png'],
title: 'chara_sheet_mona.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'emote_buu_tap':
{img: images['emote_buu_tap.gif'],
title: 'emote_buu_tap.gif',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'emote_glasses':
{img: images['emote_glasses.gif'],
title: 'emote_glasses.gif',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'emote_pkae2_love':
{img: images['emote_pkae2_love.png'],
title: 'emote_pkae2_love.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'emote_pkae2_pack':
{img: images['emote_pkae2_pack.png'],
title: 'emote_pkae2_pack.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'emote_scarlett':
{img: images['emote_scarlett.gif'],
title: 'emote_scarlett.gif',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'emote_scarlett_cheer':
{img: images['emote_scarlett_cheer.gif'],
title: 'emote_scarlett_cheer.gif',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'emote_showcase':
{img: images['emote_showcase.png'],
title: 'emote_showcase.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'emote_wutti':
{img: images['emote_wutti.gif'],
title: 'emote_wutti.gif',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_64':
{img: images['illust_64.png'],
title: 'illust_64.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_art_raffle_part1':
{img: images['illust_art_raffle_part1.png'],
title: 'illust_art_raffle_part1.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_art_raffle_part2':
{img: images['illust_art_raffle_part2.png'],
title: 'illust_art_raffle_part2.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_art_raffle_part3':
{img: images['illust_art_raffle_part3.png'],
title: 'illust_art_raffle_part3.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_bemi':
{img: images['illust_bemi.png'],
title: 'illust_bemi.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_capt':
{img: images['illust_capt.png'],
title: 'illust_capt.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_cecilia':
{img: images['illust_cecilia.png'],
title: 'illust_cecilia.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_ictwd_christmas':
{img: images['illust_ictwd_christmas.png'],
title: 'illust_ictwd_christmas.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_kei_karuizawa':
{img: images['illust_kei_karuizawa.png'],
title: 'illust_kei_karuizawa.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_ken':
{img: images['illust_ken.png'],
title: 'illust_ken.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_king_shiki':
{img: images['illust_king_shiki.png'],
title: 'illust_king_shiki.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_kobe':
{img: images['illust_kobe.png'],
title: 'illust_kobe.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_kyra':
{img: images['illust_kyra.png'],
title: 'illust_kyra.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_malcureos':
{img: images['illust_malcureos.png'],
title: 'illust_malcureos.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_moousey':
{img: images['illust_moousey.png'],
title: 'illust_moousey.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_oceonax':
{img: images['illust_oceonax.png'],
title: 'illust_oceonax.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_quaften':
{img: images['illust_quaften.png'],
title: 'illust_quaften.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_raven':
{img: images['illust_raven.png'],
title: 'illust_raven.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_scarlett':
{img: images['illust_scarlett.png'],
title: 'illust_scarlett.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_seda':
{img: images['illust_seda.png'],
title: 'illust_seda.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_sodaruma':
{img: images['illust_sodaruma.png'],
title: 'illust_sodaruma.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_sovereign':
{img: images['illust_sovereign.png'],
title: 'illust_sovereign.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_vesperah':
{img: images['illust_vesperah.png'],
title: 'illust_vesperah.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_wutti':
{img: images['illust_wutti.png'],
title: 'illust_wutti.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_yoimiya':
{img: images['illust_yoimiya.png'],
title: 'illust_yoimiya.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_yuno':
{img: images['illust_yuno.png'],
title: 'illust_yuno.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'illust_yuno_soccer':
{img: images['illust_yuno_soccer.png'],
title: 'illust_yuno_soccer.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'screen_mafuyu_loading':
{img: images['screen_mafuyu_loading.png'],
title: 'screen_mafuyu_loading.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'sketch_eula':
{img: images['sketch_eula.jpg'],
title: 'sketch_eula.jpg',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'sketch_koba':
{img: images['sketch_koba.png'],
title: 'sketch_koba.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'vtuber_leona':
{img: images['vtuber_leona.png'],
title: 'vtuber_leona.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'vtuber_mafuyu_bust':
{img: images['vtuber_mafuyu_bust.png'],
title: 'vtuber_mafuyu_bust.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'vtuber_pkae2_shading':
{img: images['vtuber_pkae2_shading.png'],
title: 'vtuber_pkae2_shading.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},
'vtuber_wolfy_fullbody':
{img: images['vtuber_wolfy_fullbody.png'],
title: 'vtuber_wolfy_fullbody.png',
prompt: '',
wip: [],
speed: null,
d: '2022-01-01',
pop: 900
},

};
Object.keys(gallery).forEach(k => Object.assign(gallery[k], {id: k, date: dayjs(gallery[k].d, 'YYYY-MM-DD')}));

export default gallery;