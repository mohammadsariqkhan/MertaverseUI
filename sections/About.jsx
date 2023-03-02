'use client';
import { motion } from "framer-motion";
import styles from "../styles";
import { TypingText } from "../components";
import {fadeIn,staggerContainer} from '../utils/motion'
const About = () => (
  <section className={`${styles.paddings} realative z-10`}>
    <div className="gradient-02 z-0"/>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{once: false, amount:0.25}}className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
    <TypingText title="| About Metaversus" textStyles="text-center"/>
      <motion.p variants={fadeIn('up','tween,0.2,1')} className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit et doloribus voluptates asperiores laborum ex sint magnam nesciunt ea hic quasi eos quod maiores, quaerat ratione ullam architecto aperiam.
      </motion.p>
      <motion.img variants={fadeIn('up','tween',0.3,1)} src="/arrow-down.svg" alt="arrow down" className="w-[18px] h-[28px] object-contain mt-[28px]"/>
    </motion.div>
    
  </section>
);

export default About;
