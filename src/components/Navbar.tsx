import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaTooth } from "react-icons/fa";

const Navbar = () => {
	return (
		<div className=" w-full flex items-center justify-around py-4">
			<div className="flex items-center">
				<button className="py-2 px-6 rounded-3xl border border-black">
					Menu
				</button>
				<button className="p-3 rounded-full border border-black">
					<HiOutlineMenuAlt2 />
				</button>
			</div>

			<div className="flex items-center gap-4 cursor-pointer">
				<div className="bg-[#FF9209] border-2 border-[#FF9209] p-3 rounded-full">
					<FaTooth style={{ color: "white", fontSize: "20px" }} />
				</div>
				<p className="text-xl font-semibold">DENTYTECH</p>
			</div>

			<div className="flex items-center">
				<button className=" text-black px-6 py-2 rounded-3xl border border-black">
					<p>Log In</p>
				</button>
				<button className="bg-[#FF9209]  text-white px-6 py-2 rounded-3xl">
					<p>Sign Up</p>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
