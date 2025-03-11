export default function TopPage() {
    return (
        <div>
            <header className="flex justify-between mt-5">
                <div>
                    <p>スケジュール管理</p>
                </div>
                <nav>
                    <ul className="flex gap-5">
                        <li>利用説明</li>
                        <li>ログイン</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}