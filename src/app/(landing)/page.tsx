"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <section
      className="
			relative 
			bg-gray-100 
			dark:bg-gray-900  
			bg-contain 
			w-full 
			min-h-screen"
    >
      <div
        className="
				relative 
				p-3 
				md:p-0 
				w-full 
				flex 
				items-center 
				justify-center 
				top-1/2 
				min-h-screen 
				backdrop-brightness-75"
      >
        <div className="max-w-sm w-full space-y-6">
          <div className="text-center flex flex-col items-center justify-center space-y-3 w-full">
            <motion.h1
              className="
							text-5xl 
							font-semibold  
							sm:text-6xl 
							font-mono 
							text-gray-900 
							dark:text-white/5"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.42, 0, 0.58, 1] }}
            >
              Effortlessly Create Professional Invoices.
              <br />
              <span className=""> For Free!</span>
            </motion.h1>
            <motion.p
              className="
							text-sm 
							sm:text-base 
							leading-5 
							max-w-md 
							w-full 
							mx-auto 
							sm:leading-normal 
							font-meduim 
							text-zinc-600"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Generate, customize, and send invoices in minutes with our
              easy-to-use invoice generator. No sign-up required, no hidden
              fees.
            </motion.p>
          </div>

          <motion.div className="flex w-full items-center justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="sm:w-1/2 bg-zinc-600  sm:text-base font-medium text-white px-3 py-6"
            >
              Start Creating Your Invoice
            </Button>
          </motion.div>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default HomePage;
