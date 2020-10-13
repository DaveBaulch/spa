<template>
    <div class="footer">

      <footer class="footer-primary" id="footer-primary" role="contentinfo">

        <div class="container">

          <div class="row">

            <div class="footer-primary__col footer-primary__col--1">

              <div class="footer-primary__sub1">
                <h2>Contact Us</h2>

                <nav aria-label="Contact items">

                  <ul class="footer-nav">

                    <li class="footer-nav__item">
                      <img src="@/assets/images/svg/icon-phone.svg" class="footer-nav__item-icon" />
                      <a href="tel:+44(0)3002774499" class="footer-nav__link">+ 44 (0) 300 277 44 99</a>
                    </li>

                    <li class="footer-nav__item">
                      <img src="@/assets/images/svg/icon-mail.svg" class="footer-nav__item-icon" />
                      <a href="mailto:" class="footer-nav__link">Email an enquiry</a>
                    </li>

                  </ul>

                </nav>

              </div>

              <div class="footer-primary__sub2">
                <h3>Our Locations</h3>
                Registered Office:<br>
                Address line 1<br>
                Address line 2<br>
                Address line 3<br>
                Address line 4<br>
                Address line 5<br>
                Address line 6<br>
              </div>

            </div>

            <div class="footer-primary__col footer-primary__col--2">

              <h2>Section heading 2</h2>
              <nav aria-label="Section heading 2 Navigation">
                <ol class="footer-nav">
                  <li class="footer-nav__item">
                    <a href="" class="footer-nav__link">Navigation item</a>
                  </li>
                  <li class="footer-nav__item">
                    <a href="" class="footer-nav__link">Navigation item</a>
                  </li>
                  <li class="footer-nav__item">
                    <a href="" class="footer-nav__link">Navigation item</a>
                  </li>
                  <li class="footer-nav__item">
                    <a href="" class="footer-nav__link">Navigation item</a>
                  </li>
                  <li class="footer-nav__item">
                    <a href="" class="footer-nav__link">Navigation item</a>
                  </li>
                </ol>
              </nav>

            </div>

            <div class="footer-primary__col footer-primary__col--3">

              <h2>Section heading 3</h2>
              <nav aria-label="Section heading 3 Navigation">
                <ol class="footer-nav footer-nav--2col">
                  <li class="footer-nav__item">
                    <a href="" class="footer-nav__link">Navigation item</a>
                  </li>
                  <li class="footer-nav__item">
                    <a href="" class="footer-nav__link">Navigation item</a>
                  </li>
                  <li class="footer-nav__item">
                    <a href="" class="footer-nav__link">Navigation item which may span multiple lines</a>
                  </li>
                  <li class="footer-nav__item">
                    <a href="" class="footer-nav__link">Navigation item</a>
                  </li>
                  <li class="footer-nav__item">
                    <a href="" class="footer-nav__link">Navigation item</a>
                  </li>
                  <li class="footer-nav__item">
                    <a href="" class="footer-nav__link">Navigation item which may span multiple lines</a>
                  </li>
                  <li class="footer-nav__item">
                    <a href="" class="footer-nav__link">Navigation item</a>
                  </li>
                  <li class="footer-nav__item">
                    <a href="" class="footer-nav__link">Navigation item</a>
                  </li>
                  <li class="footer-nav__item">
                    <a href="" class="footer-nav__link">Navigation item which may span multiple lines</a>
                  </li>
                  <li class="footer-nav__item">
                    <a href="" class="footer-nav__link">Navigation item</a>
                  </li>
                  <li class="footer-nav__item">
                    <a href="" class="footer-nav__link">Navigation item</a>
                  </li>
                  <li class="footer-nav__item">
                    <a href="" class="footer-nav__link">Navigation item</a>
                  </li>
                </ol>
              </nav>

            </div>

          </div>

          <div class="row">

            <TheSocialSharing />

          </div>

        </div>

      
        <div class="container">

          <div class="row">

            <div class="copyright-notice-wrapper">

              <p class="copyright-notice">&copy; Copyright Notice 2020</p>

            </div>

            <div class="footer-links-wrapper">

              <ul class="footer-links">
                <li class="footer-links__item"><a href="/contact-us/" class="footer-links__link">Accessibility</a></li>
                <li class="footer-links__item"><a href="/privacy-policy/" class="footer-links__link">Privacy Policy</a></li>
                <li class="footer-links__item"><a href="/site-map/" class="footer-links__link">Site Map</a></li>
                <li class="footer-links__item"><a href="/faqs/" class="footer-links__link">Cookies</a></li>
              </ul>

            </div>

          </div>

        </div>      
      
      </footer>

    </div>
</template>

<script>
import TheSocialSharing from '@/components/global/TheSocialSharing.vue';

export default {
  name: "TheFooter",
  components: {
    TheSocialSharing
  }

};
</script>


<style scoped lang="scss">
@import '../../assets/sass/utilities/_variables.scss';
@import '../../assets/sass/utilities/_mixins.scss';

footer {
  background-color: $grey-lighter;
}

.footer-primary {
  margin: 0 auto;
  padding: 3rem 0;
}

.footer-primary__col {
  margin: 0 0 2rem 0;
}

.footer-primary__col--1 {
  @include breakpoint(sm) {
    grid-column: 1 / 7;
  }

  @include breakpoint(lg) {
    grid-column: 1 / 5;
  }
}

.footer-primary__col--2 {
  @include breakpoint(sm) {
   grid-column: 7 / 13;
  }

  @include breakpoint(lg) {
    grid-column: 5 / 9;
  }
}

.footer-primary__col--3 {
  @include breakpoint(lg) {
    grid-column: 9 / 13;
  }
}

.footer-primary__sub1 {
  margin: 0 0 3rem 0;
}

.footer-primary__sub2 {
  margin: 0 0 1rem 0;
}

// footer nav lists
.footer-nav {
  margin: 0 auto;
  list-style: none;
}

.footer-nav__item {
  margin: 0 0 1rem 0;
  padding: 0;
  display: flex;
}

.footer-nav__item-icon {
  margin-right: 1rem;
}

.footer-nav__link {
  text-decoration: none;

  &:hover,
  &:focus {
    color: $color-link-hover;
    text-decoration: underline;
  }
}

.footer-nav--2col {
  column-count: 1;

  @include breakpoint(md) {
    column-count: 2;
  }

  .footer-nav__item {
    @include breakpoint(md) {
      padding: 0 2rem 0 0;
    }
  }

  .footer-nav__item-icon {
    margin-right: 1rem;
  }
}


.footer-secondary {
  margin: 0 auto;
  padding: 0 0 3rem 0;
}

.copyright-notice-wrapper {
  grid-column: 1 / 13;
  margin: 0 0 2rem 0;

  @include breakpoint(lg) {
    grid-column: 1 / 4;
    margin: 0;
  }
}

.footer-links-wrapper {
  grid-column: 1 / 13;

  @include breakpoint(lg) {
    grid-column: 4 / 13;
  }
}

.footer-links {
  margin: 0 auto;
  list-style: none;

  @include breakpoint(lg) {
    display: flex;
    justify-content: flex-end;
  }
}

.footer-links__item {
  margin: 0 1rem 1rem 1rem;
}

.footer-links__link {
  display: block;
  text-decoration: none;

  &:hover,
  &:focus {
    color: $color-link-hover;
    text-decoration: underline;
  }
}

</style>