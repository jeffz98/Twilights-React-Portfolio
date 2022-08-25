import React from 'react';

function Footer() {
    const contactStyle = {
        fontStyle: "italic"
    }
    return (
        <>
            <div>
                <h2 id="contact" style={contactStyle}>Contact Me</h2>
                <p id="contact"><a href="https://github.com/jeffz98">Github</a>
                    <a href="mailto:jeffz98@berkeley.edu">Email</a>
                </p>
            </div>

            <div>
                <h2 id="resume">Resume</h2>
                <p id="contact"><a href="https://templates.office.com/en-us/student-resume-modern-design-tm16402487">Resume </a></p>
            </div>
            <footer>
                <h4>Made with HTML and CSS</h4>
            </footer>
        </>
    )
}

export default Footer;