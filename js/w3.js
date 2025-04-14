
// HEADER
class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <meta charset="UTF-8">
    <meta name="description" content="Anime Template">
    <meta name="keywords" content="Anime, unica, creative, html">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="../../Image/Header/movie.png">
    <title>Movieflix</title>

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet">

    `;
  }
}

customElements.define('header-component', Header);

// MENU
class Menu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

<!-- Page Preloder -->
<div id="preloder">
        <div class="loader"></div>
    </div>

    <!-- Header -->
<header class="header">
    <div class="container">
        <div class="row">
            <div class="col-lg-2">
                <div class="header__logo">
                        <img src="../../Image/Header/logo.png" alt="">
                    </a>
                </div>
            </div>

<div class="col-lg-10">
    <div class="header__nav">
        <nav class="header__menu mobile-menu">
            <ul>
                <li class="active"><a href="../../Movieflix.html">Home Page</a></li>

                <li><a href="../../html/Animation_Movie/Animation Movie.html">Animation Movie</a></li>

                <li><a href="#">Movie Categories<span class="arrow_carrot-down"></span></a>
                    <ul class="dropdown">
                        <li><a href="../../html/Light_Movie/Light Movie.html">Light Movie</a></li>
                        <li><a href="../../html/Hard_Movie/Hard Movie.html">Hard Movie</a></li>
                    </ul>
                </li>

                <li><a href="#">Movie Studio<span class="arrow_carrot-down"></span></a>
                    <ul class="dropdown">
                        <li><a href="../../html/Marvel_Movie/Marvel Movie.html">Marvel Studio Movie</a></li>
                        <li><a href="../../html/DC_Movie/DC Movie.html">DC Movie</a></li>
                    </ul>
                </li>

                <li><a href="#">Movie Collection<span class="arrow_carrot-down"></span></a>
                    <ul class="dropdown">
                        <li><a href="../../html/Superhero_Movie/Superhero Movie.html">Superhero Movie</a></li>
                        <li><a href="../../html/Magic_Movie/Magic Movie.html">Magic Movie</a></li>
                    </ul>
                </li>

            </ul>
        </nav>
    </div>
</div>

        </div>
        <div id="mobile-menu-wrap"></div>
    </div>
</header>
<!-- Header -->

    `;
  }
}

customElements.define('menu-component', Menu);

// FOOTER
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <!-- Footer -->
<footer class="footer">
    <div class="page-up">
        <a href="#" id="scrollToTopButton"><span class="arrow_carrot-up"></span></a>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <div class="footer__logo">
                 <img src="../../Image/Header/logo.png" alt="">
                </div>
            </div>        
          </div>
      </div>
  </footer>
  <!-- Footer -->

    `;
  }
}

customElements.define('footer-component', Footer);
