import Image from "next/image";

export default function Home() {
  return (
    <>
    <center>
      <div className="flex justify-between bg-red-500">
        <div className="flex space-x-2 bg-red-200">
          <div className="bg-blue-200">
            <Image
              src="/bill.png"
              width={50}
              height={50}
              alt="Harnbill logo"
            />
          </div>
          <div className="flex items-center bg-green-200">Harnbill</div>
        </div>
        <div className="flex space-x-2 bg-yellow-200">
          <div className="bg-blue-200"><button class="btn btn-outline">TH</button></div>
          <div className="bg-green-200"><button class="btn btn-outline ">Default</button></div>
        </div>
      </div>
      <div className="bg-purple-200">
        <div className="bg-blue-200">หารค่าบิล</div>
        <div className="bg-green-200">หารได้ทุกอย่าง</div>
        <div className="bg-green-200">สร้างบิล</div>
      </div>
      </center>
    </>
  );
}
