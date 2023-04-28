import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./comp/Header";
import Footer from "./comp/footer";
import CircleImage from "./comp/Circl";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-4 gap-8">
          <div className="bg-teal-300 rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-medium mb-4">Column 1</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor, leo vitae molestie tincidunt, erat ipsum vehicula libero,
              non convallis justo odio vel sapien.
            </p>
          </div>
          <div className="bg-teal-300 rounded-lg shadow-lg p-6 col-span-2">
            <h2 className="text-lg font-medium mb-4">Column 2</h2>
            <CircleImage url = "https://cdn.intra.42.fr/users/d4d754cbf571f0b52778dfedbd79de0f/mhaddaou.jpg" />
            
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white p-2 rounded-lg max-w-xs">
                <p>Hello!</p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="bg-gray-200 p-2 rounded-lg max-w-xs ">
                <p className="p-2">Hi there!</p>
              </div>
              <div className="bg-gray-200 p-2 rounded-lg max-w-xs ">
                <p className="p-2">Hi there!</p>
              </div>
            </div>
            <br/>
            <form
              // onSubmit={onSubmit}
              className="flex items-center border-t border-gray-300 py-4 px-6 "
            >
              <input
                type="text"
                placeholder="Type your message here"
                // value={value}
                // onChange={onChange}
                className="flex-1 border border-gray-400 rounded-lg px-4 py-2 mr-2"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-4 py-2"
              >
                Send
              </button>
            </form>
            {/* <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, leo vitae molestie tincidunt, erat ipsum vehicula libero, non convallis justo odio vel sapien.
          </p> */}
          </div>
          <div className="bg-teal-300 rounded-lg shadow-lg p-6">
            <h2 className="text-lg font-medium mb-4">Column 3</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor, leo vitae molestie tincidunt, erat ipsum vehicula libero,
              non convallis justo odio vel sapien.
            </p>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
