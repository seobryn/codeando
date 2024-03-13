export function DonationButton() {
  return (
    <form
      action="https://www.paypal.com/donate"
      method="post"
      target="_top"
      className="donate-container"
    >
      <input type="hidden" name="hosted_button_id" value="RNRKC4PPWUSAL" />
      <button
        type="submit"
        style={{
          border: 0,
          backgroundColor: "transparent",
          width: 150,
          height: 45,
          backgroundImage: "url(/DonationButton.svg)",
          backgroundSize: "100% 100%",
          cursor: "pointer",
        }}
      ></button>
    </form>
  )
}
