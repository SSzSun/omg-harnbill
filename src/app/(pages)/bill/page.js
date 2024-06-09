import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col place-items-center">
      <div className="flex justify-between w-full max-w-xl px-6 py-4 bg-white">
        <div className="content-center">
          <a className="btn btn-link p-0">
            <Image src="/bill.png" width={25} height={0} alt="Harnbill logo" />
            <span className="text-lg">Harnbill</span>
          </a>
        </div>
        <div className="content-center">
          <ul className="menu menu-horizontal p-0">
            <li>
              <details>
                <summary>TH</summary>
                <ul className="bg-base-100 rounded-t-none">
                  <li>
                    <a>TH</a>
                  </li>
                  <li>
                    <a>EN</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="w-xl">
              <a class="fa-solid fa-share-from-square"></a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- ส่วนเนื้อหา --> */}
      <div className="flex flex-col place-items-center h-screen w-full max-w-xl px-6 bg-white rounded-b-lg">
        {/* <!-- ส่วนเนื้อหาย่อย --> */}
        <div className="w-full p-4 -mx-4 bg-detail rounded-xl">
          <h1 className="text-4xl font-bold my-5">หารไม่เท่ากันได้ง่ายๆ 🤑</h1>
          <div className="mb-5">
            หารตัง หารค่าเหล้า หารค่าทริป หารบิล จบในที่เดียว
          </div>
          <button className="bg-[#3F72AF] text-white p-1 w-full rounded-lg">
            <span>สร้างบิล ฟรี</span>
          </button>
          <div className="my-4 text-center">
            <a>วิธีใช้งาน</a>
          </div>
          <div className="px-6">
            <ul className="list-disc">
              <li>สร้างบิล</li>
              <li>เพิ่มรายชื่อ</li>
              <li>เพิ่มรายการค่าใช้จ่าย</li>
              <li>ดูสรุปยอด พร้อมวิธีเคลียร์ค่าใช้จ่าย</li>
            </ul>
          </div>
        </div>
        <div className="my-4 text-lg w-full text-center">ติดต่อทีมงาน</div>
        <div className="w-full text-center px-4 pb-4 relative ">
          <a href="https://www.facebook.com">
            <button className="btn btn-ghost btn-sm px-4 py-1">
              <span className="text-base">Harnbill</span>
            </button>
          </a>
          <a href="mailto:jaruphat.kp@gmail.com">
            <button className="btn btn-ghost btn-sm px-4 py-1">
              <span className="text-base">jaruphat.kp@gmail.com</span>
            </button>
          </a>
        </div>
      </div>
      {/* <!-- ส่วนท้าย --> */}
      <div className="flex text-xs text-gray-500 justify-center w-full max-w-xl px-6 py-4">
        <p>
          © 2024 Harnbill,{" "}
          <a
            href="https://www.facebook.com"
          >
            Facebook
          </a>
          ,{" "}
          <a href="mailto:jaruphat.kp@gmail.com" >
            Email
          </a>
        </p>
      </div>
    </div>
  );
}
