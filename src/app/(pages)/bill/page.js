import Header from "@/components/header";
import Footer from "@/components/folter";
// import  from "@/components/folters";

export default function Home() {
  return (
    <div className="flex flex-col place-items-center">
      <div className="flex justify-between w-full max-w-xl px-6 py-4 bg-white">
        <Header />
      </div>
      {/* <!-- ส่วนเนื้อหา --> */}
      <div className="flex flex-col place-items-center h-screen w-full max-w-xl px-6 bg-white rounded-b-lg">
        {/* <!-- ส่วนเนื้อหาย่อย --> */}
        <div className="flex flex-row text-center w-full">
          <div className="basis-1/4">
            <div className="">รายการ</div>
            <div>
              <span className="">0</span>
            </div>
          </div>
          <div className="basis-1/2">
            <div className="">ราคารวม</div>
            <div>
              <span className="">0</span>
            </div>
          </div>
          <div className="basis-1/4">
            <div className="">คน</div>
            <div>
              <span className="">0</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ส่วนท้าย --> */}
      <div className="flex text-xs text-gray-500 justify-center w-full max-w-xl px-6 py-4">
        <Footer />
      </div>
    </div>
  );
}
