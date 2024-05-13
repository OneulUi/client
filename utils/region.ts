export function getFullRegion(reg: string): string {
  const regionObj: Record<string, string> = {
    서울: "서울특별시",
    경기: "경기도",
    부산: "부산광역시",
    대구: "대구광역시",
    인천: "인천광역시",
    광주: "광주광역시",
    대전: "대전광역시",
    울산: "울산광역시",
    충북: "충청북도",
    충남: "충청남도",
    전북특별자치도: "전라북도",
    전남: "전라남도",
    경북: "경상북도",
    경남: "경상남도",
    제주: "제주특별자치도",
    강원: "강원특별자치도",
  };

  return regionObj[reg] || reg;
}
