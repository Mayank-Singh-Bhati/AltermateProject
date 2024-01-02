const UnderDev = () => {
 document.body.style = "background: #171A21";
  return (
    <div className="w-full h-full min-h-[100vh] p-4 flex flex-col items-center justify-center gap-y-[20px]">
        <h1 className='text-white text-center text-[25px] '>We are under development.<br/><span className="text-[#F08A4B] my-[20px] text-[30px] font-medium">Stay Tuned</span></h1>
        <button type='button' onClick={goBack} className='w-[200px] h-[40px] rounded-md border-[1px] border-[#FAFAFA] text-white text-[14px]'>👈 Back</button>
    </div>
  )
}

function goBack() {
  window.history.back();
}

export default UnderDev
