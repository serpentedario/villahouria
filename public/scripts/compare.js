function clamp(n, min, max) {
  return Math.min(max, Math.max(min, n));
}

function setupCompare(root) {
  const stage = root.querySelector("[data-compare-stage]");
  const beforeClip = root.querySelector("[data-before-clip]");
  const handle = root.querySelector("[data-compare-handle]");
  const afterImg = root.querySelector("[data-after-img]");
  const beforeImg = root.querySelector("[data-before-img]");
  const angleButtons = root.querySelectorAll("[data-angle]");

  if (!stage || !beforeClip || !handle) return;

  let isDragging = false;

  function setRatio(ratio) {
    const r = clamp(ratio, 0, 1);
    beforeClip.style.width = `${r * 100}%`;
    handle.style.left = `${r * 100}%`;
  }

  function ratioFromEvent(e) {
    const rect = stage.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    return (clientX - rect.left) / rect.width;
  }

  function onDown(e) {
    isDragging = true;
    setRatio(ratioFromEvent(e));
    stage.setPointerCapture?.(e.pointerId);
  }

  function onMove(e) {
    if (!isDragging) return;
    setRatio(ratioFromEvent(e));
  }

  function onUp() {
    isDragging = false;
  }

  stage.addEventListener("pointerdown", onDown);
  stage.addEventListener("pointermove", onMove);
  window.addEventListener("pointerup", onUp);

  stage.addEventListener("touchstart", onDown, { passive: true });
  stage.addEventListener("touchmove", onMove, { passive: true });
  stage.addEventListener("touchend", onUp, { passive: true });

  angleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = btn.getAttribute("data-angle");
      const before = btn.getAttribute("data-before");
      const after = btn.getAttribute("data-after");
      if (!before || !after) return;

      angleButtons.forEach((b) => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");

      if (beforeImg) beforeImg.src = before;
      if (afterImg) afterImg.src = after;

      root.setAttribute("data-active-angle", idx ?? "1");
    });
  });

  setRatio(0.5);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-compare]").forEach(setupCompare);
});

