import React from 'react';
import { WarrantyEntry } from '../types';

interface TableProps {
  data: WarrantyEntry[];
}

export const Table: React.FC<TableProps> = ({ data }) => {
    return (
      <div className="bg-white rounded-sm shadow-sm border border-gray-200 min-h-[500px] flex flex-col">
        <div className="overflow-x-auto flex-1 pb-4 w-full">
          <table className="min-w-full divide-y divide-gray-200 text-xs text-gray-600">
            <thead className="bg-[#f7f8fa]">
              <tr>
                <th className="px-4 py-3 text-center font-medium whitespace-nowrap border-r border-gray-100 w-16">序号</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">项目id</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">项目名称</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">质保期</th>
                <th className="px-4 py-3 text-center font-medium whitespace-nowrap w-32">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.length > 0 ? (
                data.map((row, index) => (
                  <tr key={row.id} className={`${index % 2 !== 0 ? 'bg-[#e6f7ff]' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap text-center">{row.id}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.projectId}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.projectName}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.warrantyPeriod}</td>
                    <td className="px-4 py-3 text-center whitespace-nowrap">
                        <div className="flex items-center justify-center gap-2">
                          <button className="text-[#1890FF] hover:text-[#096DD9] text-xs">修改</button>
                          <button className="text-[#F5222D] hover:text-[#CF1322] text-xs">删除</button>
                        </div>
                    </td>
                  </tr>
                ))
              ) : (
                  <tr>
                      <td colSpan={5} className="h-96 text-center">
                          <div className="flex flex-col items-center justify-center h-full text-gray-400">
                              <span>暂无数据</span>
                          </div>
                      </td>
                  </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
};