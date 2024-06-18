import { NextRequest } from 'next/server';
import { updateSession } from './lib';

// 애플리케이션 모든 경로에서 실행된다.
export async function middleware(request: NextRequest) {
  // updateSession() 함수 호출
  return await updateSession(request);
}
