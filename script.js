window.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("keydown", (e) => {
    const key = e.key

    document.querySelectorAll("[aria-keyshortcuts]").forEach((elem) => {
      const shortcut = elem.getAttribute("aria-keyshortcuts")
      if (shortcut && key === shortcut) {
        elem.click()
      }
    })
  })
})