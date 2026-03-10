import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export const Card = () => {
  const userContext = useContext(UserContext);
  const [inputValue, setInputValue] = useState<string>("");
  const navigate = useNavigate();

  if (!userContext) {
    throw new Error(
      "UserContext is undefined. Make sure to wrap the component with UserProvider.",
    );
  }

  const { setUsername } = userContext;

  const handleEnter = () => {
    setUsername(inputValue);
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6 w-125">
        <h2 className="text-xl font-bold text-black mb-2">
          Welcome to CodeLeap network!
        </h2>

        <p className="text-gray-600 mb-3">Please enter your username</p>

        <input
          type="text"
          placeholder="Username"
          className="w-full border border-gray-300 rounded-md p-2 text-black mb-4 outline-none focus:border-blue-400"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <div className="flex justify-end">
          <button
            disabled={!inputValue.trim()}
            className="bg-[#7695EC] disabled:bg-gray-300 disabled:cursor-auto text-white font-semibold px-6 py-2 mt-1 rounded-md cursor-pointer hover:bg-[#3966e0]"
            onClick={handleEnter}
          >
            ENTER
          </button>
        </div>
      </div>
    </div>
  );
};
