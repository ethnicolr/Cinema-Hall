import React, { useEffect, useState } from 'react'
import { get_prop } from '../utils'

interface FieldType {
    required: boolean
    compareField?: string
    validator?: {
        func: (value: string) => boolean
        error: string
    }
}

type StateSheme = Record<string, FieldType>

function useForm<T extends StateSheme, K extends keyof T>(
    stateScheme: T,
    onSubmit: (...agrs: any) => void
) {
    const [values, setValues] = useState(get_prop(stateScheme))
    const [errors, setErrors] = useState(get_prop(stateScheme))
    const [fieldDirty, setFieldDirty] = useState(get_prop(stateScheme))
    const [formDirty, setFormDirty] = useState(false)
    const [formDisabled, setDisabled] = useState(true)

    useEffect(() => {
        if (formDirty) {
            setDisabled(
                Object.values(errors).some((error) => error) ||
                    Object.values(values).some((value) => !value)
            )
        }
    }, [formDirty, errors, values])

    const validateValue = (name: K, value: string) => {
        const field = stateScheme[name]
        // const compareField = values[field.compareField]

        let error
        if (!value && field.required) {
            error = 'Поле обязательное'
        }
        if (field.validator?.func(value)) {
            error = field.validator.error
        }
        return error
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const field = e.target.name as K
        const value = e.target.value
        const error = validateValue(field, value)

        setValues((prevState) => ({ ...prevState, [field]: value }))
        setErrors((prevState) => ({ ...prevState, [field]: error }))
        setFormDirty(true)
    }

    const handleOnBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        const field = e.target.name as K
        setFieldDirty((prevState) => ({ ...prevState, [field]: true }))
    }

    const clearForm = () => {
        setValues(get_prop(stateScheme))
        setErrors(get_prop(stateScheme))
    }

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(values)
    }

    return {
        values,
        errors,
        formDirty,
        handleChange,
        handleOnBlur,
        handleOnSubmit,
        fieldDirty,
        formDisabled,
        clearForm,
    }
}

export { useForm }
