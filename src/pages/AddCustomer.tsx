import { useNavigate } from "react-router"
import { useContext, useState } from "react"
import { CustomerContext } from "../store/CustomerProvider.tsx"
import { Customer } from "../models/Customer.ts"
import { Modal } from "../components/Modal"
import React from "react"

export function AddCustomer() {
  const navigate = useNavigate()
  const [customers, setCustomers] = useContext(CustomerContext)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  function handleSubmit() {
    const newCustomer = new Customer(name, email, phone)
    setCustomers((customers: Customer[]) => [...customers, newCustomer])
    navigate("/")
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <header>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Add Customer</h2>
      </header>
      <br />

      <Modal
        handleSubmit={handleSubmit}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
      >
        Add Customer
      </Modal>
    </div>
  )
}
