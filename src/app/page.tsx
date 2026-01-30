'use client';

import { useState } from 'react';

export default function Calculator() {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const calculateSum = () => {
    setError('');
    setResult(null);
    
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    
    if (isNaN(n1) || isNaN(n2)) {
      setError('请输入有效的数字');
      return;
    }
    
    const sum = n1 + n2;
    setResult(sum);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">加法计算器</h1>
        <p className="text-gray-600 text-center mb-8">输入两个数字计算它们的和</p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="num1">
              第一个数字
            </label>
            <input
              id="num1"
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="输入第一个数字"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="num2">
              第二个数字
            </label>
            <input
              id="num2"
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="输入第二个数字"
            />
          </div>
          
          <button
            onClick={calculateSum}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-[1.02]"
          >
            计算加法
          </button>
          
          {error && (
            <div className="text-red-500 text-center py-2">
              {error}
            </div>
          )}
          
          {result !== null && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
              <p className="text-gray-700">结果:</p>
              <p className="text-2xl font-bold text-green-700">{num1} + {num2} = {result}</p>
            </div>
          )}
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>一个简单的加法计算器</p>
        </div>
      </div>
    </div>
  );
}