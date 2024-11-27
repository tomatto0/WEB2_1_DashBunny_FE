import { NextResponse } from 'next/server';

export async function PATCH() {
  try {
    return NextResponse.json(
      { message: '임시휴무 업데이트 성공' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error update post:', error);
    return NextResponse.json(
      { message: '임시휴무 업데이트 실패' },
      { status: 500 },
    );
  }
}
