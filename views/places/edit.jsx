const React = require('react')
const Def = require('../default')

function edit_form(data) {
    return (
        <Def>
            <main>
            <h1>Edit Place</h1>
<form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
    ...
    <div className="row">
        ...
        <div className="form-group col-sm-4">
            <label htmlFor="founded">Founded</label>
            <input className="form-control" 
              id="founded" 
              name="founded" 
              value={data.place.founded} 
            />
        </div>
    </div>
    ...
    <input className="btn btn-primary" type="submit" value="Update Place" />
</form>

            </main>
        </Def>
    )
}

module.exports = edit_form



