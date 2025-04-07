import Button from './../../Components/Buttons/Button';
import { IconLeftArrow } from '../../Assests/Icons';
import React from 'react';
import Input from '../../Components/Input';

const Login: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" role="dialog" aria-modal="true">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <button className="text-xl font-bold mb-4"><IconLeftArrow/></button>
        <div className="text-center">
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16">
                <img
                  alt="Blinkit Image"
                  src="https://cdn.grofers.com/layout-engine/2023-11/app_logo.svg"
                  loading="lazy"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <div className="font-semibold text-gray-800 mb-2">
              India's last minute app
            </div>
            <div className="font-semibold text-gray-600">
              Log in or Sign up
            </div>
          </div>

          <form className="space-y-1">
              <Input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                type="tel"
                maxLength={10}
                placeholder="Enter mobile number"
              />
            <Button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-md transition"
              name='Continue'
            />
          </form>

          <div className="text-sm text-gray-600 mt-4">
            <span>By continuing, you agree to our&nbsp;</span>
            <a
              href="/terms"
              target="_blank"
              className="text-yellow-600 hover:underline"
            >
              Terms of service
            </a>
            <span>&nbsp;&amp;&nbsp;</span>
            <a
              href="/privacy"
              target="_blank"
              className="text-yellow-600 hover:underline"
            >
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
