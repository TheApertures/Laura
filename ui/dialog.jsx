import { useState } from 'react';

export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {children}
        <button className="mt-4 text-sm text-gray-500 hover:text-gray-700" onClick={() => onOpenChange(false)}>
          Close
        </button>
      </div>
    </div>
  );
}