import chara_sheet_mona from './images/chara_sheet_mona.png';
import illust_cecilia from './images/illust_cecilia.png';
import illust_seda from './images/illust_seda.png';
import illust_yoimiya from './images/illust_yoimiya.png';
import sketch_eula from './images/sketch_eula.jpg';
import dayjs from "dayjs";

const gallery = {
  'char_sheet_mona': {
    img: chara_sheet_mona,
    title: 'Chara Sheet Mona',
    prompt: 'Lol',
    wip: [sketch_eula],
    speed: null,
    d: '2022-01-01',
    pop: 11
  },
  'illust_cecilia': {
    img: illust_cecilia,
    title: 'Cecilia',
    prompt: 'Lol',
    wip: [],
    speed: null,
    d: '2022-01-03',
    pop: 10
  },
  'illust_seda': {
    img: illust_seda,
    title: 'Seda',
    prompt: 'Lol',
    wip: [],
    speed: null,
    d: '2022-01-02',
    pop: 9
  },
  'illust_yoimiya': {
    img: illust_yoimiya,
    title: 'Yoimmiya',
    prompt: 'Lol',
    wip: [],
    speed: null,
    d: '2022-01-10',
    pop: 1
  }
};
Object.keys(gallery).forEach(k => Object.assign(gallery[k], {id: k, date: dayjs(gallery[k].d, 'YYYY-MM-DD')}));

export default gallery;