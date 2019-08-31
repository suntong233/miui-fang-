function inputJS() {
  let searchBox = document.querySelector('.stmain-top-search')
  let ipt = document.querySelector('.stmain-top-searchipt')
  let btn = document.querySelector('.stmain-top-searchbtn')
  let searchTabs = document.querySelectorAll('.stmain-top-searchSpan')
  ipt.addEventListener('focus', inputChange)
  ipt.addEventListener('blur', inputblur)

  function inputChange() {
    let list = document.createElement('div')
    searchTabs[0].classList.add('hidden')
    searchTabs[1].classList.add('hidden')
    list.id = 'hdsfjk'
    list.style.cssText = `position:absolute;width:246px;height:300px;
        top:50px;
        border-right: 1px solid #ff6700;
        border-left: 1px solid #ff6700;
        border-bottom: 1px solid #ff6700;
        overflow:hidden;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;
        background:#fff;
        z-index:6;
    `
    list.innerHTML = `
        <div data-value="小米9">小米9</div>
        <div data-value="Redmi K20 pro">Redmi K20 pro</div>
        <div data-value="Redmi K20">Redmi K20</div>
        <div data-value="Redmi Note 7 Pro">Redmi Note 7 Pro</div>
        <div data-value="Redmi note 7">Redmi note 7</div>
        <div data-value="小米电视4c">小米电视4c</div>
        <div data-value="电视32英寸">电视32英寸</div>
        <div data-value="笔记本pro">笔记本pro</div>
        <div data-value="小爱音箱">小爱音箱</div>
        <div data-value="净水器">净水器</div>
    `
    ipt.style.cssText = `
        border-top: 1px solid #ff6700;
        border-left: 1px solid #ff6700;
        border-bottom: 1px solid #ff6700;
    `
    btn.style.cssText = 'border: 1px solid #ff6700;'
    searchBox.appendChild(list)
    let hdsfjk = document.querySelector('#hdsfjk')
    hdsfjk.onclick = function (e) {
      ipt.value = e.target.dataset.value
    }
  }

  function inputblur() {
    setTimeout(function () {
      searchTabs[0].classList.remove('hidden')
      searchTabs[1].classList.remove('hidden')
      ipt.style.cssText = ''
      btn.style.cssText = ''
      searchBox.removeChild(document.querySelector('#hdsfjk'))
    }, 100)
  }
}
