import Laptop from "../assets/laptop.jpg";

function Analytics() {
	return (
		<div className='w-full bg-white py-16 px-4'>
			<div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
				<img src={Laptop} alt='Laptop' className='w-[500px] mx-auto my-4' />
				<div className='flex flex-col justify-center'>
					<p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
					<h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
						Manage Data Analytics Centrally
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
						architecto nostrum aspernatur placeat perspiciatis. Similique
						quisquam adipisci, dignissimos ab expedita doloribus sit aspernatur
						voluptatibus debitis laudantium modi, fuga eum nobis.
					</p>
					<button className='bg-black hover:bg-[#00fd9a] text-[#00df9a] hover:text-black transition duration-300 w-[200px] rounded-lg font-medium my-6 mx-auto md:mx-0 py-3'>
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
}

export default Analytics;
