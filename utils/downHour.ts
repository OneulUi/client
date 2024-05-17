export default function downHour(time: string): string {
  const hours = parseInt(time.slice(0, 2), 10);
  return hours.toString().padStart(2, "0") + "00";
}
