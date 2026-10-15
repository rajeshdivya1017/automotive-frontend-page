

const preloader = document.getElementById("preloader");
const website = document.getElementById("website");
const percentage = document.getElementById("percentage");
const progressBar = document.getElementById("progressBar");

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const currentYear = document.getElementById("currentYear");

const duration = 3000;

let startTime = Date.now();
let navigationStarted = false;
let animationFrame = null;



function startPreloader() {
  if (!preloader || !website) return;

  if (animationFrame !== null) {
    cancelAnimationFrame(animationFrame);
  }

  preloader.classList.remove("hide");

  website.classList.remove("is-ready");
  website.style.opacity = "0";

  if (percentage) {
    percentage.textContent = "0%";
  }

  if (progressBar) {
    progressBar.style.width = "0%";
  }

  startTime = Date.now();

  function updateProgress() {
    const elapsed = Date.now() - startTime;

    const progress = Math.min(
      Math.floor((elapsed / duration) * 100),
      100
    );

    if (percentage) {
      percentage.textContent = progress + "%";
    }

    if (progressBar) {
      progressBar.style.width = progress + "%";
    }

    if (elapsed < duration) {
      animationFrame = requestAnimationFrame(updateProgress);
    } else {
      finishPreloader();
    }
  }

  animationFrame = requestAnimationFrame(updateProgress);
}



function finishPreloader() {
  if (!preloader || !website) return;

  preloader.classList.add("hide");

  website.style.opacity = "1";

  requestAnimationFrame(function () {
    website.classList.add("is-ready");
  });

  animationFrame = null;
}



function closeMobileMenu() {
  if (!menuToggle || !navMenu) return;

  menuToggle.classList.remove("open");
  navMenu.classList.remove("open");

  menuToggle.setAttribute("aria-expanded", "false");

  menuToggle.setAttribute(
    "aria-label",
    "Open navigation menu"
  );
}

if (menuToggle && navMenu) {
  menuToggle.setAttribute("aria-expanded", "false");

  menuToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.classList.toggle("open", isOpen);

    menuToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuToggle.setAttribute(
      "aria-label",
      isOpen
        ? "Close navigation menu"
        : "Open navigation menu"
    );
  });

  navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("click", function (event) {
    if (
      navMenu.classList.contains("open") &&
      !navMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 760) {
      closeMobileMenu();
    }
  });
}



document.querySelectorAll("a[href]").forEach(function (link) {
  link.addEventListener("click", function (event) {
    /* Allow browser shortcuts and new-tab behaviour */

    if (
      event.button !== 0 ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey ||
      this.target === "_blank" ||
      this.hasAttribute("download")
    ) {
      return;
    }

    const rawHref = this.getAttribute("href");

    if (
      !rawHref ||
      rawHref.startsWith("#") ||
      rawHref.startsWith("mailto:") ||
      rawHref.startsWith("tel:") ||
      rawHref.startsWith("javascript:")
    ) {
      return;
    }

    let target;

    try {
      target = new URL(rawHref, window.location.href);
    } catch (error) {
      return;
    }

    

    if (target.origin !== window.location.origin) {
      return;
    }

    

    if (target.href === window.location.href) {
      return;
    }

    

    closeMobileMenu();

    

    const currentPath = window.location.pathname.toLowerCase();

    if (currentPath.endsWith("/404.html")) {
      return;
    }

    

    if (!preloader || !website) {
      return;
    }

    

    if (navigationStarted) {
      event.preventDefault();
      return;
    }

    event.preventDefault();

    navigationStarted = true;

    try {
      sessionStorage.setItem(
        "stacklyTransitionDone",
        "yes"
      );
    } catch (error) {
      
    }

    startPreloader();

    window.setTimeout(function () {
      window.location.href = target.href;
    }, duration);
  });
});


if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}



let transitionDone = false;

try {
  transitionDone =
    sessionStorage.getItem("stacklyTransitionDone") === "yes";

  if (transitionDone) {
    sessionStorage.removeItem("stacklyTransitionDone");
  }
} catch (error) {
  transitionDone = false;
}

if (preloader && website) {
  if (transitionDone) {
    preloader.classList.add("hide");

    website.style.opacity = "1";

    requestAnimationFrame(function () {
      website.classList.add("is-ready");
    });
  } else {
    startPreloader();
  }
}



window.addEventListener("pageshow", function () {
  /*
    Reset the navigation flag whenever the browser
    displays or restores this page.

    This fixes the case where the user returns
    from 404.html using the BACK button.
  */

  navigationStarted = false;
});



window.addEventListener("pagehide", function () {
  navigationStarted = false;
});