import  NotLoginLayout  from "../templates/NotLoginLayout"
import  PrimaryBtn  from "../atoms/PrimaryBtn"

export default function TopPage(){
    return (
        <NotLoginLayout>
            <div className="text-center">
                <h1 className="logo text-7xl">スケジュール管理APP</h1>
                <p className="text-5xl pt-[10vh]">
                    スケジュールを管理します。
                </p>
                <div className="pt-[20vh]">
                    <PrimaryBtn>ログイン</PrimaryBtn>
                </div>
            </div>
        </NotLoginLayout>
    );
};
