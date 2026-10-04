import "./button.css";

export function createButton({ label = "View the work" } = {}) {
  const button = document.createElement("button");

  button.type = "button";
  button.className = "rc-button rc-button--md";

  const icon = document.createElement("span");
  icon.className = "rc-button__icon";
  icon.setAttribute("aria-hidden", "true");

  const text = document.createElement("span");
  text.className = "rc-button__label";
  text.textContent = label;

  button.append(icon, text);

  return button;
}