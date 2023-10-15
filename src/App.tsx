import "./App.css";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./components/ui/mode-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import reaction from "./assets/icon-reaction.svg";
import memory from "./assets/icon-memory.svg";
import verbal from "./assets/icon-verbal.svg";
import visual from "./assets/icon-visual.svg";
function App() {
  return (
    <div className=" w-screen font-Hanken h-[100vh]  ">
      <div className=" absolute left-[10%] md:left-[50%] md:top-[10%]  flex justify-center mt-4  ">
        <ModeToggle />
      </div>
      <div className=" h-screen md:flex md:items-center">
        <div className="  flex flex-col md:shadow-2xl md:flex-row  md:items-center md:justify-center    md:mx-auto  md:w-[40%]    ">
          <Card className=" bg-gradient-to-b  md:rounded-[30px] pb-2  flex-1 from-Lightslateblue to-Lightroyalblue  border-none  rounded-t-none rounded-b-[40px] flex flex-col items-center text-center">
            <CardHeader>
              <CardTitle className=" text-Lightlavender text-lg mb-5 ">
                Your Result
              </CardTitle>
              <div className="   bg-gradient-to-b from-Violetblue to-Persianblue  flex flex-col items-center w-40 h-40 justify-center   rounded-full ">
                <p className=" text-white font-bold text-[4rem] ">76</p>
                <p className=" text-gray-400"> of 100</p>
              </div>
            </CardHeader>
            <CardContent className=" flex flex-col items-center  mt-4">
              <h1 className=" font-bold text-Paleblue text-[2rem] ">Great</h1>
              <p className=" text-Lightlavender font-[18px] md:w-[60%]  w-[55%] text-center mt-2 ">
                You scored higher than 65% of the people who have taken tests.
              </p>
            </CardContent>
          </Card>
          <Card className="   flex-1 border-none shadow-none rounded-none  flex flex-col  ">
            <CardHeader>
              <CardTitle className=" text-lg">Summary</CardTitle>
            </CardHeader>
            <CardContent className=" flex flex-col gap-4 items-center  mt-4">
              <div className=" flex justify-between w-full  rounded-[10px]  bg-Lightredbg  py-2 px-2">
                <div className=" flex  gap-2">
                  <img src={reaction} alt="" />
                  <h3 className=" text-Lightred font-bold">Reaction</h3>
                </div>
                <p className=" text-Lightlavender font-bold">
                  {" "}
                  <span className=" text-Darkgrayblue dark:text-Lightred ">
                    80{" "}
                  </span>{" "}
                  / 100
                </p>
              </div>
              <div className=" flex justify-between w-full  rounded-[10px] bg-Orangeyyellowbg  py-2 px-2">
                <div className=" flex  gap-2">
                  <img src={memory} alt="" />
                  <h3 className=" text-Orangeyyellow font-bold">Memory</h3>
                </div>
                <p className=" text-Lightlavender font-bold">
                  {" "}
                  <span className=" text-Darkgrayblue dark:text-Orangeyyellow">
                    92{" "}
                  </span>{" "}
                  / 100
                </p>
              </div>
              <div className=" flex justify-between w-full  rounded-[10px] bg-Greentealbg  py-2 px-2">
                <div className=" flex  gap-2">
                  <img src={verbal} alt="" />
                  <h3 className=" text-Greenteal font-bold">Verbal</h3>
                </div>
                <p className=" text-Lightlavender font-bold">
                  {" "}
                  <span className=" text-Darkgrayblue dark:text-Greenteal">
                    61{" "}
                  </span>{" "}
                  / 100
                </p>
              </div>
              <div className=" flex justify-between w-full  rounded-[10px] bg-Cobaltbluebg  py-2 px-2">
                <div className=" flex  gap-2">
                  <img src={visual} alt="" />
                  <h3 className=" text-Cobaltblue font-bold">Visual</h3>
                </div>
                <p className=" text-Lightlavender font-bold">
                  {" "}
                  <span className=" text-Darkgrayblue dark:text-Cobaltblue">
                    72{" "}
                  </span>{" "}
                  / 100
                </p>
              </div>
              <Button className=" hover:bg-gradient-to-b hover:from-Lightslateblue ease-in text-lg   transition-all   hover:to-Lightroyalblue mt-4 dark:text-white  w-[80%]  h-[3rem] bg-gradient-to-b from-Darkgrayblue to-Darkgrayblue rounded-full ">
                Continue
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
