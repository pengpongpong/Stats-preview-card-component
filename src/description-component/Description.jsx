import React from "react"

function Description() {
    return (
        <section className="description">
            <h1 className="title">
                Get <span>insights</span> that help your business grow.
            </h1>
            <p className="title_paragraph">
                {" "}
                Discover the benefits of data analytics and make better
                decisions regarding revenue, customer experience, and overall
                efficiency.
            </p>
            <section className="stats">
                <div>
                    <h1 className="stats_h">10k+</h1>
                    <p className="stats_p">companies</p>
                </div>
                <div>
                    <h1 className="stats_h">314</h1>
                    <p className="stats_p">templates</p>
                </div>
                <div>
                    <h1 className="stats_h">12M+</h1>
                    <p className="stats_p">queries</p>
                </div>
            </section>
        </section>
    )
}

export default Description
