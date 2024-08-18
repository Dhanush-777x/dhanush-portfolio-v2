import ContactList from "@/components/contact-list";
import MotionDiv from "@/components/motion-div";

export default function contact() {
  return (
    <section
      className="my-4 mb-28 flex flex-col items-center gap-5 text-center md:mt-8 scroll-mt-28"
      id="contact"
    >
      <MotionDiv>
        <h2>Contact</h2>
      </MotionDiv>
      <MotionDiv>
        <p className="py-4">
          If you are interested in working together, please don't hesitate to
          get in touch with me.
        </p>
      </MotionDiv>
      <ContactList />
      <MotionDiv>
        <p className="text-sm pt-4">
          Made with Next js and Tailwind CSS by Dhanush S M
        </p>
      </MotionDiv>
    </section>
  );
}
