import { HiArrowDown } from "react-icons/hi2";
import Navbar from "../../components/Navbar";
import { GoVideo } from "react-icons/go";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const HeroTwo = () => {
	return (
		<div className="h-screen w-full">
			<Navbar />
			<div className="h-[75vh] flex justify-center items-center">
				<h1 className="text-[120px]">OUR ADVANTAGES</h1>
			</div>
			<div className="w-full flex items-center justify-around h-[10vh] overflow-hidden">
				<div className="flex flex-col items-start">
					<div className="p-1 bg-[#FF9209] rounded-full "></div>
					<div>
						<p>Your Smile, Our Passion</p>
					</div>
				</div>

				<div className="flex items-center gap-4 cursor-pointer">
					<div className="p-8 border border-black rounded-full border-b-none mt-12">
						<HiArrowDown
							style={{ fontSize: "30px", paddingBottom: "10px" }}
						/>
					</div>
				</div>

				<div className="flex items-start flex-col gap-1">
					<div className="flex items-center gap-3">
						<button className="p-2 border border-[#FF9209] rounded-md">
							<GoVideo style={{ color: "#FF9209" }} />
						</button>
						<button className="p-3">
							<FaYoutube style={{ color: "#FF9209" }} />
						</button>
						<button className="p-3">
							<FaFacebook style={{ color: "#FF9209" }} />
						</button>
					</div>
					<div>
						<p>Best Start Up OF 2023</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroTwo;
