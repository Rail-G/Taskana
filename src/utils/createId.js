export default function createId() {
  return Math.random().toString(32).substring(2, 10);
}
