const colors = ["#b33a3a", "#cc5200", "#006600"];

function SelectPriority(priority) {
  const level = ["high", "medium", "low"];
  return { level: level[priority - 1], color: colors[priority - 1] };
}

export default SelectPriority;
