import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { FaTooth } from "react-icons/fa";

const HeroOne = () => {
	const controls = useAnimation();

	useEffect(() => {
		controls.start({ x: 0 }); // Start animation when the component mounts
	}, []);

	return (
		<motion.div className="h-screen w-full bg-[#FFD099] flex flex-col gap-4 justify-center items-center">
			<motion.div
				className="flex items-center gap-4 justify-between"
				initial={{ x: -200 }} // Initial position off-screen to the left
				animate={controls}
				transition={{ duration: 1.5 }}
			>
				<div className="bg-[#FFD099] border-2 border-[#FF9209] p-3 rounded-full">
					<HiArrowRight
						style={{ color: "#FF9209", fontSize: "30px" }}
					/>
				</div>

				<div className="bg-[#FF9209] text-2xl text-white px-6 py-3 rounded-3xl">
					<p>DENTAL</p>
				</div>
			</motion.div>
			<motion.div
				className="flex items-center gap-4 justify-between"
				initial={{ x: 200 }} // Initial position off-screen to the left
				animate={controls}
				transition={{ duration: 1.5 }}
			>
				<div className="bg-white text-2xl text-[#FF9209] px-6 py-3 rounded-3xl">
					<p>ASSISTANCE</p>
				</div>
				<div className="bg-[#FF9209] border-2 border-[#FF9209] p-3 rounded-full">
					<FaTooth style={{ color: "white", fontSize: "30px" }} />
				</div>
			</motion.div>
		</motion.div>
	);
};

export default HeroOne;
