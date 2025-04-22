export const useRipple = () => {
  function createRipple(event: MouseEvent, color?: string) {
    const button = event.currentTarget as HTMLElement;
    if (!button) return;

    const ripple: HTMLElement = document.createElement("span");
    const rect: DOMRect = button.getBoundingClientRect();
    const size: number = Math.max(button.offsetWidth, button.offsetHeight);
    const x: number = event.clientX - rect.left - size / 2;
    const y: number = event.clientY - rect.top - size / 2;

    if (color) {
      ripple.style.backgroundColor = color;
    }

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add("ripple");

    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  }

  return {
    createRipple,
  };
};
