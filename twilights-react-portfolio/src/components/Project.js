import React from 'react';

function Project() {
    return (
        <section className="section">
            <div className="container">
                <h3 className="title has-text-centered is-size-4">Projects</h3>
                <div className="columns mt-5 is-8 is-variable is-multiline">
                    <div className="column is-4-tablet is-4-desktop">
                        <div className="card">
                            <div className="card-image has-text-centered px-6">
                                <h2>Movie Selector</h2>
                                <figure className="image is-4by3">
                                    <a className="card" href="https://github.com/fiaschettima/MovieSuggestion-Proj1"><img src="https://jeffz98.github.io/Twilights_Portfolio/Images/condensedFullDemo.gif" alt="Project allowing users to watch Movie trailers by searching" /></a>
                                </figure>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image has-text-centered px-6">
                                <h2>Hospital Appointment Manager</h2>
                                <figure className="image is-4by3">
                                    <a className="card" href="https://github.com/laurasierra17/appointment-manager"><img src="https://jeffz98.github.io/Twilights_Portfolio/Images/App-Demo.gif" alt="Second project, HAM, allowing patients to make appointments with their Doctors online" /></a>
                                </figure>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image has-text-centered px-6">
                                <figure className="image is-4by3">
                                    <h2>Hireable-Hippo-Helpers</h2>
                                    <a href="https://github.com/espinbrandon49/Hireable-Hippo-Helper"><img src="https://github.com/espinbrandon49/Hireable-Hippo-Helper/raw/main/client/src/images/Hireable%20Hippo%20Helper.gif" id="work1" alt="Application Tracker" /></a>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project;