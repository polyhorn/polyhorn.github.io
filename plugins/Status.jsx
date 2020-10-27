import * as React from "react";

function reference(path) {
    if (!path)
        return;

    const crate = path.split("/")[0];

    return <a href={`https://docs.rs/${crate}/*/${path}`} target="blank">
        <span className="badge badge--primary">Reference →</span>
    </a>;
}

export default ({ level, path }) => {
    return <p style={{ display: "flex", alignItems: "center", lineHeight: 0 }}>
        {level == 0 &&
            <span className="badge badge--danger" style={{ marginRight: 10 }}>Unstable</span>}
        {level == 1 &&
            <span className="badge badge--warning" style={{ marginRight: 10 }}>Release Candidate</span>}
        {reference(path)}
    </p>;
};
