import { keys } from 'lodash'

module.exports = {
	validate(fields, prevError, key) {
		const errors = {}
		keys(fields).map(field => {
			const value = fields[field].trim()

			if (key && field !== key)
				return

			errors[field] = '' // to reset the previous value

			if (!value) // empty
				errors[field] = `${field} shouldn't be empty`

			if (value && field.includes('email') && !/\S+@\S+\.\S+/.test(value)) // valid email
				errors[field] = `Invalid e-mail`

			if (field.includes('pass') && value && !(value.length > 5 && value.length < 12) ) // valid password
				errors[field] = 'Please use at least 6-12 characters'
		})	

		return { ...prevError, ...errors }
	}
}