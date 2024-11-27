import { NextResponse } from 'next/server';

export const dummyStoreInfo = {
  storeName: '대쉬버니',
  storePhone: '010-2081-0789',
  storeStatus: '오픈',
  storeAddress: '서울시 ',
  storeLogo:
    'https://cdn.discordapp.com/attachments/1084831811051454477/1309793371019022376/bafkreie3f7zomiabrb67fsqxujlzrvawpatq5aihfsjki3ltzcdsj4wt7y.jpg?ex=6742dfa2&is=67418e22&hm=e70e36792be02cd65053a18f0feca882ee3e4c57fdec971164bddf6bbdc29cfd&',
  bannerImage:
    'https://cdn.discordapp.com/attachments/1084831811051454477/1309900825627201616/output_3280796331.jpg?ex=674343b5&is=6741f235&hm=e44363eb91b79ec5360bcc50ec5a524696bab93bd69cf3e9458094beafba55ab&',
  storeDescription: '대쉬버니 온세상지점에 오신걸 환영합니다',
  ShortsUrl: 'https://might_be_Shorts.url',
};

export async function GET() {
  return Response.json(dummyStoreInfo);
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
