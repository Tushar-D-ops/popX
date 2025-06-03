
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="min-h-screen flex flex-col justify-end p-6 bg-gray-50">
      <div>
        <p className="text-3xl font-semibold mb-6">
          Welcome to PopX
        </p>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="flex flex-col gap-3">
          <Link
            to="/signup"
            className="bg-purple-600 text-white py-2 rounded text-center"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="bg-purple-200 text-purple-900 font-semibold py-2 rounded text-center"
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
