"use client";

import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="content-center">
        <a className="btn btn-link p-0">
          <Image src="/bill.png" width={25} height={0} alt="Harnbill logo" />
          <span className="text-lg">Harnbill</span>
        </a>
      </div>
      <div className="content-center">
        <ul className="menu menu-horizontal p-0 space-x-2">
          <li
            role="button"
            className="border rounded-lg"
          >
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
          <li className="w-xl border rounded-lg place-content-center">
            <a class="fa-solid fa-share-from-square"></a>
          </li>
        </ul>
      </div>
    </>
  );
}
