import ReferralImage from '../../assets/images/earn banner.png';
import './Referral.css';

export function Referral () {
  return (

    <>
    
    <div className="referral-banner-dynamic">
    <img src={ReferralImage} alt="Referral promotion" className="banner-image" />

    <div className="content-overlay">
      <h2 className="title">Earn ₦500</h2>
      <h2 className="subtitle">for Every Friend You Refer!</h2>
      <p className="description">
        Invite your friends to Campus Link and earn ₦500 for
        every successful referral. Share the Connection, share
        the savings!
      </p>
      <a href="#" className="invite-button">
        Invite Friends <i className="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  </div>

    </>

  );
}