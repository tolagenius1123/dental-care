import Navbar from "../../components/Navbar";
import { GoVideo } from "react-icons/go";
import { FaFacebook, FaTooth, FaYoutube } from "react-icons/fa";
import { PiFlowerLight } from "react-icons/pi";
import { avatar1, avatar2, avatar3 } from "../../assets";

const HeroThree = () => {
	return (
		<div className="h-screen w-full">
			<Navbar />

			<div className="flex flex-col">
				<div className="px-20 pt-14 flex items-center justify-around">
					<h1 className="text-[80px]">REVOLUTIONIZING</h1>

					<div className="flex flex-col">
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
								<p>Modern Solutions,</p>
								<p>Timeless Smiles</p>
							</div>
						</div>
					</div>
				</div>

				<div className="px-28 flex items-center justify-around">
					<div className="flex flex-col">
						<div className="flex items-start flex-col gap-1">
							<div className="flex items-center">
								<div className="bg-[#F3F8FF] text-2xl text-[#FF9209] px-6 py-3 rounded-3xl">
									<p>ASSISTANCE</p>
								</div>
								<div className="bg-[#FF9209] border-2 border-[#FF9209] p-3 rounded-full">
									<FaTooth
										style={{
											color: "white",
											fontSize: "30px",
										}}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-center">
						<h1 className="text-[80px]">DENTAL </h1>
						<div className="flex items-center">
							<img
								src={avatar3}
								alt="avatar"
								className="h-[80px] w-[80px] rounded-full"
							/>
							<div className="bg-[#F3F8FF] text-2xl text-[#FF9209] p-3 rounded-full">
								<PiFlowerLight
									style={{
										color: "#FF9209",
										fontSize: "60px",
									}}
								/>
							</div>
						</div>
						<h1 className="text-[80px]">CARE</h1>
					</div>
				</div>
				<div className="px-28 flex items-center justify-around">
					<h1 className="text-[80px]">WITH TECHNOLOGY </h1>
					<div className="flex items-center">
						<img
							src={avatar3}
							alt="avatar"
							className="h-[50px] w-[50px] rounded-full"
						/>
						<img
							src={avatar2}
							alt="avatar"
							className="h-[50px] w-[50px] rounded-full"
						/>
						<img
							src={avatar1}
							alt="avatar"
							className="h-[50px] w-[50px] rounded-full"
						/>
					</div>
				</div>
				<div className="w-full flex items-center justify-around overflow-hidden">
					<div className="flex flex-col items-start">
						<div className="p-1 bg-[#FF9209] rounded-full "></div>
						<div>
							<p>Your Smile, Our Passion</p>
						</div>
					</div>

					<div className="flex items-center gap-4 cursor-pointer">
						<div className="pt-4 bg-[#FF9209] rounded-full h-[90px] w-[90px] text-center">
							<div className="text-white text-center">
								GET STARTED
							</div>
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

export default HeroThree;
