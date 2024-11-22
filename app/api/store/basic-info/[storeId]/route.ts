export const dummyStoreInfo = 
  {
    "storeName": "가게 이름",
    "storePhone": "가게 전화번호",
    "storeStatus": "가게 상태 (오픈/중지/마감 등)",
    "storeAddress": "가게 주소",
    "storeLogo": "매장 로고 URL",
    "bannerImage": "배너 이미지 URL",
    "storeDescription": "가게 소개",
    "ShortsUrl": "가게 홍보 쇼츠 URL"
  }


export async function GET() {
  return Response.json(dummyStoreInfo)
}