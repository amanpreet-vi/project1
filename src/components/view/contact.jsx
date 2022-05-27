import "../resource/stylesheet/contact.css";
export default function Contact() {
  return (
    <div className="contactFormContainer">
      <div className="contactForm">
        <form id="form">
          <div className="column">
            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  cols="30"
                  rows="8"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <button type="submit" className="btn">
                  Submit
                </button>
                <div className="submitting"></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
