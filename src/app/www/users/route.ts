import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()

  const { password } = body

  if (password === '12345') {
    return NextResponse.json({ message: '유저 로그인' }, { status: 200 })
  }

  return NextResponse.json({ message: '비밀번호 확인해주세요' }, { status: 400 })
}
