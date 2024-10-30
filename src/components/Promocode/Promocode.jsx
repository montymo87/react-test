import "./Promocode.scss";

const Promocode = () => {
  return (
    <section className="section promocode">
      <div className="section_in promocode__in">
        <div className="promocode__title">Have a promo code?</div>

        <form className="promocode__form" action="POST">
          <div className="promocode__form_in">
            <div className="promocode__form_row">
              <div className="promocode__field">
                <label
                  className="promocode__field_label"
                  htmlFor="promocode_input_text"
                >
                  Enter promo code here. It will activate a special bonus!
                </label>
                <input
                  className="promocode__field_input"
                  defaultValue="ALPHA2021"
                  id="promocode_input_text"
                  type="text"
                />
              </div>
              <div className="promocode_input_btn_w">
                <input className="btn_base" type="submit" value="Apply" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Promocode;
