document.addEventListener(
  "DOMContentLoaded",
  () => {

    /*
     * =====================================
     * MOBILE MENU
     * =====================================
     */

    const menuButton =
      document.querySelector(
        ".mobile-menu-button"
      );


    const nav =
      document.querySelector(
        ".nav-menu"
      );


    if (menuButton) {

      menuButton.addEventListener(
        "click",
        () => {

          nav.classList.toggle(
            "open"
          );

        }
      );

    }


    /*
     * =====================================
     * ACTIVE NAVIGATION
     * =====================================
     */

    const links =
      document.querySelectorAll(
        ".nav-menu a"
      );


    const sections = [
      ...document.querySelectorAll(
        "main section[id]"
      )
    ];


    const observer =
      new IntersectionObserver(

        (entries) => {

          entries.forEach(
            (entry) => {

              if (!entry.isIntersecting) {
                return;
              }


              links.forEach(
                (link) => {

                  const isActive =
                    link.getAttribute(
                      "href"
                    ) ===
                    `#${entry.target.id}`;


                  link.classList.toggle(
                    "active",
                    isActive
                  );

                }
              );

            }
          );

        },

        {
          rootMargin:
            "-35% 0px -55% 0px"
        }

      );


    sections.forEach(
      (section) => {

        observer.observe(
          section
        );

      }
    );


    /*
     * =====================================
     * REVEAL ANIMATION
     * =====================================
     */

    const revealTargets =
      document.querySelectorAll(
        ".reveal"
      );


    const revealObserver =
      new IntersectionObserver(

        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                entry.target
                  .classList
                  .add(
                    "visible"
                  );

              }

            }
          );

        },

        {
          threshold:
            0.12
        }

      );


    revealTargets.forEach(
      (element) => {

        revealObserver.observe(
          element
        );

      }
    );


    /*
     * =====================================
     * CLOSE MOBILE MENU
     * =====================================
     */

    links.forEach(
      (link) => {

        link.addEventListener(
          "click",
          () => {

            nav.classList.remove(
              "open"
            );

          }
        );

      }
    );


    /*
     * =====================================
     * VIDEO CONTROL
     *
     * 다른 영상 재생 시
     * 기존 영상은 자동 일시정지
     * =====================================
     */

    const videos =
      document.querySelectorAll(
        ".award-media video"
      );


    videos.forEach(
      (video) => {

        video.addEventListener(
          "play",
          () => {

            videos.forEach(
              (otherVideo) => {

                if (
                  otherVideo !== video
                ) {

                  otherVideo.pause();

                }

              }
            );

          }
        );

      }
    );

  }
);