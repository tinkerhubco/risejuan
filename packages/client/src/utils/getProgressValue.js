export function getProgressValue({ current, target }) {
  if (current <= 0) {
    return 0;
  }

  if (target < current) {
    return 100;
  }

  return (current / target) * 100;
}
