import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import { Service } from "./constants";
import FeedbackCard from "./components/FeedbackCard";

const App = () => (
  <div className="bg-primary w-[100%]  overflow-hidden scrollbar scrollbar-night-fade">
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-primary`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    
      <div  className={`flex-1 flex justify-center items-center mt-5  `} >
      
        <p className="font-poppins font-normal xs:text-[35.45px] text-[25.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
        Our Servies
        </p>
      </div>
    ))}
  </section>
    <div className="  grid sm:grid-cols-2 md:grid-cols-3   justify-center w-full feedback-container relative z-[1]">
      {Service.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
