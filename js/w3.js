
// HEADER
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header id="main-header">
    <div class="main-header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
              <a href="#" class="navbar-toggler c-toggler" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <div class="navbar-toggler-icon" data-toggle="collapse">
                  <span class="navbar-menu-icon navbar-menu-icon--top"></span>
                  <span class="navbar-menu-icon navbar-menu-icon--middle"></span>
                  <span class="navbar-menu-icon navbar-menu-icon--bottom"></span>
                </div>
              </a>
              <a href="MAIN MENU.html" class="navbar-brand">
                <img src="../../images/main&footer/logo.png" class="img-fluid logo" alt="" />
              </a>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="menu-main-menu-container">
                  <ul id="top-menu" class="navbar-nav ml-auto">
                    <li class="menu-item">
                      <a href="../../MAIN MENU.html">HOME/MAIN PAGE</a></li>
                    <li class="menu-item">
                      <a href="#">ANIME</a>
                    <ul class="sub-menu">
                        <li class="menu-item"><a href="../Anime Shonen/ANIME SHONEN.html">ANIME SHONEN</a></li>
                        <li class="menu-item"><a href="../Anime Shojo/ANIME SHOJO.html">ANIME SHOJO</a></li>
                        <li class="menu-item"><a href="../Anime Part 1&2/ANIME PART 1&2.html">ANIME PART 1&2</a></li>
                        <li class="menu-item"><a href="../Anime Ova/ANIME OVA.html">ANIME OVA</a></li>
                      </ul>
                    </li>
                    <li class="menu-item">
                      <a href="#">JAPANESE</a>
                    <ul class="sub-menu">
                        <li class="menu-item"><a href="../Japanese Drama/JAPANESE DRAMA.html">JAPANESE DRAMA</a></li>
                      </ul>
                    </li>
                    <li class="menu-item">
                      <a href="#">KOREA</a>
                    <ul class="sub-menu">
                        <li class="menu-item"><a href="../Korea Drama/KOREA DRAMA.html">KOREA DRAMA</a></li>
                      </ul>
                    </li>
                    <li class="menu-item">
                      <a href="#">ENGLISH</a>
                      <ul class="sub-menu">
                        <li class="menu-item"><a href="../English Drama/ENGLISH DRAMA.html">ENGLISH DRAMA</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- MAIN MENU END -->

              <!-- SEARCH START -->
              <div class="mobile-more-menu">
                <a href="javascript:void(0);" class="more-toggle" id="dropdownMenuButton" data-toggle="more-toggle"
                  aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-ellipsis-h"></i>
                </a>
                <div class="more-menu" aria-labelledby="dropdownMenuButton">
                  <div class="navbar-right position-relative">
                    <ul class="d-flex align-items-center justify-content-end list-inline m-0">
                      <li>
                        <a href="#" class="search-toggle">
                          <i class="fa fa-search"></i>
                        </a>
                        <div class="search-box iq-search-bar">
                          <form action="#" class="searchbox">
                            <div class="form-group position-relative">
                              <input type="text" class="text search-input font-size-12"
                                placeholder="type here to search..." />
                              <i class="search-link fa fa-search"></i>
                            </div>
                          </form>
                        </div>
                      </li>
                      <!-- SEARCH END -->

                      <!-- BELL START -->
                      <li class="nav-item nav-icon">
                        <a href="#" class="search-toggle position-relative">
                          <i class="fa fa-bell"></i>
                          <span class="bg-danger dots"></span>
                        </a>
                        <div class="iq-sub-dropdown">
                          <div class="iq-card shadow-none m-0">
                            <div class="iq-card-body">
                            </div>
                          </div>
                        </div>
                      </li>
                      <!-- BELL END -->

                      <!-- USER START -->
                      <li>
                        <a href="#" class="iq-user-dropdown search-toggle d-flex align-items-center">
                          <img src="" class="img-fluid user-m rounded-circle" alt="" />
                        </a>
                        <div class="iq-sub-dropdown iq-user-dropdown">
                          <div class="iq-card shadow-none m-0">
                            <div class="iq-card-body p-0 pl-3 pr-3">
                              <a href="#" class="iq-sub-card setting-dropdown">
                                <div class="media align-items-center">
                                  <div class="right-icon">
                                    <i class="fa fa-user text-primary"></i>
                                  </div>
                                  <div class="media-body ml-3">
                                    <h6 class="mb-0">MAIN USER</h6>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- USER END -->

              <!-- FOR SPACING START -->
              <div class="navbar-right menu-right">
                <ul class="d-flex align-items-center list-inline m-0">
                  <li class="nav-item nav-icon">
                    <a href="#" class="search-toggle device-search">
                      <i class="fa fa-search"></i>
                    </a>
                    <div class="search-box iq-search-bar d-search">
                      <form action="#" class="searchbox">
                        <div class="form-group position-relative">
                          <input type="text" class="text search-input font-size-12"
                            placeholder="type here to search..." />
                          <i class="search-link fa fa-search"></i>
                        </div>
                      </form>
                    </div>
                  </li>
                  <li class="nav-item nav-icon">
                    <a href="#" class="search-toggle" data-toggle="search-toggle">
                      <i class="fa fa-bell"></i>
                      <span class="bg-danger dots"></span>
                    </a>
                    <div class="iq-sub-dropdown">
                      <div class="iq-card shadow-none m-0">
                        <div class="iq-card-body">
                        </div>
                      </div>
                    </div>
                  </li>
                  <!-- FOR SPACING END -->

                  <!-- USER ICON START -->
                  <li class="nav-item nav-icon">
                    <a href="#" class="iq-user-dropdown search-toggle d-flex align-items-center p-0">
                      <img src="../../images/main&footer/x.png" class="img-fluid user-m rounded-circle" alt="" />
                    </a>
                    <div class="iq-sub-dropdown iq-user-dropdown">
                      <div class="iq-card shadow-none m-0">
                        <div class="iq-card-body p-0 pl-3 pr-3">
                          <a href="#" class="iq-sub-card setting-dropdown">
                            <div class="media align-items-center">
                              <div class="right-icon">
                                <i class="fa fa-user text-primary"></i>
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">MAIN USER</h6>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
            <div class="nav-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
 <!-- USER ICON END -->
    `;
  }
}

customElements.define('header-component', Header);

// FOOTER
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer class="iq-bg-dark">
    <div class="footer-top">
      <div class="container-fluid">
        <div class="row footer-standard">

          <div class="col-5">
            <h6 class="footer-link-title">
              <strong>Made by Yaze Frost</strong>
            </h6>
            <ul class="info-share">

              <li>
                <a href="">
                  <i>
                  <fa class="fa fa-life-ring"></fa>
                </a>
              </li>

              <li>
                <a href="">
                  <i>
                  <fa class="fa fa-cubes"></fa>
                </a>
              </li>

              <li>
                <a href="">
                  <i>
                  <fa class="fa fa-bomb"></fa>
                </a>
              </li>

              <li>
                <a href="">
                  <i>
                  <fa class="fa fa-heartbeat"></fa>
                </a>
              </li>

            </ul>
          </div>       
        </div>
      </div>
    </div>
  </footer>
    `;
  }
}

