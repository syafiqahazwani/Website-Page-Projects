
// HEADER
class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header>
        <div class="container ">
          <div class="navbar flex1">
            <div class="logo">
              <img src="../image/MainPageSlider/logo.png" alt="">
            </div>
            <nav>

              <ul id="menuitem">
                <li class="menu-item">
                  <a href="../MAIN PAGE.html">MAIN PAGE</a></li>
                <li class="menu-item">
                  <a href="#">COLLECTION ANIME OPENING & ENDING</a>
                  <ul class="sub-menu">
                    <li class="menu-item"><a href="Collection (2000-2013).html">COLLECTION (2000-2013)</a></li>
                    <li class="menu-item"><a href="Collection (2014-2016).html">COLLECTION (2014-2016)</a></li>
                    <li class="menu-item"><a href="Collection (2017-2019).html">COLLECTION (2017-2019)</a></li>
                  </ul>
                </li>
                <li class="menu-item">
                  <a href="#">ONGOING ANIME</a>
                <ul class="sub-menu">
                    <li class="menu-item"><a href="Ongoing (2020-2022).html">ONGOING (2020-2022)</a></li>
                    <li class="menu-item"><a href="Ongoing (2023-2025).html">ONGOING (2023-2025)</a></li>
                  </ul>
                </li>
              </ul>

            </nav>
            <span class="fa fa-bars" onclick="menutoggle()"></span>
            <div class="subscribe flex">
              <i class="fas fa-search"></i>
              <i id="palybtn" class="fas fa-user"></i>
            </div>
          </div>
        </div>
    </header>

      `;
    }
  }
  
  customElements.define('header-component', Header);