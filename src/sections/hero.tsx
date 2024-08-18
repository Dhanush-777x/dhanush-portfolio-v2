import ContactList from "@/components/contact-list";
import MotionText from "@/components/motion-text";
import MotionDiv from "@/components/motion-div";

export default function hero() {
  return (
    <section className="my-20 flex flex-col items-center justify-center">
      <h1 className="mt-20 text-[1.4rem] md:text-[2rem]">
        <MotionText delayOffset={0}>Hi, I'm Dhanush! 👋</MotionText>
      </h1>
      <div className="overflow-hidden rounded-full p-3 md:p-4 lg:mb-10">
        <MotionDiv>
          <img className="h-[40vh] rounded-full" src="./profile-1.png" alt="profile" />
        </MotionDiv>
      </div>
      <h1 className="">
        <MotionText delayOffset={0.8}>Full Stack Developer 🧑🏻‍💻</MotionText>
      </h1>
      <div className="my-10 flex w-full flex-col gap-2 text-center lg:w-[50%]">
        <MotionDiv delayOffset={1.4}>
          <p>
          A passionate MERN Stack developer who thrives on building innovative and cool projects.
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}
