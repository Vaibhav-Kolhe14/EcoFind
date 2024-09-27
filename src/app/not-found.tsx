"use client";
import React from "react";
import { motion } from "framer-motion";
import NotFound from "./Components/NotFound";

const NotFoundPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="my-16 flex justify-center items-center h-240 py-16 md:my-12 md:py-12">
          <NotFound />
        </div>
      </motion.div>
    </>
  );
};

export default NotFoundPage;
