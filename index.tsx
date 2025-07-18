"use client";

import { useState } from "react";

interface BusinessData {
  no: number;
  name: string;
  region: string;
  company: string;
  gridNumber: string;
  marketNumber: string;
  contact: string;
  status: string;
}

const initialData: BusinessData[] = [
  {
    no: 1,
    name: "진남",
    region: "영양",
    company: "Abc 공업사",
    gridNumber: "01-3222-0006565",
    marketNumber: "061-322-0005",
    contact: "010-123-4567",
    status: "특정",
  },
  {
    no: 2,
    name: "진남",
    region: "이천",
    company: "전북특별자치도청",
    gridNumber: "01-3222-0006565",
    marketNumber: "061-322-0005",
    contact: "010-123-4567",
    status: "대기",
  },
  {
    no: 3,
    name: "진남",
    region: "사천",
    company: "한국모터스",
    gridNumber: "01-3222-0006565",
    marketNumber: "061-322-0005",
    contact: "010-123-4567",
    status: "특정",
  },
  {
    no: 4,
    name: "충북",
    region: "인동",
    company: "드기가라이징이즈",
    gridNumber: "01-3222-0006565",
    marketNumber: "061-322-0005",
    contact: "010-123-4567",
    status: "대기",
  },
  {
    no: 5,
    name: "경남",
    region: "창원",
    company: "KARIF 기업그룹스",
    gridNumber: "01-3222-0006565",
    marketNumber: "061-322-0005",
    contact: "010-123-4567",
    status: "특정",
  },
  {
    no: 6,
    name: "진남",
    region: "영양",
    company: "Abc 공업사",
    gridNumber: "01-3222-0006565",
    marketNumber: "061-322-0005",
    contact: "010-123-4567",
    status: "대기",
  },
  {
    no: 7,
    name: "진남",
    region: "익산",
    company: "전북특별자치도청",
    gridNumber: "01-3222-0006565",
    marketNumber: "061-322-0005",
    contact: "010-123-4567",
    status: "대기",
  },
  {
    no: 8,
    name: "진남",
    region: "사천",
    company: "한국모터스",
    gridNumber: "01-3222-0006565",
    marketNumber: "061-322-0005",
    contact: "010-123-4567",
    status: "대기",
  },
  {
    no: 9,
    name: "경남",
    region: "인동",
    company: "기가라이징이즈스",
    gridNumber: "01-3222-0006565",
    marketNumber: "061-322-0005",
    contact: "010-123-4567",
    status: "특정",
  },
  {
    no: 10,
    name: "충북",
    region: "창원",
    company: "KARIF 기업그룹스",
    gridNumber: "01-3222-0006565",
    marketNumber: "061-322-0005",
    contact: "010-123-4567",
    status: "특정",
  },
];

export default function BusinessTable() {
  const [data, setData] = useState<BusinessData[]>(initialData);

  const handleStatusChange = (index: number, newStatus: string) => {
    const updatedData = [...data];
    updatedData[index].status = newStatus;
    setData(updatedData);
  };

  return (
    <div className="p-5 bg-gray-50 font-sans">
      {/* Table Header */}
      <div className="mb-5">
        <h2 className="text-base font-bold mb-1 text-gray-800">
          고용수 성원현황 및 현황
        </h2>
        <p className="text-xs text-gray-600 m-0">
          1기 - 학급의 근로자 모집공고 관리(교육수업료, 특별)
        </p>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white border border-gray-300 text-xs">
          <thead>
            <tr>
              <th className="bg-gray-100 border border-gray-300 px-3 py-2 text-center font-normal text-gray-800 whitespace-nowrap">
                No
              </th>
              <th className="bg-gray-100 border border-gray-300 px-3 py-2 text-center font-normal text-gray-800 whitespace-nowrap">
                초명
              </th>
              <th className="bg-gray-100 border border-gray-300 px-3 py-2 text-center font-normal text-gray-800 whitespace-nowrap">
                지역
              </th>
              <th className="bg-gray-100 border border-gray-300 px-3 py-2 text-center font-normal text-gray-800 whitespace-nowrap">
                업체명
              </th>
              <th className="bg-gray-100 border border-gray-300 px-3 py-2 text-center font-normal text-gray-800 whitespace-nowrap">
                그리디시장 번호
              </th>
              <th className="bg-gray-100 border border-gray-300 px-3 py-2 text-center font-normal text-gray-800 whitespace-nowrap">
                시장명 업체번호
              </th>
              <th className="bg-gray-100 border border-gray-300 px-3 py-2 text-center font-normal text-gray-800 whitespace-nowrap">
                대표자 연락처
              </th>
              <th className="bg-gray-100 border border-gray-300 px-3 py-2 text-center font-normal text-gray-800 whitespace-nowrap">
                학점상태
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.no}
                className={`hover:bg-blue-50 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="border border-gray-300 px-3 py-2 text-center text-gray-800 whitespace-nowrap">
                  {item.no}
                </td>
                <td className="border border-gray-300 px-3 py-2 text-center text-gray-800 whitespace-nowrap">
                  {item.name}
                </td>
                <td className="border border-gray-300 px-3 py-2 text-center text-gray-800 whitespace-nowrap">
                  {item.region}
                </td>
                <td className="border border-gray-300 px-3 py-2 text-center text-gray-800 whitespace-nowrap">
                  {item.company}
                </td>
                <td className="border border-gray-300 px-3 py-2 text-center text-gray-800 whitespace-nowrap">
                  {item.gridNumber}
                </td>
                <td className="border border-gray-300 px-3 py-2 text-center text-gray-800 whitespace-nowrap">
                  {item.marketNumber}
                </td>
                <td className="border border-gray-300 px-3 py-2 text-center text-gray-800 whitespace-nowrap">
                  {item.contact}
                </td>
                <td className="border border-gray-300 px-3 py-2 text-center text-gray-800 whitespace-nowrap">
                  <select
                    value={item.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                    className="w-full px-2 py-1 border border-gray-300 bg-white text-xs text-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e')] bg-no-repeat bg-[right_8px_center] bg-[length:12px] pr-7"
                  >
                    <option value="특정">특정</option>
                    <option value="대기">대기</option>
                    <option value="완료">완료</option>
                    <option value="취소">취소</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
