export function DonationButton(){
    return (
        <form
        action="https://www.paypal.com/donate"
        method="post"
        target="_top"
        className="donate-container"
      >
        <input type="hidden" name="hosted_button_id" value="RNRKC4PPWUSAL" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
      </form>
    )
}