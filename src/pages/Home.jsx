import Vegetables from "../components/Vegetables";
import Popular from "../components/Popular";
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
        animate={{ opacity: 1 }} /* This will be the starting position */
        initial={{ opacity: 0 }} /*Everytime we nagivate to a page, it will fade in initial to animate (from 0 to 1) */
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
    > {/* All elements that you want to transition need to be wrapped in a motion.div */}
            <Popular />
            <Vegetables />
    </motion.div>
  )
}

export default Home;