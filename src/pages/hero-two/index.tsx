import { HiArrowDown } from "react-icons/hi2";
import Navbar from "../../components/Navbar";
import { GoVideo } from "react-icons/go";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { avatar1, avatar2, avatar3, avatar4 } from "../../assets";
import { IoSettingsOutline } from "react-icons/io5";

const HeroTwo = () => {
	const advantages = [
		{
			image: avatar1,
			advantage: "Advanced Technology",
		},
		{
			image: avatar2,
			advantage: "Quality Service",
		},
		{
			image: avatar3,
			advantage: "Experienced Team",
		},
		{
			image: avatar4,
			advantage: "Customer Satisfaction",
		},
	];

	return (
		<div className="h-screen w-full">
			<Navbar />
			<div>
				<div className="h-[75vh] flex justify-center items-center relative">
					<h1 className="text-[120px]">OUR ADVANTAGES</h1>
					{advantages.map((advantage) => (
						<div className="absolute" key={advantage.advantage}>
							<img
								src={advantage.image}
								alt="avatar"
								className="w-[250px] h-[280px] rounded-2xl"
							/>
							<div className="flex items-center relative bottom-20 pl-2">
								<div className="p-3 rounded-full bg-white">
									<IoSettingsOutline />
								</div>
								<div className="rounded-3xl p-2 bg-white">
									{advantage.advantage}
								</div>
							</div>
						</div>
					))}
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
								style={{
									fontSize: "30px",
									paddingBottom: "10px",
								}}
							/>
						</div>
					</div>

					<div className="flex items-start flex-col gap-1">
						<div className="flex items-center gap-6">
							<button className="p-1 border border-[#FF9209] rounded-md">
								<GoVideo style={{ color: "#FF9209" }} />
							</button>
							<button className="p-1 border border-[#FF9209] rounded-md">
								<FaYoutube style={{ color: "#FF9209" }} />
							</button>
							<button className="p-1 border border-[#FF9209] rounded-md">
								<FaFacebook style={{ color: "#FF9209" }} />
							</button>
						</div>
						<div>
							<p>Best Start Up OF 2023</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroTwo;
