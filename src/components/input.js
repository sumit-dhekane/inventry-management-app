import React from "react";

export default (props) => {
    const { tagName, tagKey, tagId, handleChange, inputType } = props

    return <div className="form-group row">
        <label htmlFor={tagKey} className="col-sm-2 col-form-label">{tagName}</label>
        <div className="col-sm-10">
            <input
                type={inputType}
                className="form-control"
                id={tagId}
                name={tagKey}
                onChange={handleChange} />
        </div>
    </div>
}