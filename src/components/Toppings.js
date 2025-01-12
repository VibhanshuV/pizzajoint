import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x:'100vw'
  },
  visible: {
    x:0,
    opacity: 1,
    transition: {type:'spring', delay: 0.5, stiffness:80}
  },
  exit: {
    x: '-100vw',
    transition: {ease: 'easeInOut'}
  }
} 

const buttonVariants = {
  // visible: {
  //   x: [-20,20,-20,20,-20,0], keyframes
  //   transition: {delay: 2}
  // },
  hover: {
    scale:1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.2,
      yoyo: Infinity
    }
  }
}

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              whileHover= {{
                scale:1.3,
                color: "#f8e112",
                originX: 0
              }}
              transition={{type: 'spring', stiffness:300}}
              >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button 
          variants={buttonVariants}
          whileHover= "hover"
          >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;