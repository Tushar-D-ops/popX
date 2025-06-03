import React from 'react';
import { Camera } from 'lucide-react'; // Optional: install lucide-react or use an <svg>

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
      <div className="bg-white p-4 rounded shadow flex gap-4 flex-col">
        <div className="flex gap-4 items-start">
          <div className="relative w-16 h-16">
            <img
              src="https://i.pravatar.cc/80"
              alt="avatar"
              className="rounded-full w-16 h-16 object-cover"
            />
            <button
              className="absolute bottom-0 right-0 bg-purple-600 text-white p-1 rounded-full shadow hover:bg-purple-700"
              title="Change Profile Picture"
            >
              <Camera size={14} />
              {/* If not using lucide-react, you can replace this with an SVG icon */}
            </button>
          </div>
          <div>
            <h3 className="font-bold text-lg">Marry Doe</h3>
            <p className="text-gray-500 mb-3">Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor
          Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
