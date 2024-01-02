import { Link } from "react-router-dom"

const LandAppDescription = () => {
  return (
    <div className='text-white xl:min-h-[calc(100vh_-_70px)] w-full py-[40px] px-[30px] sm:p-[40px] pb-0 flex flex-col justify-between'>
      <div>
        <h3 className='text-[#F08A4B] w-full text-center text-[14px] lg:text-[16px]'>Start now</h3>
        <h1 className='w-full text-center text-[25px] lg:text-[40px] sm:my-[10px]'>Free, Reliable & Compact</h1>
        <div className='flex flex-row flex-wrap items-center justify-center lg:justify-center gap-[40px] lg:gap-[20px] my-[40px]'>
         <Steps gif='Gif/Cloud Download.gif' steps='1' text='Download app' />
         <div className='h-[180px] w-[2px] bg-[rgba(240,138,75,0.4)] hidden lg:block'></div>
         <Steps gif='Gif/Gmail.gif' steps='2' text='Create account' />   
         <div className='h-[180px] w-[2px] bg-[rgba(240,138,75,0.4)] hidden lg:block'></div>
         <Steps gif='Gif/File.gif' steps='3' text='Use resources' />   
         <div className='h-[180px] w-[2px] bg-[rgba(240,138,75,0.4)] hidden lg:block'></div>
         <Steps gif='Gif/Trophy.gif' steps='4' text='Ace the exams' />   
        </div>
      </div>
      <footer>
        <div className='flex flex-row flex-wrap items-center justify-center gap-[30px] md:gap-[40px]'>
          <SocialHandles to='https://www.instagram.com/altermateapp/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==' name='instagram' img='Images/Instagram.svg'/>
          <SocialHandles to='' name='twitter' img='Images/TwitterX.svg'/>
          <SocialHandles to='' name='github' img='Images/GitHub.svg'/>
        </div>
        <div className='w-[80%] h-[1px] mx-auto max-w-[800px] bg-[#F08A4B] my-[30px]'></div>
        <div className='flex flex-row flex-wrap gap-[30px] items-center justify-center md:gap-[40px] [&>*]:text-[12px] [&>*]:font-medium md:[&>*]:text-[16px] lg:[&>*]:text-[20px] lg:gap-[60px]'>
          <Link to='/about'>Post Policy</Link>
          <Link to='/about'>Term & Conditions</Link>
          <Link to='/about'>FAQ</Link>
        </div>
        <div className='my-[40px] text-[14px] font-light text-[#B8B8B8] w-full text-center'>2023 © Altermate All Rights Reserved</div>
      </footer>
    </div>
  )
}

const Steps = ({gif, steps, text}) => {
  return <div className='mx-auto w-fit flex flex-row lg:flex-col justify-start lg:justify-center gap-[20px] lg:gap-[10px] items-center'>
    <div className='h-[80px] w-[80px] flex items-center justify-center'><img src={gif} alt="gif" className='h-[60px] w-[60px] lg:h-[80px] lg:w-[80px]'/></div>
    <div className='w-full lg:flex lg:flex-col lg:items-center'>
      <h2 className='w-[80px] h-[30px] mb-[10px] flex items-center justify-center bg-[#242933] rounded-full text-[16px] font-light'>Step {steps}</h2>
      <p className='text-[16px] font-medium'>{text}</p>
    </div>
  </div>
}

const SocialHandles = ({to, img, name}) => {
  return <Link to={to} className='flex items-center justify-start gap-[5px] text-[12px] md:text-[16px]'><img src={img} alt="" className='h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]'/> {name}</Link>
}



export default LandAppDescription
