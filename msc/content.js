document.addEventListener("mouseup", (e) => {
    if ([3, 4].includes(e.button)) {
      e.preventDefault();
    }
  });
  