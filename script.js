function smoothScroll(targetId) {
  const target = document.querySelector(targetId);
  if (!target) return;

  const headerHeight = document.querySelector("header").offsetHeight; // Dynamically calculate header height
  const targetPosition =
    target.getBoundingClientRect().top + window.scrollY - headerHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
}
