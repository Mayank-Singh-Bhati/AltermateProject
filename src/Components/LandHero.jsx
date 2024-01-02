// import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const LandHero = () => {
  return (
    <div className='text-white text-center py-[20px] lg:h-[calc(100vh_-_70px)] lg:flex lg:flex-col lg:justify-evenly lg:items-center'>
      <div className='flex flex-col-reverse h-full w-full gap-[20px] my-[20px] justify-evenly items-center lg:flex-row lg:justify-center lg:gap-[40px] xl:gap-[80pxs] lg:text-left'>
        <div>
          <h3 className='text-[12px] md:text-[16px] mb-[5px] md:mb-[15px] lg:mb-[5px]'>Redesigning the <span className='text-[#F08A4B]'>college process</span></h3>
          <h1 className='text-[25px] md:text-[30px] lg:text-[50px] font-semibold mb-[20px] md:mb-[30px] max-w-[600px]'>Make your college life fun and easy with <span className='text-[#F08A4B]'>Altermate</span>.</h1>
          <div className='flex flex-row flex-wrap gap-[20px] justify-center items-center lg:justify-start lg:gap-[30px]'>
            <Link to='https://github.com/examr/examr/releases/download/1.2/app-release.apk' className='text-[12px] font-medium bg-[#F08A4B] w-[200px] h-[45px] rounded-[8px] flex items-center justify-center'>Download app</Link>
            <Link to='/underDev' className='text-[12px] font-medium border-[1px] border-[#F08A4B] w-[200px] h-[45px] rounded-[8px] flex items-center justify-center'>Try altermate web</Link>
          </div>
        </div>
        <img src="Images/heroImg.png" alt="" className='w-[80%] h-auto max-w-[350px] lg:w-full lg:h-full lg:max-w-fit lg:max-h-[500px] xl:max-h-[600px]'/>
      </div>
      <div>
        <p className='text-[12px] text-[#B8B8B8]'>Hundreds of resources chosen by scholars</p>
      </div>
    </div>
  )
}

export default LandHero







































// import { Link } from "react-router-dom"
// import { IoIosArrowDown } from "react-icons/io";


// const LandHero = () => {
//   return (
//     <div className="min-h-[calc(100dvh_-_70px)] flex flex-col justify-around lg:block">

//       <div className="flex flex-col-reverse justify-start items-center gap-[20px] max-w-[1600px] mx-auto
//                       lg:flex-row lg:items-center lg:justify-around lg:pt-[40px]">
//         {/* Hero Content */}
//         <div className="text-white flex flex-col items-center text-center
//                           lg:text-left lg:items-start">
//             <h2 className="text-[#B8B8B8] text-[12px] font-medium">Redesigning the <span className="text-[#F08A4B]">college process</span></h2>
//             <h1 className="text-[25px] font-semibold w-full mt-1 mb-[20px] lg:text-[50px] lg:max-w-[600px]">Make your college life fun and easy with <span className="text-[#F08A4B]">Altermate</span>.</h1>
//             <div className="link-section text-sm flex flex-row flex-wrap justify-center gap-[15px] lg:gap-[40px] lg:mt-[30px]">
//                 <Link className="text-[12px] lg:text-[16px] font-medium flex items-center justify-center w-[200px] h-[45px] lg:h-[50px] bg-[#F08A4B] hover:bg-orange-400 rounded-md">Download app</Link>
//                 <Link className="text-[12px] lg:text-[16px] font-medium flex items-center justify-center w-[200px] h-[45px] lg:h-[50px] border-[1px] border-[#F08A4B] hover:text-[#F08A4B] hover:border-white rounded-md">Try altermate web</Link>
//             </div>
//         </div>
//         {/* Hero Image */}
//         <img src="Images/heroImg.png" className="w-[90%] max-w-[280px] lg:w-fit lg:h-[500px] lg:max-w-fit 2xl:h-[550px] 3xl:h-[600px]" />
//       </div>

//       <p className="text-[12px] mt-[30px] text-[#B8B8B8] text-center">Hundreds of resources chosen by scholars</p>
//       <IoIosArrowDown className="text-[#B8B8B8] text-[30px] my-[10px] hidden lg:block w-fit mx-auto"/>
//     </div>
//   )
// }

// export default LandHero