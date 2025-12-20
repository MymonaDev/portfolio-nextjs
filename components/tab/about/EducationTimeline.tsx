import { TimelineData } from "./Data";

const EducationTimeline = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="relative border-l border-gray-300">
        {TimelineData.map((milestone, index) => (
          <div key={index} className="mb-8">
            <div className="absolute w-5 h-5 bg-[#0fabca] z-10 border-4 border-white rounded-full left-[0rem] transform -translate-x-1/2 -translate-y-1/2" />
            <div className="pl-6">
              <div className="flex sm:items-start flex-col">
                <div className=" text-[#424242] text-lg font-semibold">
                  {milestone.title}
                </div>

                <div>
                  <span className="font-semibold">Completion Date:</span>{" "}
                  {milestone.date}
                </div>
                <div>
                  {milestone.gpa && (
                    <div>
                      <span className="font-semibold">CGPA:</span>{" "}
                      {milestone.gpa}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationTimeline;
