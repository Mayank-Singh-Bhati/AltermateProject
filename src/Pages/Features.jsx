import NavbarOne from "../Components/NavbarOne"

const Features = () => {
  return (
    <div className="h-full w-full max-w-[1600px] mx-auto px-4 sm:px-[20px] md:px-[25px] lg:px-[40px] 3xl:px-[60px]">
      <NavbarOne/>
      {/* content library  */}
      <div className="text-white sm:text-center sm:mt-[40px]"> 
        <h1 className="text-[20px] md:text-[24px] font-semibold">Content to read that <br className="sm:hidden"/>matters</h1>
        <p className="text-[14px] md:text-[16px] my-[5px] opacity-80 sm:w-3/4 sm:mx-auto">Scattered content, constant interruptions, different opinions - there's a smarter way to study. Altermate helps you get the best notes and papers in either printed or handwritten format. Read the content chosen and trusted by the scholars and admins.</p>
        {/* content library flex (subpart) */}
        <div className="flex flex-row justify-center gap-x-[40px] lg:gap-x-[80px] gap-y-[20px] my-[20px] flex-wrap">
          <div className="text-center p-2 sm:border-[0px] border-white rounded-md max-w-[386px] sm:shadow-sm">
            <h1 className="text-[16px] font-medium">Organized library</h1>
            <img src="Images/organized.svg" alt="organize" className="w-2/5 max-w-[150px] my-[10px] mx-auto"/>
            <p className="text-[14px] font-light opacity-80">Get the notes from the well organized content library.</p>
          </div>
          <div className="text-center p-2 sm:border-[0px] border-[#F08A4B] rounded-md max-w-[386px]">
            <h1 className="text-[16px] font-medium">Add content</h1>
            <img src="Images/addFile.svg" alt="add file" className="w-2/5 my-[10px] sm:h-[184px] sm:w-auto sm:max-w-auto mx-auto"/>
            <p className="text-[14px] font-light opacity-80">Add and share notes and previous year papers to help your fellow students.</p>
          </div>
        </div>
      </div>

      {/* Community */}
      <div className="text-white mt-[20px] md:mt-[40px] sm:text-center">
        <h1 className="text-[20px] md:text-[24px] font-semibold">Community to grow together</h1>
        <p className="text-[14px] md:text-[16px] my-[5px] opacity-80 sm:w-3/4 sm:mx-auto">Altermate is more than just a study platform; it's a vibrant community where students come together to support, discuss, and learn from each other. Through our robust community features, we offer a space for students to share valuable resources, ask questions, and collaborate on mastering their subjects.</p>
        {/* Community subpart */}
        <div className="my-[20px] sm:border-[1px] p-2 border-white rounded-md max-w-[386px] mx-auto">
          <img src="Images/ideas.svg" alt="organize" className="w-2/5 max-w-[150px] my-[10px] mx-auto"/>
          <p className="text-[14px] font-light opacity-80 text-center">Share and grow together</p>
        </div>
      </div>

      {/* Events */}
      <div className="text-white my-[20px] md:my-[40px] sm:text-center">
        <h1 className="text-[20px] md:text-[24px] font-semibold">Events to advance</h1>
        <p className="text-[14px] md:text-[16px] my-[5px] opacity-80 md:w-3/4 md:mx-auto">Altermate holds events for students to engage in discussions, learn new things and gain experience.</p>
      </div>
    </div>
  )
}

export default Features
