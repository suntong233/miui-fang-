window.onload = function () {
  let fangdoutimer = null
  let fangdouflag = true
  let count = 0
  let container = st('.swiperContainer')
  let leftbtn = st('.leftbtn')
  let rightbtn = st('.rightbtn')
  class HomeTool {
    constructor (props) {
      this.$el = document.querySelector(props.el)
      this.init()
    }
    init () {
      this.render()
      setTimeout(() => {
        if (document.documentElement.scrollTop < 700) {
          document.querySelector('.home-tool-back').style.cssText = 'display:none'
        }
      }, 200)
      document.querySelector('.home-tool-back').onclick = () => {
        document.querySelector('.home-tool-back').style.cssText = 'display:none'
      }
      window.addEventListener('mousewheel', this.fangDou(this.backHomeBtn))
    }
    fangDou (fn) {
      let timer5
      return function () {
        clearTimeout(timer5)
        timer5 = setTimeout(() => {
          fn()
        }, 1)
      }
    }
    backHomeBtn () {
      if (document.documentElement.scrollTop > 700) {
        document.querySelector('.home-tool-back').style.cssText = ''
      } else {
        document.querySelector('.home-tool-back').style.cssText = 'display:none'
      }
    }
    render () {
      this.$el.innerHTML = `
        <div class="home-tool-item">
          <img class="unhover-img" src="https://i8.mifile.cn/b2c-mimall-media/98a23aae70f25798192693f21c4d4039.png">
          <img class="hover-img" src="https://i8.mifile.cn/b2c-mimall-media/74c4fcb4475af8308e9a670db9c01fdf.png">
          <span class="hiddenSpan">手机APP</span>
          <div class="saomaBar">
            <img width=100 height=100 src="https://i8.mifile.cn/b2c-mimall-media/93650133310ec1c385487417a472a26c.png">
            <div>手机扫一扫</div>
            <div>一分赢好礼</div>
          </div>
          <div class="arrowRight"></div>
        </div>
        <div class="home-tool-item">
          <img class="unhover-img" src="https://i8.mifile.cn/b2c-mimall-media/55cad219421bee03a801775e7309b920.png">
          <img class="hover-img" src="https://i8.mifile.cn/b2c-mimall-media/41f858550f42eb1770b97faf219ae215.png">
          <span>个人中心</span>
        </div>
        <div class="home-tool-item">
          <img class="unhover-img" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/12eb0965ab33dc8e05870911b90f3f13.png">
          <img class="hover-img" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/95fbf0081a06eec7be4d35e277faeca0.png">
          <span>售后服务</span>
        </div>
        <div class="home-tool-item">
          <img class="unhover-img" src="https://i8.mifile.cn/b2c-mimall-media/4f036ae4d45002b2a6fb6756cedebf02.png">
          <img class="hover-img" src="https://i8.mifile.cn/b2c-mimall-media/5e9f2b1b0da09ac3b3961378284ef2d4.png">
          <span>人工客服</span>
        </div>
        <div class="home-tool-item">
          <img class="unhover-img" src="https://i8.mifile.cn/b2c-mimall-media/d7db56d1d850113f016c95e289e36efa.png">
          <img class="hover-img" src="https://i8.mifile.cn/b2c-mimall-media/692a6c3b0a93a24f74a29c0f9d68ec71.png">
          <span class="hiddenSpan">购物车</span>
          <div class="gouwuche">购物车（0）</div>
        </div>
        <a href="#app">
        <div class="home-tool-item home-tool-back">
          <img class="unhover-img" src="//i1.mifile.cn/f/i/2018/home/totop.png">
          <img class="hover-img" src="//i1.mifile.cn/f/i/2018/home/totop_hover.png">
          <span>回顶部</span>
        </div></a>
      `
    }
  }
  let homeToolBar = new HomeTool({
    el: '.home-tool-bar'
  })
  console.dir(homeToolBar)
  // runbuild==================================================================================
  function special1() {
    let data = asddata
    let frame = document.createDocumentFragment()
    let dom = document.createElement('div')
    let temphtml1 = ``
    let temphtml2 = ``
    data.forEach(item => {
      if (item.hasTab === 1) {
        temphtml1 += `<li data-moremsg=${item.title} class="ouverrender">${item.title}</li>`
      }
      if (item.hasTab === 0) {
        temphtml2 += `<li>${item.title}</li>`
      }
    })
    let html = `<ul><div id="renderspan"><div class="waitRender"></div>${temphtml1}</div>${temphtml2}</ul>`
    dom.innerHTML = html
    frame.appendChild(dom)
    document.querySelector('#titleRenderIt').appendChild(frame)
    let ouverrenders = document.querySelectorAll('.ouverrender')
    let waitRender = document.querySelector('.waitRender')

    function renderover(e) {
      waitRender.innerHTML = ''
      let html4 = ''
      let key = e.target.dataset.moremsg
      data.forEach(item => {
        if (item.title === key) {
          item.moreMsg.forEach(item => {
            html4 += `<div><img src="${item.src}" /><div class="tempRenderdiv">${item.name}</div>${item.name === '查看全部' ? `<div class="tempRenderdiv3">${item.price}</div>` : `<div class="tempRenderdiv2">${item.price}</div>`}</div><span class="tempRenderspan"></span>`
          })
        }
      })
      waitRender.innerHTML = `<div class="tempRender">${html4}</div>`
    }
    ouverrenders.forEach(item => {
      item.addEventListener('mouseover', renderover)
    })
  }
  special1()
  function special2() {
    function renderMain(renderData, selector) {
      let frame = document.createDocumentFragment() // 创建文档碎片
      let cardHtml = '' // 每个卡片data
      function renderDataMainBox(data) {
        data.forEach(item => {
          if (item.turn) {
            cardHtml += `
              <div class="cMainBoxContentDivSmall">
                <div class="cMainBoxContentDivSmall-box">
                  <div class="cMainBoxContentDivSmall-boxDescript">
                    <div>${item.name}</div>
                    <div style="color:#ff6700;font-size:12px;margin-top:10px">${item.price}</div>
                  </div>
                  <div class="cMainBoxContentDivSmall-boxImg"><img width="80" src=${item.src}></div>
                </div>
                <div class="cMainBoxContentDivSmall-box">
                  <div class="cMainBoxContentDivSmall-boxDescript">
                    <div style="font-size:18px;color:#333;margin:10px 0 5px 0;">浏览更多</div>
                    <div style="font-size:12px;color:#757575">${item.turn}</div>
                  </div>
                  <div style="width:80px;height:80px;text-align:center;line-height:80px;" class="cMainBoxContentDivSmall-boxImg">
                    <i style="font-size:48px;color:#ff6700" class="iconfont iconfont-circle-arrow-right"></i>
                  </div>
                </div>
              </div>
            `
          } else {
            cardHtml += `<div class="cMainBoxContentDiv">
                <img class="cMainBoxContentDivImg" src=${item.src}>
                <div class="cMainBoxContentDivtitle">${item.name}</div>
                <div class="cMainBoxContentDivDes">${item.descript}</div>
                ${(typeof item.price === 'string') ? `<div style="color:#ff6700">${item.price}</div>` : `<div><span style="color:#ff6700">${item.price[0]}</span><span style="text-decoration:line-through;color:#b0b0b0">${item.price[1]}</span></div>`}
            </div>`
          }
        })
      }
      if (renderData.type === 1) {
        renderData.content.forEach(item => {
          cardHtml += `<div class="cMainBoxContentDiv">
                <img class="cMainBoxContentDivImg" src=${item.src}>
                <div class="cMainBoxContentDivtitle">${item.name}</div>
                <div class="cMainBoxContentDivDes">${item.descript}</div>
                ${(typeof item.price === 'string') ? `<div style="color:#ff6700">${item.price}</div>` : `<div><span style="color:#ff6700">${item.price[0]}</span><span style="text-decoration:line-through;color:#b0b0b0">${item.price[1]}</span></div>`}
            </div>`
        })
      } else {
        renderDataMainBox(renderData.content.contentOne)
      }
      let Html = `
          <div class="cMainBox">
              <div class="cMainBoxTitle">
                  <div class="cMainBoxTitle-left">${renderData.title}</div>
                  ${renderData.type === 2 ? `<div onmouseover="changeCard(event)" class="cMainBoxTitle-right2">
                    <div data-mycont='${JSON.stringify(renderData.content.contentOne)}' class="cMainBoxTitle-right2left actived">${renderData.page[0]}</div><div data-mycont='${JSON.stringify(renderData.content.contentTwo)}' class="cMainBoxTitle-right2right">${renderData.page[1]}</div>
                  </div>` : `<div class="cMainBoxTitle-right">${renderData.page}<i class="iconfont iconfont-arrow-right-big"></i></div>`}
              </div>
              <div class="cMainBoxContent">
                  <div class="cMainBoxContent-left">
                    ${renderData.type === 2 ? `<img src=${renderData.bannerOne[0]} /><img src=${renderData.bannerOne[1]} />` : `<img src=${renderData.bannerOne} />`}
                  </div>
                  <div class="cMainBoxContent-right">${cardHtml}</div>
              </div>
              <div style="cursor:pointer"><img src=${renderData.bannerTwo} /></div>
          </div>
      `
      let dom = stCEI('div', Html, 'mainContentDiv') // 创建dom容器
      frame.appendChild(dom) // 将dom容器添加进frame
      st(selector).innerHTML = '' // 初始化
      st(selector).appendChild(frame) // 将文档挂到dom上
    }
    renderMain(phoneData, '.mainContentbox2')
    renderMain(homeEleData, '.mainContentbox3')
    renderMain(Intelligence, '.mainContentbox4')
    renderMain(collocation, '.mainContentbox5')
    renderMain(parts, '.mainContentbox6')
    renderMain(periphery, '.mainContentbox7')
  }
  special2()
  function special3() {
    let getOver = st('#asflasfkl')
    let waitRender = st('.banner-menuMore')
    getOver.onmouseover = function (e) {
      if (e.target.tagName === 'LI') {
        waitRender.innerHTML = ''
        let DataIndex = parseInt(e.target.dataset.index)
        topMenu.map((item, key) => {
          if (DataIndex === key) {
            renderMenu(item)
          }
        })
      }
    }

    function renderMenu(data) {
      let coldiv = stCEI('div', '', 'coldiv')
      let frame = document.createDocumentFragment()
      let list = data.list

      function renderList(dom, data) {
        let temphtml3 = ''
        data.map(item => {
          temphtml3 += `
            <div class="coldivlist"><img src="${item.imgsrc}"/><span>${item.name}</span></div>
          `
        })
        dom.innerHTML = temphtml3
      }
      if (list.length) {
        let cloneList = []
        for (let i = 0; i < list.length; i++) {
          cloneList = [...cloneList, list[i]]
        }
        let col = Math.ceil(list.length / 6)
        switch (col) {
          case 1:
            let col1div1 = coldiv.cloneNode()
            frame.appendChild(col1div1)
            renderList(col1div1, cloneList)
            break
          case 2:
            let col2div1 = coldiv.cloneNode()
            let col2div2 = coldiv.cloneNode()
            let col2list1 = cloneList.splice(0, 6)
            let col2list2 = cloneList
            frame.appendChild(col2div1)
            frame.appendChild(col2div2)
            renderList(col2div1, col2list1)
            renderList(col2div2, col2list2)
            break
          case 3:
            let col3div1 = coldiv.cloneNode()
            let col3div2 = coldiv.cloneNode()
            let col3div3 = coldiv.cloneNode()
            let col3list1 = cloneList.splice(0, 6)
            let col3list2 = cloneList.splice(0, 6)
            let col3list3 = cloneList
            frame.appendChild(col3div1)
            frame.appendChild(col3div2)
            frame.appendChild(col3div3)
            renderList(col3div1, col3list1)
            renderList(col3div2, col3list2)
            renderList(col3div3, col3list3)
            break
          case 4:
            let col4div1 = coldiv.cloneNode()
            let col4div2 = coldiv.cloneNode()
            let col4div3 = coldiv.cloneNode()
            let col4div4 = coldiv.cloneNode()
            let col4list1 = cloneList.splice(0, 6)
            let col4list2 = cloneList.splice(0, 6)
            let col4list3 = cloneList.splice(0, 6)
            let col4list4 = cloneList
            frame.appendChild(col4div1)
            frame.appendChild(col4div2)
            frame.appendChild(col4div3)
            frame.appendChild(col4div4)
            renderList(col4div1, col4list1)
            renderList(col4div2, col4list2)
            renderList(col4div3, col4list3)
            renderList(col4div4, col4list4)
            break
        }
        waitRender.appendChild(frame)
      }
    }
  }
  special3()
  // runbuild==================================================================================

  function beginLunboL () {
    let timer = setInterval(() => {
      count -= 6
      if (count === 0 || count > 0) {
        leftbtn.firstElementChild.className = 'iconfont-arrow-left-big arrowFalse'
      } else {
        leftbtn.firstElementChild.className = 'iconfont-arrow-left-big leftarrow'
      }
      if (count === -3912 || count < -3912) {
        rightbtn.firstElementChild.className = 'iconfont-arrow-right-big arrowFalse'
      } else {
        rightbtn.firstElementChild.className = 'iconfont-arrow-right-big rightarrow'
      }
      if (count % 978 === 0) {
        clearInterval(timer)
      }
      container.style.cssText = `left:${count}px`
    }, 1)
  }

  function beginLunboR () {
    let timer = setInterval(() => {
      count += 6
      if (count === 0 || count > 0) {
        leftbtn.firstElementChild.className = 'iconfont-arrow-left-big arrowFalse'
      } else {
        leftbtn.firstElementChild.className = 'iconfont-arrow-left-big leftarrow'
      }
      if (count === -3912 || count < -3912) {
        rightbtn.firstElementChild.className = 'iconfont-arrow-right-big arrowFalse'
      } else {
        rightbtn.firstElementChild.className = 'iconfont-arrow-right-big rightarrow'
      }
      if (count % 978 === 0) {
        clearInterval(timer)
      }
      container.style.cssText = `left:${count}px`
    }, 1)
  }

  let timer3 = setInterval(() => {
    if (count === -3912 || count < -3912) {
      clearInterval(timer3)
      return
    }
    beginLunboL()
  }, 6000)

  function fangdou (fn) {
    if (fangdouflag) {
      fn()
    }
    fangdouflag = false
    clearTimeout(fangdoutimer)
    fangdoutimer = setTimeout(() => {
      fangdouflag = true
    }, 700)
  }

  leftbtn.onclick = () => {
    if (count === 0 || count > 0) {
      return
    }
    leftbtn.firstElementChild.className = 'iconfont-arrow-left-big leftarrow'
    clearInterval(timer3)
    fangdou(beginLunboR)
  }
  rightbtn.onclick = function () {
    if (count === -3912 || count < -3912) {
      return
    }
    rightbtn.firstElementChild.className = 'iconfont-arrow-right-big rightarrow'
    clearInterval(timer3)
    fangdou(beginLunboL)
  }
  if (count === 0 || count > 0) {
    leftbtn.firstElementChild.className = 'iconfont-arrow-left-big arrowFalse'
  }
  if (count === -3912 || count < -3912) {
    rightbtn.firstElementChild.className = 'iconfont-arrow-right-big arrowFalse'
  }
  inputJS()
  // 倒计时+++
  class CountDown {
    constructor(options) {
      if (options.currentTime >= options.duration) {
        return
      }
      if (options.currentTime < options.timeStart) {
        return
      }
      this.time = options.currentTime
      this.$el = document.querySelector(options.el)
      this.timeStart = options.timeStart // 1567155000000
      this.duration = options.duration // 1567156280000
      this.init()
    }
    init() {
      this.allSeconds = Math.floor((this.duration - this.time) / 1000)
      this.conputedTime()
      this.render()
      this.timeId = setInterval(() => {
        this.allSeconds--
        if (this.allSeconds < 0) {
          clearInterval(this.timeId)
          return
        }
        this.conputedTime()
        this.render()
      }, 1000)
    }
    conputedTime() {
      let h = Math.floor(this.allSeconds % 86400 / 3600)
      let m = Math.floor(this.allSeconds % 86400 % 3600 / 60)
      let s = this.allSeconds % 60
      h = h < 10 ? `0${h}` : h
      m = m < 10 ? `0${m}` : m
      s = s < 10 ? `0${s}` : s
      this.h = h
      this.m = m
      this.s = s
    }
    render() {
      this.$el.innerHTML = `
        <span class="hour">${this.h}</span>
        <div style="font-size:28px">:</div>
        <span class="minute">${this.m}</span>
        <div style="font-size:28px">:</div>
        <span class="second">${this.s}</span>
      `
    }
  }
  let timeDown = new CountDown({
    el: '.timer',
    timeStart: new Date('2019 8 31 10:00:00').getTime(),
    duration: new Date('2019 8 31 24:00:00').getTime(),
    currentTime: new Date().getTime()
  })
  console.dir(timeDown)
  // 倒计时---
  function myswiperFun () {
    var mySwiper = new Swiper('.swiper-container', {
      effect: 'fade',
      loop: true,
      autoplay: {
        disableOnInteraction: false,
        delay: 5000
      },
      fadeEffect: {
        crossFade: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    })
    document.querySelector('.imgChangeAutoBox').onmouseover = function () {
      mySwiper.autoplay.stop()
    }
    document.querySelector('.imgChangeAutoBox').onmouseout = function () {
      mySwiper.autoplay.start()
    }
  }
  myswiperFun()
  // ajax({
  //   url: '/data/tab',
  //   params: 'ark'
  // }).then(alldata => {
  //   let data = alldata.list
  //   let frame = document.createDocumentFragment()
  //   let dom = document.createElement('div')
  //   let temphtml1 = ``
  //   let temphtml2 = ``
  //   data.forEach(item => {
  //     if (item.hasTab === 1) {
  //       temphtml1 += `<li data-moremsg=${item.title} class="ouverrender">${item.title}</li>`
  //     }
  //     if (item.hasTab === 0) {
  //       temphtml2 += `<li>${item.title}</li>`
  //     }
  //   })
  //   let html = `<ul><div id="renderspan"><div class="waitRender"></div>${temphtml1}</div>${temphtml2}</ul>`
  //   dom.innerHTML = html
  //   frame.appendChild(dom)
  //   document.querySelector('#titleRenderIt').appendChild(frame)
  //   let ouverrenders = document.querySelectorAll('.ouverrender')
  //   let waitRender = document.querySelector('.waitRender')

  //   function renderover(e) {
  //     waitRender.innerHTML = ''
  //     let html4 = ''
  //     let key = e.target.dataset.moremsg
  //     data.forEach(item => {
  //       if (item.title === key) {
  //         item.moreMsg.forEach(item => {
  //           html4 += `<div><img src="${item.src}" /><div class="tempRenderdiv">${item.name}</div>${item.name === '查看全部' ? `<div class="tempRenderdiv3">${item.price}</div>` : `<div class="tempRenderdiv2">${item.price}</div>`}</div><span class="tempRenderspan"></span>`
  //         })
  //       }
  //     })
  //     waitRender.innerHTML = `<div class="tempRender">${html4}</div>`
  //   }
  //   ouverrenders.forEach(item => {
  //     item.addEventListener('mouseover', renderover)
  //   })
  //   return alldata
  // }).then(alldata => {
  //   // 渲染下面主体==================================================================
  //   // const {
  //   //   phoneData,
  //   //   homeEleData,
  //   //   Intelligence,
  //   //   collocation,
  //   //   parts,
  //   //   periphery
  //   // } = alldata
  //   // 渲染卡片主体
  //   function renderMain(renderData, selector) {
  //     let frame = document.createDocumentFragment() // 创建文档碎片
  //     let cardHtml = '' // 每个卡片data
  //     function renderDataMainBox(data) {
  //       data.forEach(item => {
  //         if (item.turn) {
  //           cardHtml += `
  //             <div class="cMainBoxContentDivSmall">
  //               <div class="cMainBoxContentDivSmall-box">
  //                 <div class="cMainBoxContentDivSmall-boxDescript">
  //                   <div>${item.name}</div>
  //                   <div style="color:#ff6700;font-size:12px;margin-top:10px">${item.price}</div>
  //                 </div>
  //                 <div class="cMainBoxContentDivSmall-boxImg"><img width="80" src=${item.src}></div>
  //               </div>
  //               <div class="cMainBoxContentDivSmall-box">
  //                 <div class="cMainBoxContentDivSmall-boxDescript">
  //                   <div style="font-size:18px;color:#333;margin:10px 0 5px 0;">浏览更多</div>
  //                   <div style="font-size:12px;color:#757575">${item.turn}</div>
  //                 </div>
  //                 <div style="width:80px;height:80px;text-align:center;line-height:80px;" class="cMainBoxContentDivSmall-boxImg">
  //                   <i style="font-size:48px;color:#ff6700" class="iconfont iconfont-circle-arrow-right"></i>
  //                 </div>
  //               </div>
  //             </div>
  //           `
  //         } else {
  //           cardHtml += `<div class="cMainBoxContentDiv">
  //               <img class="cMainBoxContentDivImg" src=${item.src}>
  //               <div class="cMainBoxContentDivtitle">${item.name}</div>
  //               <div class="cMainBoxContentDivDes">${item.descript}</div>
  //               ${(typeof item.price === 'string') ? `<div style="color:#ff6700">${item.price}</div>` : `<div><span style="color:#ff6700">${item.price[0]}</span><span style="text-decoration:line-through;color:#b0b0b0">${item.price[1]}</span></div>`}
  //           </div>`
  //         }
  //       })
  //     }
  //     if (renderData.type === 1) {
  //       renderData.content.forEach(item => {
  //         cardHtml += `<div class="cMainBoxContentDiv">
  //               <img class="cMainBoxContentDivImg" src=${item.src}>
  //               <div class="cMainBoxContentDivtitle">${item.name}</div>
  //               <div class="cMainBoxContentDivDes">${item.descript}</div>
  //               ${(typeof item.price === 'string') ? `<div style="color:#ff6700">${item.price}</div>` : `<div><span style="color:#ff6700">${item.price[0]}</span><span style="text-decoration:line-through;color:#b0b0b0">${item.price[1]}</span></div>`}
  //           </div>`
  //       })
  //     } else {
  //       renderDataMainBox(renderData.content.contentOne)
  //     }
  //     let Html = `
  //         <div class="cMainBox">
  //             <div class="cMainBoxTitle">
  //                 <div class="cMainBoxTitle-left">${renderData.title}</div>
  //                 ${renderData.type === 2 ? `<div onmouseover="changeCard(event)" class="cMainBoxTitle-right2">
  //                   <div data-mycont='${JSON.stringify(renderData.content.contentOne)}' class="cMainBoxTitle-right2left actived">${renderData.page[0]}</div><div data-mycont='${JSON.stringify(renderData.content.contentTwo)}' class="cMainBoxTitle-right2right">${renderData.page[1]}</div>
  //                 </div>` : `<div class="cMainBoxTitle-right">${renderData.page}<i class="iconfont iconfont-arrow-right-big"></i></div>`}
  //             </div>
  //             <div class="cMainBoxContent">
  //                 <div class="cMainBoxContent-left">
  //                   ${renderData.type === 2 ? `<img src=${renderData.bannerOne[0]} /><img src=${renderData.bannerOne[1]} />` : `<img src=${renderData.bannerOne} />`}
  //                 </div>
  //                 <div class="cMainBoxContent-right">${cardHtml}</div>
  //             </div>
  //             <div style="cursor:pointer"><img src=${renderData.bannerTwo} /></div>
  //         </div>
  //     `
  //     let dom = stCEI('div', Html, 'mainContentDiv') // 创建dom容器
  //     frame.appendChild(dom) // 将dom容器添加进frame
  //     st(selector).innerHTML = '' // 初始化
  //     st(selector).appendChild(frame) // 将文档挂到dom上
  //   }
  //   renderMain(phoneData, '.mainContentbox2')
  //   renderMain(homeEleData, '.mainContentbox3')
  //   renderMain(Intelligence, '.mainContentbox4')
  //   renderMain(collocation, '.mainContentbox5')
  //   renderMain(parts, '.mainContentbox6')
  //   renderMain(periphery, '.mainContentbox7')
  //   return alldata
  // }).then(allData => {
  //   // 渲染上方导航的menu
  //   let getOver = st('#asflasfkl')
  //   let waitRender = st('.banner-menuMore')
  //   let topMenu = allData.topMenu;
  //   getOver.onmouseover = function (e) {
  //     if (e.target.tagName === 'LI') {
  //       waitRender.innerHTML = ''
  //       let DataIndex = parseInt(e.target.dataset.index)
  //       topMenu.map((item, key) => {
  //         if (DataIndex === key) {
  //           renderMenu(item)
  //         }
  //       })
  //     }
  //   }

  //   function renderMenu(data) {
  //     let coldiv = stCEI('div', '', 'coldiv')
  //     let frame = document.createDocumentFragment()
  //     let list = data.list

  //     function renderList(dom, data) {
  //       let temphtml3 = ''
  //       data.map(item => {
  //         temphtml3 += `
  //           <div class="coldivlist"><img src="${item.imgsrc}"/><span>${item.name}</span></div>
  //         `
  //       })
  //       dom.innerHTML = temphtml3
  //     }
  //     if (list.length) {
  //       let cloneList = []
  //       for (let i = 0; i < list.length; i++) {
  //         cloneList = [...cloneList, list[i]]
  //       }
  //       let col = Math.ceil(list.length / 6)
  //       switch (col) {
  //         case 1:
  //           let col1div1 = coldiv.cloneNode()
  //           frame.appendChild(col1div1)
  //           renderList(col1div1, cloneList)
  //           break
  //         case 2:
  //           let col2div1 = coldiv.cloneNode()
  //           let col2div2 = coldiv.cloneNode()
  //           let col2list1 = cloneList.splice(0, 6)
  //           let col2list2 = cloneList
  //           frame.appendChild(col2div1)
  //           frame.appendChild(col2div2)
  //           renderList(col2div1, col2list1)
  //           renderList(col2div2, col2list2)
  //           break
  //         case 3:
  //           let col3div1 = coldiv.cloneNode()
  //           let col3div2 = coldiv.cloneNode()
  //           let col3div3 = coldiv.cloneNode()
  //           let col3list1 = cloneList.splice(0, 6)
  //           let col3list2 = cloneList.splice(0, 6)
  //           let col3list3 = cloneList
  //           frame.appendChild(col3div1)
  //           frame.appendChild(col3div2)
  //           frame.appendChild(col3div3)
  //           renderList(col3div1, col3list1)
  //           renderList(col3div2, col3list2)
  //           renderList(col3div3, col3list3)
  //           break
  //         case 4:
  //           let col4div1 = coldiv.cloneNode()
  //           let col4div2 = coldiv.cloneNode()
  //           let col4div3 = coldiv.cloneNode()
  //           let col4div4 = coldiv.cloneNode()
  //           let col4list1 = cloneList.splice(0, 6)
  //           let col4list2 = cloneList.splice(0, 6)
  //           let col4list3 = cloneList.splice(0, 6)
  //           let col4list4 = cloneList
  //           frame.appendChild(col4div1)
  //           frame.appendChild(col4div2)
  //           frame.appendChild(col4div3)
  //           frame.appendChild(col4div4)
  //           renderList(col4div1, col4list1)
  //           renderList(col4div2, col4list2)
  //           renderList(col4div3, col4list3)
  //           renderList(col4div4, col4list4)
  //           break
  //       }
  //       waitRender.appendChild(frame)
  //     }
  //   }
  // }).catch(() => {
  //   console.log(1)
  // })
}
// 改变卡片渲染的数据 重新渲染
function changeCard (e) {
  let cardHtml = ''
  if (e.target.className !== 'cMainBoxTitle-right2') {
    let temp1 = e.target.parentElement.parentElement
    let temp2 = temp1.nextElementSibling.children[1]
    temp2.innerHTML = ''
    renderDataMainBox2(JSON.parse(e.target.dataset.mycont))
    temp2.innerHTML = cardHtml
    e.target.parentElement.children[0].className = 'cMainBoxTitle-right2left'
    e.target.parentElement.children[1].className = 'cMainBoxTitle-right2right'
    e.target.classList.add('actived')
  }

  function renderDataMainBox2(data) {
    data.forEach(item => {
      if (item.turn) {
        cardHtml += `
          <div class="cMainBoxContentDivSmall">
            <div class="cMainBoxContentDivSmall-box">
              <div class="cMainBoxContentDivSmall-boxDescript">
                <div>${item.name}</div>
                <div style="color:#ff6700;font-size:12px;margin-top:10px">${item.price}</div>
              </div>
              <div class="cMainBoxContentDivSmall-boxImg"><img width="80" src=${item.src}></div>
            </div>
            <div class="cMainBoxContentDivSmall-box">
              <div class="cMainBoxContentDivSmall-boxDescript">
                <div style="font-size:18px;color:#333;margin:10px 0 5px 0;">浏览更多</div>
                <div style="font-size:12px;color:#757575">${item.turn}</div>
              </div>
              <div style="width:80px;height:80px;text-align:center;line-height:80px;" class="cMainBoxContentDivSmall-boxImg">
                <i style="font-size:48px;color:#ff6700" class="iconfont iconfont-circle-arrow-right"></i>
              </div>
            </div>
          </div>
        `
      } else {
        cardHtml += `<div class="cMainBoxContentDiv">
            <img class="cMainBoxContentDivImg" src=${item.src}>
            <div class="cMainBoxContentDivtitle">${item.name}</div>
            <div class="cMainBoxContentDivDes">${item.descript}</div>
            ${(typeof item.price === 'string') ? `<div style="color:#ff6700">${item.price}</div>` : `<div><span style="color:#ff6700">${item.price[0]}</span><span style="text-decoration:line-through;color:#b0b0b0">${item.price[1]}</span></div>`}
        </div>`
      }
    })
  }
}

function getVideo (e, href) {
  e.preventDefault()
  st('#app').appendChild(stCEI('div', `
    <div class="videoMotaiContiner1">
      <div class="videoMotaiContinerTitle">
        <div>小米CC9</div>
        <div class="closeBtn">×</div>
      </div>
      <div class="videoBox">
        <video autoplay src='${href}' controls="controls"></video>
      </div>
    </div>
  `, 'videoMotai'))
  st('.closeBtn').onclick = () => {
    st('#app').removeChild(st('.videoMotai'))
  }
}