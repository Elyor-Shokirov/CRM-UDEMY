import { useState } from 'react'

export const useShowPassword = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

	const toggleShow = () => {
		setShowPassword(prev => !prev)
	}
	const toggleShowConfirm = () => {
		setShowConfirmPassword(prev => !prev)
	}
	return { showPassword, toggleShow, showConfirmPassword, toggleShowConfirm }
}
