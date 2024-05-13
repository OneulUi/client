// 온도에 따른 옷차림 워딩 로직
export const wording = (value: number) => {
  if (value >= 28) return "무더운 한여름 온도입니다.";
  else if (value < 28 && value >= 23) return "더운 여름 온도입니다.";
  else if (value < 23 && value >= 20) return "더운 초여름 온도입니다.";
  else if (value < 20 && value >= 17) return "따뜻한 봄 온도입니다.";
  else if (value < 17 && value >= 12) return "청량한 간절기 온도입니다.";
  else if (value < 12 && value >= 9) return "서늘한 가을 온도입니다.";
  else if (value < 9 && value >= 5) return "쌀쌀한 늦가을 온도입니다.";
  else if (value < 5) return "기온이 낮은 겨울 온도입니다.";
};
