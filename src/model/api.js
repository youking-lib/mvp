class WebService {
  constructor () {}

  getPost () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          status: 0,
          data: [
            {
              title: '《圣歌》试玩：质量上乘点创新之作',
              subTitle: '不过这个新世界是否值得一探？',
              banner: '/image/test.jpg',
              thump: 10,
              comment: 1
            }, {
              title: 'PSN 港服 2 月会免游戏公布',
              subTitle: '这阵容，是亲妈没错了！',
              thump: 12,
              commnet: 22
            }
          ]
        })
      }, 2000)
    })
  }

  newGame () {
    return {
      status: 0,
      data: [
        {
          title: '巅峰排球',
          tag: ['对抗', '排球'],
          adds: 2
        }
      ]
    }
  }
}

export default new WebService()
