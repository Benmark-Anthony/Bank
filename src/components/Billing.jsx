import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Recon is the easiest way to make contactless payments. With Recon, you can pay for anything, anywhere with your smartphone. Get the Recon app now!
        avaliable both on google play and apple store download recon app for easy transations.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">      
        <a  href="https://apps.apple.com/ng/app/recon/id6448675651" target="_blank">
        <img src={apple} alt="google_play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
        </a>
        <a  href="https://play.google.com/store/apps/details?id=com.recon.recon_mobile_android" target="_blank">
        <img src={google} alt="google_play" className="w-[144px] h-[43px] object-contain cursor-pointer" />
        </a>   
      </div>
    </div>
  </section>
);

export default Billing;

