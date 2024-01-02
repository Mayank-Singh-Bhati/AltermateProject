import { Link } from "react-router-dom"

const LandExplore = () => {
  return (
    <div className='text-white lg:h-[calc(100vh_-_70px)] w-full md:p-[30px] my-[40px] lg:my-0'>
      <div className='md:relative md:w-[90%] md:mx-auto max-w-[1200px]'>
        <div className='md:flex md:flex-row md:justify-center md:items-center gap-[40px] md:bg-[#1C2029] md:rounded-[40px] md:relative md:p-[40px] md:z-10 lg:gap-[60px] xl:gap-[80px] 2xl:gap-[100px]'>
          <img src="Images/phone2.png" alt="phone" className='h-[300px] w-fit mx-auto my-[20px] md:my-0 md:h-[350px] md:mx-0 xl:h-[450px]'/>
          <div className='flex flex-col gap-[15px] justify-center items-center text-center md:items-start md:text-left md:max-w-[350px]'>
            <h1 className='text-[25px] md:text-[35px] font-semibold'>Keeping It Real Easy</h1>
            <h3 className='text-[16px] text-[#B8B8B8]'>Helping All the Students to make a Useful Community</h3>
            <Link to='/features' className='h-[45px] w-[200px] flex justify-center items-center border-[1px] border-[#F08A4B] rounded-[5px] mt-[5px] md:mt-[25px] hover:bg-[rgba(24,24,24,0.5)]'>Explore platform</Link>
          </div>
        </div>
        <div className='min-h-[100px] h-full bg-[#F08A4B] w-[100vw] text-[25px] font-semibold px-[20px] text-center flex justify-center items-center my-[25px] -mx-4 md:mx-auto md:relatve md:h-fit md:w-[95%] md:my-0 md:pt-[60px] md:pb-[20px] md:-mt-[40px] md:z-0 md:rounded-b-[20px]'>Rethinking College Ideology</div>
      </div>
    </div>
  )
}

export default LandExplore



















































// import { Link } from "react-router-dom" 

// const LandExplore = () => {
//   return (
//     <div className="h-[calc(100dvh_-_70px)] w-full flex flex-col justify-between items-center text-white text-center md:block">
//       <div className="px-4 md:px-6 lg:px-10 xl:px-[60px] py-4 h-full flex flex-col justify-around items-center md:bg-[#1C2029] md:flex-row md:h-[400px] md:rounded-[40px]">
//         <img src="Images/phone.png" className="h-[300px] sm:h-[350px] w-fit mx-auto"/>
//         <div className="flex flex-col gap-y-[10px] items-center justify-between md:w-[400px] md:items-start md:text-left">
//           <h1 className="text-[24px] md:text-[40px] font-semibold">Keeping it Real Easy</h1>
//           <p className="text-[12px] text-[#B8B8B8] md:text-[16px]">Helping All the Students to make a Useful Community</p>
//           <Link to='/home' className='h-[45px] md:h-[50px] w-[200px] mt-[20px] flex items-center justify-center text-[14px] md:text-[16px] font-medium border-[1px] border-[#F08A4B] rounded-md'>Explore platform</Link>
//         </div>
//       </div>
//       <div className="w-[100vw] h-[100px] text-[25px] font-medium bg-[#F08A4B] flex items-center justify-center md:text-[30px] pt-2 md:w-[97%] mx-auto">Rethinking college ideology</div>
//     </div>
//   )
// }

// export default LandExplore
