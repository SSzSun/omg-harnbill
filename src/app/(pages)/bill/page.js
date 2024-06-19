'use client';
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
          <div role="tablist" className="tabs tabs-bordered">
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="รายชื่อ"
              onChange={() => console.log("click 1")}
              defaultChecked
            />
            <div role="tabpanel" className="tab-content p-10">Tab content 1</div>
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="รายการ"
              onChange={() => console.log("click 2")}
            />
            <div role="tabpanel" className="tab-content p-10">Tab content 2</div>
            <input
              type="radio"
              name="my_tabs_1"
              role="tab"
              className="tab"
              aria-label="สรุปยอด"
              onChange={() => console.log("click 3")}
            />
            <div role="tabpanel" className="tab-content p-10">Tab content 3</div>
          </div>
        </div>
      {/* <!-- ส่วนท้าย --> */}
      <div className="flex text-xs text-gray-500 justify-center w-full max-w-xl px-6 py-4">
        <Footer />
      </div>
    </div>
  );
}
