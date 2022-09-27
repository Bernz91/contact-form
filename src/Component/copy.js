<Grid2 xs={2}></Grid2>
          <Grid2 xs={2.5} className="form-title">
            <label>Name:</label>
          </Grid2>
          <Grid2 xs={3.5} className="form-body">
            <input
              {...register("firstName", {
                required: "⚠ Name is required",
                pattern: {
                  value: /^[-a-zA-Z@.+_]+$/i,
                  message: "⚠ Please enter a valid first name",
                },
              })}
            />
          </Grid2>
          <Grid2 xs={4} className="validation-error">
            {errors.firstName?.message}
          </Grid2>

          <Grid2 xs={2}></Grid2>
          <Grid2 xs={2.5} className="form-title"></Grid2>
          <Grid2 xs={3.5} className="form-body"></Grid2>