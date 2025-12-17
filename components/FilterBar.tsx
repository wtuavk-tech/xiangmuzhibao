import React from 'react';

export const FilterBar: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-sm border border-gray-200 mb-3 shadow-sm">
      <div className="flex items-center gap-4 text-sm text-gray-600 flex-wrap">
            
            {/* 项目id */}
            <div className="flex items-center gap-2">
                <label className="whitespace-nowrap font-medium">项目id</label>
                <input 
                    type="text" 
                    placeholder="请输入内容" 
                    className="border border-gray-300 rounded px-3 py-1.5 w-40 focus:outline-none focus:border-blue-500 placeholder-gray-400 text-xs"
                />
            </div>

             {/* 项目名称 */}
             <div className="flex items-center gap-2">
                <label className="whitespace-nowrap font-medium">项目名称</label>
                <input 
                    type="text" 
                    placeholder="请输入内容" 
                    className="border border-gray-300 rounded px-3 py-1.5 w-40 focus:outline-none focus:border-blue-500 placeholder-gray-400 text-xs"
                />
            </div>

            {/* 质保期 */}
            <div className="flex items-center gap-2">
                <label className="whitespace-nowrap font-medium">质保期</label>
                <input 
                    type="text" 
                    placeholder="请输入内容" 
                    className="border border-gray-300 rounded px-3 py-1.5 w-40 focus:outline-none focus:border-blue-500 placeholder-gray-400 text-xs"
                />
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 ml-4">
                <button className="bg-[#1890FF] hover:bg-[#096DD9] text-white px-5 py-1.5 rounded flex items-center justify-center transition-colors text-xs whitespace-nowrap shadow-sm">
                    搜索
                </button>
                <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-600 px-5 py-1.5 rounded flex items-center justify-center transition-colors text-xs whitespace-nowrap shadow-sm">
                    重置
                </button>
            </div>
      </div>
    </div>
  );
};