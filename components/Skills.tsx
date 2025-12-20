import { DrawUnderlineText } from "./shared/DrawUnderlineText";
import SkillsTab from "./tab/skills/SkillsTab";

const Skills = () => {
  return (
    <section id="skills" className="py-32 text-center scroll-mt-20">
      <DrawUnderlineText text="My Skills" />

      <SkillsTab />
    </section>
  );
};

export default Skills;
