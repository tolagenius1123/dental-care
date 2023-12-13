import { PiFlowerLight } from "react-icons/pi";
import Navbar from "../../components/Navbar";
import { GoVideo } from "react-icons/go";
import { FaFacebook, FaYoutube, FaRegHeart } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { avatar1, avatar2 } from "../../assets";
import { motion } from "framer-motion";

const HeroFour = () => {
	return (
		<div className="h-screen w-full relative">
			<Navbar />
			<div className="w-full flex">
				<div className="w-[60%] pl-28 flex flex-col gap-6">
					<motion.div
						className="flex mt-10 items-center gap-1"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<div className="bg-[#F3F8FF] text-2xl text-[#FF9209] p-3 rounded-full">
							<PiFlowerLight
								style={{
									color: "#FF9209",
									fontSize: "30px",
								}}
							/>
						</div>
						<div className="bg-[#F3F8FF] text-2xl text-[#FF9209] p-3 rounded-full">
							<PiFlowerLight
								style={{
									color: "#FF9209",
									fontSize: "30px",
								}}
							/>
						</div>
						<div className="bg-[#F3F8FF] text-2xl text-[#FF9209] p-3 rounded-full">
							<PiFlowerLight
								style={{
									color: "#FF9209",
									fontSize: "30px",
								}}
							/>
						</div>
					</motion.div>

					<motion.div
						className="flex flex-col"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<p className="text-[50px] font-bold">EXPLORE OUR</p>
						<p className="text-[50px] font-bold">SERVICE, MAKE</p>
						<p className="text-[50px] font-bold">
							YOUR SMILES SHINE
						</p>
					</motion.div>
					<motion.div
						className="flex items-center gap-3"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<button className="bg-[#FF9209]  text-white px-6 py-2 rounded-3xl">
							<p>Get The App</p>
						</button>
						<button className=" text-black px-6 py-2 rounded-3xl border border-black">
							<p>Meet The Team</p>
						</button>
					</motion.div>

					<div className="w-full flex items-center justify-between overflow-hidden">
						<motion.div className="flex flex-col items-start">
							<div className="p-1 bg-[#FF9209] rounded-full "></div>
							<div>
								<p>Your Smile, Our Passion</p>
							</div>
						</motion.div>

						<motion.div
							className="flex items-start flex-col gap-1"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							variants={{
								hidden: { opacity: 0, y: 50 },
								visible: { opacity: 1, y: 0 },
							}}
						>
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
						</motion.div>
					</div>
				</div>
				<div className="w-[40%] relative flex flex-wrap gap-6 pl-10 overflow-hidden">
					<div className="">
						<img
							src={avatar2}
							alt="avatar"
							className="w-[220px] h-[280px] rounded-2xl"
						/>
						<div className="flex items-center gap-1 relative bottom-64 left-32">
							<div className="bg-white rounded-full p-3">
								<FaRegHeart />
							</div>
							<div className="bg-white rounded-full p-3">
								<MdArrowOutward />
							</div>
						</div>
						<div className="flex items-center relative bottom-28 justify-center">
							<div className="rounded-3xl p-2 border border-white text-white">
								Dental Health Records
							</div>
						</div>
					</div>

					<div className="">
						<img
							src={avatar1}
							alt="avatar"
							className="w-[220px] h-[280px] rounded-2xl"
						/>
						<div className="flex items-center gap-1 relative bottom-64 left-32">
							<div className="bg-white rounded-full p-3">
								<FaRegHeart />
							</div>
							<div className="bg-white rounded-full p-3">
								<MdArrowOutward />
							</div>
						</div>
						<div className="flex items-center relative bottom-28 justify-center">
							<div className="rounded-3xl p-2 border border-white text-white">
								Oral Care Guides
							</div>
						</div>
					</div>

					<div className="">
						<img
							src={avatar1}
							alt="avatar"
							className="w-[220px] h-[280px] rounded-2xl"
						/>
						<div className="flex items-center gap-1 relative bottom-64 left-32">
							<div className="bg-white rounded-full p-3">
								<FaRegHeart />
							</div>
							<div className="bg-white rounded-full p-3">
								<MdArrowOutward />
							</div>
						</div>
						<div className="flex items-center relative bottom-28 justify-center">
							<div className="rounded-3xl p-2 border border-white text-white">
								Oral Care Guides
							</div>
						</div>
					</div>

					<div className="">
						<img
							src={avatar1}
							alt="avatar"
							className="w-[220px] h-[280px] rounded-2xl"
						/>
						<div className="flex items-center gap-1 relative bottom-64 left-32">
							<div className="bg-white rounded-full p-3">
								<FaRegHeart />
							</div>
							<div className="bg-white rounded-full p-3">
								<MdArrowOutward />
							</div>
						</div>
						<div className="flex items-center relative bottom-28 justify-center">
							<div className="rounded-3xl p-2 border border-white text-white">
								Oral Care Guides
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroFour;
