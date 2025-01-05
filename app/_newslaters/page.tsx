'use client'

import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field } from 'formik'

type SubscribeFormProps = Record<string, never>

const requiredSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
})

function SubscribeForm(props: SubscribeFormProps) {
  const [status, setStatus] = useState<number | null>(null)
  const [message, setMessage] = useState<string>('')
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false)
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [run, setRun] = useState<boolean>(false)
  const [totalCounts, setTotalCounts] = useState<number>(400)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      const { innerWidth: width, innerHeight: height } = window
      setDimensions({ width, height })
    }

    updateDimensions() // Set initial dimensions
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  return (
    <div className="flex flex-col space-y-8 md:w-[500px]">
      <Formik
        initialValues={{ email: '' }}
        validationSchema={requiredSchema}
        onSubmit={async (values, { resetForm }) => {
          setButtonDisabled(true)
          setSubmitting(true)
          try {
            const response = await fetch('/api/subscribe', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email: values.email }),
            })

            const data = await response.json()
            if (response.status >= 400) {
              setStatus(response.status)
              setMessage(
                'Error joining the newsletter. You can directly contact me at github@ebraj.'
              )
              setTimeout(() => {
                setMessage('')
                setButtonDisabled(false)
                setSubmitting(false)
              }, 2000)
              return
            }

            setStatus(201)
            setMessage('Thank you for subscribing to my newsletter 👻.')
            setRun(true)
            setTimeout(() => {
              setMessage('')
              resetForm()
              setButtonDisabled(false)
              setSubmitting(false)
              setTotalCounts(400)
            }, 4000)
          } catch (error) {
            setStatus(500)
            setMessage('Error joining the newsletter. You can directly contact me at github@ebraj.')
            setTimeout(() => {
              setMessage('')
              setButtonDisabled(false)
              setSubmitting(false)
            }, 2000)
          }
        }}
      >
        <Form className="w-full">
          <div className="flex w-full flex-1 gap-2 rounded-full border border-black bg-transparent px-3">
            <Field
              type="email"
              name="email"
              className="w-full grow rounded-md bg-transparent px-5 py-3 outline-none"
              placeholder="Enter your email"
              autoComplete="off"
            />
            <button
              style={{ backgroundColor: 'rgb(236 72 153 / var(--tw-text-opacity, 1))' }}
              className="my-2 rounded-full px-4 py-2 font-bold text-gray-100 transition-all hover:scale-105 hover:bg-gray-900 disabled:opacity-80"
              type="submit"
              disabled={buttonDisabled}
            >
              {submitting ? 'Submitting...' : 'Subscribe'}
            </button>
          </div>
          {message && (
            <p className={`${status !== 201 ? 'text-red-500' : 'text-green-500'} pt-4 font-black`}>
              {message}
            </p>
          )}
        </Form>
      </Formik>
    </div>
  )
}

export default SubscribeForm
