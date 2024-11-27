import { NextResponse } from 'next/server';

export const dummyOperationInfo = {
  openingHours: '주중 9시~ 밤 12시',
  breakTime: '주중 3 ~ 4시는 가게 준비시간입니다.',
  holidayDays: '주말, 공휴일, 임시휴일 쉽니다.',
  holidayNotice: '건강상 이유로 인해 12월 25일 휴가입니다.',
  pauseStartTime: '13:10',
  pauseEndTime: '17:00'
};

export async function GET() {
  return Response.json(dummyOperationInfo);
}

// {
//   "storeName": "가게 이름",
//   "storePhone": "가게 전화번호",
//   "storeStatus": "가게 상태 (오픈/중지/마감 등)",
//   "storeAddress": "가게 주소",
//   "storeLogo": "매장 로고 URL",
//   "bannerImage": "배너 이미지 URL",
//   "storeDescription": "가게 소개",
//   "ShortsUrl": "가게 홍보 쇼츠 URL"
// }

export async function PATCH() {
  try {
    return NextResponse.json(
      { message: '게시글 업데이트 성공' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error update post:', error);
    return NextResponse.json(
      { message: '게시글 업데이트 실패' },
      { status: 500 },
    );
  }
}
