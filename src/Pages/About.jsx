import NavbarOne from "../Components/NavbarOne"
import FAQItem from "../Components/Faqitem"

const About = () => {
        const faqData = [
          {
            question: 'What is Altermate?',
            answer: 'Altermate is a collaborative platform for college students offering free resources, study materials, and a vibrant community for academic support.',
          },
          {
            question: 'How can I benefit from Altermate?',
            answer: 'Access resources, engage with peers, and collaborate for academic success on both the user-friendly website and convenient mobile app.',
          },
          {
            question: 'Who can use Altermate?',
            answer: 'Designed for college students seeking free resources and a collaborative community, available both on the website and Android app.',
          },
          {
            question: "How can I contribute to Altermate's community?",
            answer: 'Share materials, participate in discussions, and contribute to collaborative learning effortlessly on both the website and the Android app.',
          },
          // Add FAQ items
        ];
  return (
    <div className="h-full w-full max-w-[1600px] mx-auto px-4 sm:px-[20px] md:px-[25px] lg:px-[40px] 3xl:px-[60px]">
      <NavbarOne/>
      <div className="md:my-[40px] sm:text-center text-white">
        {/* <div>
            <h1 className="text-[24px] md:text-[30px] font-semibold">Altermate</h1>
            <p className="font-light md:font-normal my-[5px] md:text-[18px] md:w-3/5 md:mx-auto opacity-95">Altermate reshapes college learning through free resources like PDF notes and practice questions. Beyond tools, it fosters a vibrant community where students engage, collaborate, and enhance their educational journey. This dynamic hub promotes collective learning, transcending traditional study methods. Altermate embodies innovation and collaboration, reflecting an understanding of academic challenges. It stands not just as a platform, but as a testament to revolutionizing education through shared efforts and a supportive community.</p>
        </div> */}

        <div className="md:mt-[40px] mb-[40px]">
            <h1 className="text-[24px] md:text-[30px] font-semibold">Our vision</h1>
            <p className="font-light md:font-normal my-[5px] md:text-[18px] md:w-3/5 md:mx-auto opacity-95">Altermate is dedicated to reshaping education by envisioning a future beyond classroom limitations. We strive to establish an expansive online space where students break barriers, accessing resources, connecting with peers, and excelling academically. Our aim is to transcend conventional boundaries, fostering a collaborative environment that empowers students to redefine their learning journey.</p>
        </div>

        <div className="max-w-[800px] mx-auto sm:px-6 lg:px-8 text-white">
            {/* Mapping through FAQ data and rendering FAQItem component */}
            {faqData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default About
