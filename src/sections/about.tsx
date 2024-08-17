import CoolPortraitCard from "@/components/cool-portrait-card";
import MotionDiv from "@/components/motion-div";

export default function about() {
  return (
    <section
      id="about"
      className="mx-auto my-20 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16 scroll-mt-28"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
        </MotionDiv>
        <article className="flex flex-col gap-4">
          <MotionDiv delayOffset={0.4}>
            <p>
            Hello, I'm 
              <span className="whitespace-nowrap"> Dhanush S M</span>
              , a Full-Stack Developer specializing in the <b>MERN stack</b> based
              in Tamilnadu, India.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
            I am passionate about building impactful web applications that merge elegant code architecture with user-friendly design. Alongside my development work, I have a deep enthusiasm for video editing and graphic design, where I enjoy creating visually compelling content that resonates with audiences. My goal is to combine these skills to deliver digital experiences that are both functional and visually stunning.
            </p>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <CoolPortraitCard className="hidden lg:block">
            <img
              src="/profile.png"
              alt="photo"
              className="w-[350px] min-w-[300px] rounded-xl transition-all"
            />
          </CoolPortraitCard>
        </MotionDiv>
        <MotionDiv delayOffset={0.4}>
          <img
            src="/profile.png"
            alt="photo"
            className="w-[350px] min-w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105 lg:hidden"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
