import { NextResponse } from 'next/server';

export const dummyOrderInfo = {
  isTakeout: 'On',
  takeoutDiscount: 2000,
  minOrderAmount: 7000,
  deliveryTip: 2000,
};

export async function GET() {
  return Response.json(dummyOrderInfo);
}

// {
//   "isTakeout": "포장 여부 (On/Off)",
//   "takeoutDiscount": "포장 할인 금액",
//   "minOrderAmount": "최소 주문 금액",
//   "deliveryTip": "기본 배달 팁"
// }

export async function PUT() {
  try {
    return NextResponse.json(
      { message: '가게 주문정보 업데이트 성공' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error update post:', error);
    return NextResponse.json(
      { message: '가게 주문정보 업데이트 실패' },
      { status: 500 },
    );
  }
}
