
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <h2>Simple form</h2>
                <TextValidator
                    floatingLabelText="Email"
                    onChange={this.handleChange('email')}
                    name="email"
                    value={this.state.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br />
                <TextValidator
                    floatingLabelText="Password"
                    onChange={this.handleChange('password')}
                    name="password"
                    value={this.state.password}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br />
                <Button
                    type="submit"
                    label={
                        (this.state.submitted && 'Your form is submitted!')
                        || (!this.state.submitted && 'Submit')
                    }
                    disabled={this.state.submitted}
                >Submit</Button>
            </ValidatorForm>
