'use client';

import { useUserStore } from '../../store/useUserStore';

export default function CalendarPage() {
  const user = useUserStore((state) => state.user);

  if (!user) {
    return <p>ユーザー情報がありません</p>;
  }

  return (
    <main className="bg-gradient-to-r from-lime-100 to-lime-200 h-screen flex flex-col items-center justify-center">
        <div className="text-center">
            <h1>カレンダー</h1>
            <p>ID: {user.id}</p>
            <p>名前: {user.name}</p>
        </div>
    </main>
  );
}