customElements.define('footer-component', Footer);

// spacing 1
class Space extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <section id="iq-favorites">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 overflow-hidden">
          <div class="iq-main-header d-flex align-items-center justify-content-between">
            <h4 class="main-title">&nbsp;&nbsp;</h4>
            <a href="#" class="iq-view-all"></a>
          </div>
          <div class="favorite-contens">
            <ul class="favorites-slider list-inline row p-0 mb-0">
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
    `;
  }
}

customElements.define('space-component', Space);

// spacing 2
class Space2 extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="main-content">
    <section id="iq-favorites">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 overflow-hidden">
            <div class="iq-main-header d-flex align-items-center justify-content-between">
              <h4 class="main-title">&nbsp;&nbsp;</h4>
              <a href="#" class="iq-view-all"></a>
            </div>
            <div class="favorite-contens">
              <ul class="favorites-slider list-inline row p-0 mb-0">
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  <section id="iq-favorites">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 overflow-hidden">
            <div class="iq-main-header d-flex align-items-center justify-content-between">
              <h4 class="main-title">&nbsp;&nbsp;</h4>
              <a href="#" class="iq-view-all"></a>
            </div>
            <div class="favorite-contens">
              <ul class="favorites-slider list-inline row p-0 mb-0">
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('space2-component', Space2);


