import { motion } from "framer-motion";
import { FiFrown } from "react-icons/fi";
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            {/* Icon with subtle bounce */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="flex justify-center mb-6"
            >
              <FiFrown size={72} className="text-[#1d225f] animate-bounce" />
            </motion.div>
    
            {/* 404 Heading */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-6xl font-bold mb-3 tracking-tight"
            >
              404
            </motion.h1>
    
            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-500 mb-8 max-w-md mx-auto"
            >
              Sorry! We couldn’t find the page you were looking for. It may have been moved or deleted.
            </motion.p>
    
            {/* Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/"
                className="inline-block px-6 py-3 rounded-lg text-white font-medium transition-transform transform hover:scale-105 shadow-md"
                style={{ backgroundColor: "#1d225f" }}
              >
                Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      );
};

export default ErrorPage;
